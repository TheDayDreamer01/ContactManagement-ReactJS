import axios from "axios";
import { CONTACT_URL } from "../constants/serviceConstant.js";

const instance = (key) => axios.create({
    baseURL: CONTACT_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`
    }
});

export const GetUserContacts = async (key) => {
    const axiosInstance = instance(key);

    try {
        const response = await axiosInstance.get();
        return response;
    } catch (error) {
        return error.response;
    }
};

export const GetUserContact = async (key, contactId) => {
    const axiosInstance = instance(key);
    
    try {
        const response = await axiosInstance.get(`/${contactId}`);
        return response;
    } catch (error) {
        return error.response;
    }
};

export const CreateUserContact = async (key, contactData) => {
    const axiosInstance = instance(key);
    
    try {
        const response = await axiosInstance.post("", contactData);
        return response;
    } catch (error) {   
        return error.response;
    }
};

export const UpdateUserContact = async (key, contactId, contactData) => {
    const axiosInstance = instance(key);

    try {
        const response = await axiosInstance.put(`/${contactId}`, contactData);
        return response;
    } catch (error) {
        return error.response;
    }
};

export const UpdateUserContactProperty = async (key, contactId, contactData) => {
    const axiosInstance = instance(key);

    try {
        const response = await axiosInstance.patch(`/${contactId}`, contactData);
        return response;
    } catch (error) {
        return error.response;
    }
};

export const DeleteUserContact = async (key, contactId) => {
    const axiosInstance = instance(key);

    try {
        const response = await axiosInstance.delete(`/${contactId}`);
        return response;
    } catch (error) {
        return error.response;
    }
};
