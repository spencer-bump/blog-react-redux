// Action Creators
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts =  () => {
  return async (dispatch) => {
    const response =  await jsonPlaceholder.get('/posts');

    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    });
  };
};

export const fetchUser = (userId) => {
  return  (dispatch) => {
    _fetchUser(userId, dispatch);
  };
 };

// 'memoize' the function so it gets called only
// once per userId
const _fetchUser = _.memoize(async (userId, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);

  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
});
