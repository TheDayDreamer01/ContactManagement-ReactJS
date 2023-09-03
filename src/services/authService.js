import axios from "axios";
import { AUTH_URL } from "../constants/serviceConstant.js";

// Create an Axios instance with a base URL and common headers
const instance = axios.create({
  baseURL: AUTH_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * SignUpService - Send a POST request to sign up a user.
 *
 * @param {Object} userData - User data for sign-up.
 * @returns {Promise} A Promise that resolves to the API response or rejects with an error response.
 */
export const SignUpService = async (userData) => {
  try {
    // Send a POST request to the "/signup" endpoint with user data.
    const response = await instance.post("/signup", userData);
    return response;
  } catch (error) {
    // If an error occurs, return the error response.
    return error.response;
  }
};

/**
 * SignInService - Send a POST request to sign in a user.
 *
 * @param {Object} userData - User data for sign-in.
 * @returns {Promise} A Promise that resolves to the API response or rejects with an error response.
 */
export const SignInService = async (userData) => {
  try {
    // Send a POST request to the "/signin" endpoint with user data.
    const response = await instance.post("/signin", userData);
    return response;
  } catch (error) {
    // If an error occurs, return the error response.
    return error.response;
  }
};
