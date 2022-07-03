import { combineReducers } from 'redux';

import posts from './posts';
import authReducer from './auth';

const reducers = combineReducers({ posts, authReducer });

export default reducers;