import { createStore } from 'redux';
import cakeReducer from './cakes/cakeReducer';

const store = createStore(cakeReducer);

export default store;