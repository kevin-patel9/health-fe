import { postData } from "../common/ApiCall"

export const registerApi = async (data) => {
    return await postData('api/user/register', data,true);
}

export const loginEmail = async (email, password) => {
    return await postData('api/user/login',{email, password},true);
}

export const sendOTPApi = async (email) => {
    return await postData('api/user/sendOtp', {email},true);
}

export const sendOTPForPhoneApi = async (phoneNumber) => {
    return await postData('api/user/sendOTPForPhone', {phoneNumber},true);
}

export const verifyEmail = async (email, otp) => {
    return await postData('api/user/verifyEmail',{email, otp},true);
}

export const verifyPhoneNumber = async (phoneNumber, otp) => {
    return await postData('api/user/verifyPhoneNumber',{phoneNumber, otp},true);
}

export const updatePasswordEmail = async (email, newPassword, confirmPassword) => {
    return await postData('api/user/updatePassword',{email, newPassword, confirmPassword},true);
}

export const updatePasswordPhone = async (phoneNumber, newPassword, confirmPassword) => {
    return await postData('api/user/updatePassword',{phoneNumber, newPassword, confirmPassword},true);
}

export const logoutApi = async () => {
    return await postData('api/user/logout');
}