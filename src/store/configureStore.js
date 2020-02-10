import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import entriesReducer from '../reducers/entries.reducer';
import detailedReducer from '../reducers/detailed.reducer';
import filteringReducer from '../reducers/filtering.reducer';

const store = createStore(combineReducers({
  entries: entriesReducer,
  details: detailedReducer,
  filtering: filteringReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
