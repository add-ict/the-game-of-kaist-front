import {combineReducers} from 'redux';
import publicDB from './publicDB';
import privateDB from './privateDB';

const rootReducer = combineReducers({
    publicDB,
    privateDB,
});

export default rootReducer;