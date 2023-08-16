import axios from "axios";
import { CONTACT_URL } from "../constants/constants.js";

const instance = (key) => axios.create({
    baseURL: CONTACT_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`
    }
});

export const GetUserContacts = async (key) => {
    const axiosInstance = instance(key);

    try {
        const response = await axiosInstance.get();
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get user's contacts. Please try again.")
    }
};

export const GetUserContact = async (key, contactId) => {
    const axiosInstance = instance(key);
    
    try {
        const response = await axiosInstance.get(`/${contactId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get user's contact. Please try again.")
    }
};

export const CreateUserContact = async (key, contactData) => {
    const axiosInstance = instance(key);
    
    try {
        const response = await axiosInstance.post("", contactData);
        return response.data;
    } catch (error) {   
        console.log(error);
        throw new Error("Failed to create user's contact. Please try again.")
    }
};

export const UpdateUserContact = async (key, contactId, contactData) => {
    const axiosInstance = instance(key);

    try {
        const response = await axiosInstance.put(`/${contactId}`, contactData);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to update user's contact. Please try again.")
    }
};
