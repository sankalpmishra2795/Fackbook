import {LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAIL ,SIGNUP_SUCCESS, SIGNUP_REQUEST,  SIGNUP_FAIL} from './Action'


const initialState = {
    token: "",
    user: {},
    isAuth: false,
    isLoading:false
}

const reducer = (state = initialState ,action ) => {
    const { type, payload } = action
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading:true
            }
        
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth:true,
                user: payload
            }
         case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
            }
        case SIGNUP_REQUEST:
            return {
                ...state,
                isLoading : true,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: payload,
                isLoading: false,
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                isLoading: false
            }
        
        default: 
            return state
    }
}

export default reducer