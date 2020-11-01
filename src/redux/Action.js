import axios from 'axios'
// User login
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_FAIL = 'LOGIN_FAIL'

// Create user
export const SIGNUP_USER = 'SIGNUP_USER'


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
           dispatch(loginUserSuccess(res.data.token))
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
