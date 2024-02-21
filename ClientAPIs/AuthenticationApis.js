import { BASEAPIS } from "../BaseAPIs/BaseAPIs";


export const AuthAPIs = {
    registerUser: (data) => {
        return BASEAPIS.POSTAPI(data, 'register');
    },

    loginUser: (data) => {
        return BASEAPIS.POSTAPI(data, 'login');
    },

    verifyPhoneOtp: (data) => {
        return BASEAPIS.POSTAPI(data, 'verifyPhoneOtp');
    },
}