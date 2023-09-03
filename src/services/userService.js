import axios from "axios";
import { USER_URL } from "../constants/serviceConstant.js";

/**
 * Create an Axios instance with a base URL and authorization header.
 *
 * @param {string} key - The authentication key (e.g., access token).
 * @returns {Object} An Axios instance configured with the provided key.
 */
const createAuthorizedInstance = (key) =>
  axios.create({
    baseURL: USER_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
  });

/**
 * GetUserProfile - Retrieve user profile data.
 *
 * @param {string} key - The authentication key (e.g., access token).
 * @returns {Promise} A Promise that resolves to the API response or rejects with an error response.
 */
export const GetUserProfile = async (key) => {
  // Create an Axios instance with authorization headers.
  const axiosInstance = createAuthorizedInstance(key);

  try {
    // Send a GET request to retrieve user profile data.
    const response = await axiosInstance.get("");
    return response;
  } catch (error) {
    // If an error occurs, return the error response.
    return error.response;
  }
};

/**
 * UpdateUserProfile - Update user profile data.
 *
 * @param {string} key - The authentication key (e.g., access token).
 * @param {Object} userData - Updated user profile data.
 * @returns {Promise} A Promise that resolves to the API response or rejects with an error response.
 */
export const UpdateUserProfile = async (key, userData) => {
  // Create an Axios instance with authorization headers.
  const axiosInstance = createAuthorizedInstance(key);

  try {
    // Send a PUT request to update user profile data.
    const response = await axiosInstance.put("", userData);
    return response;
  } catch (error) {
    // If an error occurs, return the error response.
    return error.response;
  }
};
