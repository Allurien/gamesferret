import types from "../actions/types";

const DEFAULT_STATE = {
    auth: false,
    error: '',
    user: {}
};

export default (state = DEFAULT_STATE, action)=> {
    switch (action.type){
        case types.SIGN_UP:
        case types.SIGN_IN:
            return{auth: true, user: action.user, error: ''};

        case types.SIGN_OUT:
            return {auth: false};
        case types.AUTH_ERROR:
            return {auth: false, user: {}, error: action.error};
        default:
            return state;

    }
}