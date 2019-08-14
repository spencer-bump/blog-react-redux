// Action Creators
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
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);

    dispatch({
      type: "FETCH_USER",
      payload: response.data
    });
  };
 }
