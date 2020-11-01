import {LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAIL} from './Action'


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
                token: payload
            }
         case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
            }

        
        default: 
            return state
    }
}

export default reducer