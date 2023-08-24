import axios from "axios";
import { USER_URL } from "../constants/serviceConstant.js";


const instance = (key) => axios.create({
    baseURL : USER_URL,
    headers : {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${key}`
    }
});


export const GetUserProfile = async (key) => {
    const axiosInstance = instance(key);

    try {
        const response = await axiosInstance.get("");
        return response;
    } catch (error) {
        return error.response;
    }
};

export const UpdateUserProfile = async (key, userData) => {
    const axiosInstance = instance(key);

    try {
        const response = await axiosInstance.get("", userData);
        return response;
    } catch (error) {
        return error.response;
    }
};