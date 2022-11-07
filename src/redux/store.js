import { createStore } from 'redux';
import rootReducer from './rootreducer';

const store = createStore(rootReducer);

export default store;