import { createStore, applyMiddleware} from 'redux';
import rootReducer from './rootreducer';
import Logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
     composeWithDevTools(applyMiddleware(Logger, thunk))
     )

export default store;
