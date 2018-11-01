import { createStore } from 'redux';
import rootReducer from './reducer/rootReducer';
import {addUser} from './action/index';
const store = createStore(rootReducer);
//store.dispatch(addUser('Me'))
export default store;