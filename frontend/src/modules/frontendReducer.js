const initialState = {
    token: null, //this token is for something to read for initialState, despite it is start as null.
};
const LOCAL_HOST = 'http://localhost:8080';
const FAILED_MESSAGE = "FAILED MESSAGE";
const LOGIN_TOKEN = "LOGIN_TOKEN";
const LOGOUT_TOKEN = "LOGOUT_TOKEN"
export default function (state =initialState, action) {
    switch (action.type) {
        case LOGIN_TOKEN: {
            return {...state, currentUserToken: action.data}
        }
        case LOGOUT_TOKEN: {
            return {...state, token: null}
        }
        case FAILED_MESSAGE: {
            return {...state, error: action.data}

        }
    }
    return state
}

export function getTheBackendIndexController(){
    return async (dispatch,getState)=>{
        //calling TestingIndexController from backend
        let response = await fetch(`${LOCAL_HOST}/TestingIndexController`);
        let data = await response.json();
        console.log(data);
    }
}

export function frontendLogin(username,password){
    return async (dispatch, getState) => {
        const response = await fetch(
            `${LOCAL_HOST}/BackendUserLogin?username=${username}&password=${password}`)

        //this is to check if login is not successfully when 200 error code is shown.
        if(response.statusCode > 200) {
            dispatch(/*some kind of action LOGIN FAILED*/)
        }
        let data = await response.text(); //this text() will display raw body NOT Json - and it is a PROMISE
        dispatch({type: LOGIN_TOKEN, data})
    }
}

export function frontendLogout(){
    return async (dispatch, getState) => {
        let token = getState().token;
        const response = await fetch(`${LOCAL_HOST}/BackendUserLogout?token=${token}`) //this is referring to BackendController token.
        if (!response.ok) {
            let data = await response.text();
            return dispatch({type: FAILED_MESSAGE, data: data.message});
            dispatch({type: LOGOUT_TOKEN})
        }
    }
}

export function frontendSignUp(username,password) {
    return async (dispatch, getState) => {
        const response = await fetch(`${LOCAL_HOST}/BackendUserSignup?username=${username}&password${password}`)
        if (!response.ok) {
            let data = await response.text();
            return dispatch({type: FAILED_MESSAGE, data: data.message});
        }
    }
}
