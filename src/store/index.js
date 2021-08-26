import { createStore } from 'redux';
import favoriteListreducer from './reducer';

const store = createStore(favoriteListreducer);

export default store;