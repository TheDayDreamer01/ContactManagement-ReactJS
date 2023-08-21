import axios from "axios";
import { AUTH_URL } from "../constants/serviceConstant.js";

const instance = axios.create({
    baseURL: AUTH_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const SignUpService = async (userData) => {
    try {
        const response = await instance.post("/signup", userData);
        return response;
    } catch (error) {
        return error.response;
    }
};

export const SignInService = async (userData) => {
    try {
        const response = await instance.post("/signin", userData);
        return response;
    } catch (error) {
        return error.response;
    }
};