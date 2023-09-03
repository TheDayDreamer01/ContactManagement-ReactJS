import axios from "axios";
import { CONTACT_URL } from "../constants/serviceConstant.js";

/**
 * Create an Axios instance with a base URL and authorization header.
 *
 * @param {string} key - The authentication key (e.g., access token).
 * @returns {Object} An Axios instance configured with the provided key.
 */
const createAuthorizedInstance = (key) =>
  axios.create({
    baseURL: CONTACT_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
  });

/**
 * GetUserContacts - Retrieve user contacts.
 *
 * @param {string} key - The authentication key (e.g., access token).
 * @returns {Promise} A Promise that resolves to the API response or rejects with an error response.
 */
export const GetUserContacts = async (key) => {
  // Create an Axios instance with authorization headers.
  const axiosInstance = createAuthorizedInstance(key);

  try {
    // Send a GET request to retrieve user contacts.
    const response = await axiosInstance.get();
    return response;
  } catch (error) {
    // If an error occurs, return the error response.
    return error.response;
  }
};

/**
 * GetUserContact - Retrieve a specific user contact.
 *
 * @param {string} key - The authentication key (e.g., access token).
 * @param {string} contactId - The ID of the contact to retrieve.
 * @returns {Promise} A Promise that resolves to the API response or rejects with an error response.
 */
export const GetUserContact = async (key, contactId) => {
  // Create an Axios instance with authorization headers.
  const axiosInstance = createAuthorizedInstance(key);

  try {
    // Send a GET request to retrieve a specific user contact.
    const response = await axiosInstance.get(`/${contactId}`);
    return response;
  } catch (error) {
    // If an error occurs, return the error response.
    return error.response;
  }
};

/**
 * CreateUserContact - Create a new user contact.
 *
 * @param {string} key - The authentication key (e.g., access token).
 * @param {Object} contactData - Data for creating a new contact.
 * @returns {Promise} A Promise that resolves to the API response or rejects with an error response.
 */
export const CreateUserContact = async (key, contactData) => {
  // Create an Axios instance with authorization headers.
  const axiosInstance = createAuthorizedInstance(key);

  try {
    // Send a POST request to create a new user contact.
    const response = await axiosInstance.post("", contactData);
    return response;
  } catch (error) {
    // If an error occurs, return the error response.
    return error.response;
  }
};

/**
 * UpdateUserContact - Update a user contact.
 *
 * @param {string} key - The authentication key (e.g., access token).
 * @param {string} contactId - The ID of the contact to update.
 * @param {Object} contactData - Updated contact data.
 * @returns {Promise} A Promise that resolves to the API response or rejects with an error response.
 */
export const UpdateUserContact = async (key, contactId, contactData) => {
  // Create an Axios instance with authorization headers.
  const axiosInstance = createAuthorizedInstance(key);

  try {
    // Send a PUT request to update a user contact.
    const response = await axiosInstance.put(`/${contactId}`, contactData);
    return response;
  } catch (error) {
    // If an error occurs, return the error response.
    return error.response;
  }
};

/**
 * UpdateUserContactProperty - Update a specific property of a user contact.
 *
 * @param {string} key - The authentication key (e.g., access token).
 * @param {string} contactId - The ID of the contact to update.
 * @param {Object} contactData - Updated contact data with specific properties.
 * @returns {Promise} A Promise that resolves to the API response or rejects with an error response.
 */
export const UpdateUserContactProperty = async (
  key,
  contactId,
  contactData
) => {
  // Create an Axios instance with authorization headers.
  const axiosInstance = createAuthorizedInstance(key);

  try {
    // Send a PATCH request to update specific properties of a user contact.
    const response = await axiosInstance.patch(`/${contactId}`, contactData);
    return response;
  } catch (error) {
    // If an error occurs, return the error response.
    return error.response;
  }
};

/**
 * DeleteUserContact - Delete a user contact.
 *
 * @param {string} key - The authentication key (e.g., access token).
 * @param {string} contactId - The ID of the contact to delete.
 * @returns {Promise} A Promise that resolves to the API response or rejects with an error response.
 */
export const DeleteUserContact = async (key, contactId) => {
  // Create an Axios instance with authorization headers.
  const axiosInstance = createAuthorizedInstance(key);

  try {
    // Send a DELETE request to delete a user contact.
    const response = await axiosInstance.delete(`/${contactId}`);
    return response;
  } catch (error) {
    // If an error occurs, return the error response.
    return error.response;
  }
};
