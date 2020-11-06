import axios from 'axios'
// User login
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_FAIL = 'LOGIN_FAIL'

// Create user
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_FAIL = 'SIGNUP_FAIL' 

// Action for Signup
export const signupUser = (payload) => dispatch => {
    dispatch(signupUserReq())
    console.log('object-----------')
    axios({
        url: "http://localhost:5000/api/v1/fackbook/signup",
        method: "POST",
        headers: {
            "Content-Type" : 'application/json'
        },
        data : payload
    }).then(res => {
        console.log(res,'-------')
        dispatch(signupUserSuccess(res.data))
    }).catch(err => {
        signupUserFail()
         console.log(err);
    })
    console.log("complet--------------")
}

export const signupUserReq = () => ({
    type: SIGNUP_REQUEST,
})

export const signupUserSuccess = (payload) => ({
    type: SIGNUP_SUCCESS,
    payload
})

export const signupUserFail = (payload) => ({
    type: SIGNUP_FAIL,
    payload
})

// Action for login
export const loginUser = (payload) => dispatch => {
    dispatch (loginUserReq())
     axios({
            url: "http://localhost:5000/api/v1/fackbook/login",
            method: "POST",
            headers: {
                "Content-Type" : 'application/json'
            },
            data: payload
        }).then(res => {
           dispatch(loginUserSuccess(res.data))
            console.log(res);
        }).catch(err => {
            loginUserFail()
            console.log(err);
        })
}

export const loginUserReq = () => ({
    type: LOGIN_REQUEST,
})

export const loginUserSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
})

export const loginUserFail = (payload) => ({
    type: LOGIN_FAIL,
    payload
})

