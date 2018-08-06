import types from '../actions/types';

const DEFAULT_STATE = {
    gamelist: null,
    errors: null,
    loading: true
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SEARCH_RESULTS:
            if(action.payload.data.success){
                return {...state, gamelist: action.payload.data, loading: false
                }
            }   
            return {
                ...state,
                gamelist: null,
                errors: action.payload.data.success
            }   
        case types.SET_LOADING_FLAG:
            return {...state, loading: true
            }   
        default:
            return state;
    }
}