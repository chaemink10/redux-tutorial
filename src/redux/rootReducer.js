import { combineReducers } from 'redux';
import subscribersReducer from './subscribers/reducer';
import viewReducer from './views/reducer';

const rootReducer = combineReducers({
  subscribers: subscribersReducer,
  views: viewReducer,
});

export default rootReducer;
