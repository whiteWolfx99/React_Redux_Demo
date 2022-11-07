import { createStore, applyMiddleware} from 'redux';
import rootReducer from './rootreducer';
import Logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Logger)));

export default store;
