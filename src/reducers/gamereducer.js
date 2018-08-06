import types from '../actions/types';

const DEFAULT_STATE = {
    details: {},
    errors: null,
    loading: true
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.VIEW_DETAILS:
            if(!action.payload.data.data[0].related_game_apps){
                return {
                    ...state, 
                    details: action.payload.data.data[0],
                    errors: "No related games available",
                    loading: false
                }
            }
            return {...state, details: action.payload.data.data[0], loading: false};
        case types.SET_LOADING_FLAG:
            return {...state, loading: true
            } 
        default:
            return state;
    }
}