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
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to sign up. Please try again later.");
    }
};

export const SignInService = async (userData) => {
    try {
        const response = await instance.post("/signin", userData);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to sign in. Please check your credentials and try again.");
    }
};