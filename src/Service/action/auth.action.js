import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, LOGIN_FAIL} from "../constant/actionTypes";
import { Auth } from "../../Components/Firebase/Firebase";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const provider = new GoogleAuthProvider();

const SignUpSuccess = (user) => {
    return {
        type : SIGNUP_SUCCESS,
        payload : user
    }
}
const SignUpFail = (err) => {
    return {
        type : SIGNUP_FAIL,
        payload : err
    }
}
const LogInSuccess = (user) => {
    return {
        type : LOGIN_SUCCESS,
        payload : user
    }
}
const LogInFail = (err) => {
    return {
        type : LOGIN_FAIL,
        payload : err
    }
}

export  const logInGoogle = () => {
    return diapatch => {
        signInWithPopup(Auth, provider)
        .then((userCredential) => {
            console.log("userCredential", userCredential);
            const user = userCredential.user
            sessionStorage.setItem("LoginData", JSON.stringify(user))
            diapatch(LogInSuccess(user))
        }).catch((err) => {
            console.log("error", err);
            diapatch(LogInFail(err))
        })
    }
}


export const signUpInitiate = (email, password) => {
    return dispatch => {
        createUserWithEmailAndPassword(Auth, email, password).then((userCredential) => {
            console.log("userCredential", userCredential.user);
            const user = userCredential.user
            sessionStorage.setItem("LoginData", JSON.stringify(user))
            dispatch(SignUpSuccess(user))
        }).catch((err) => {
            console.log("error", err);
            dispatch(SignUpFail(err))
        })
    }
}

export const logInInitiate = (email, password) => {
    return dispatch => {
        signInWithEmailAndPassword(Auth, email, password).then((userCredential) => {
            console.log("userCredential", userCredential.user);
            const user = userCredential.user
            sessionStorage.setItem("LoginData", JSON.stringify(user))
            dispatch(LogInSuccess(user))
        }).catch((err) => {
            console.log("error", err.code);
            dispatch(LogInFail(err.code))
        })
    }
}