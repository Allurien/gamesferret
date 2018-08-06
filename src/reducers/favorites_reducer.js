import types from "../actions/types";

const DEFAULT_STATE = {
    favorites: [],
    newFavorite: ''
};

export default (state = DEFAULT_STATE, action)=> {
    switch (action.type){
        case types.SEND_FAVORITE:
        
            return {...state, newFavorite: action.payload.data};
        case types.FAVORITE_RESULTS:
            return {...state, favorites: action.payload.data.data};
        case types.DELETE_FAVORITE:
            return {...state, favorites: action.payload.data.data};
        default:
            return state;
    }
}