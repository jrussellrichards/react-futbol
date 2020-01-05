import { createStore, combineReducers} from 'redux';
import * as reducers from '../reducers/reducers';

const configureStore = (state = {}) => {
  const rootReducer = combineReducers(reducers);
  const store = createStore(rootReducer, state);

  return store;
};

export {
  configureStore
};




