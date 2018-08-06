import types from '../actions/types';
import { combineReducers } from '../../node_modules/redux';

const DEFAULT_STATE = {
    browseresult: null,
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.BROWSE_RESULTS:
            return {...state, browseresult: action.payload.data};
        default:
            return state;
    }
}