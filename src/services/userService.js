import axios from "axios";
import { USER_URL } from "../constants/serviceConstant.js";


const instance = (key) => axios.create({
    baseURL : USER_URL,
    timeout : 1000,
    headers : {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${key}`
    }
});


export const GetUserProfile = async (key) => {
    const axiosInstance = instance(key);

    try {
        const response = await axiosInstance.get("");
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get user's profile. Please try again.")
    }
};

export const UpdateUserProfile = async (key, userData) => {
    const axiosInstance = instance(key);

    try {
        const response = await axiosInstance.get("", userData);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to update user's profile. Please try again.")
    }
};