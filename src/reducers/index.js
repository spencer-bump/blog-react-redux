import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';


export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});

// ***************************
//   REDUCER RULES
// ***************************
// 1. MUST return any value besides 'undefined'
// 2. Processes 'state' or data based on previous state and the action
// 3. Reducers never reach out of themselves for data from network or DOM
// 4. Must not mutate it's input 'state' argument

// ***************************
// Initial Dummy Valid Reducer
// - helps with initial wire up
// ***************************
// export default combineReducers({
//   fakeReducer: () => "hey there"
// });

