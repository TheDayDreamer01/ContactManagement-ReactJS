// Regular expressions for common validation patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePattern = /^[\w\d\s]+$/;
const phonePattern = /^[\w]+$/;

// Validation functions for various form fields

/**
 * Validate an email address.
 *
 * @param {string} email - The email address to validate.
 * @returns {string} An error message or an empty string if valid.
 */
export const validateEmail = (email) => {
  if (!email.trim()) {
    return "Email is required.";
  } else if (!email.match(emailPattern)) {
    return "Invalid email address.";
  }
  return "";
};

/**
 * Validate a password for minimum length.
 *
 * @param {string} password - The password to validate.
 * @returns {string} An error message or an empty string if valid.
 */
export const validatePasswordLength = (password) => {
  if (!password.trim()) {
    return "Password is required.";
  } else if (password.trim().length < 6) {
    return "Password must be at least 6 characters long.";
  }
  return "";
};

/**
 * Validate a first name.
 *
 * @param {string} firstName - The first name to validate.
 * @returns {string} An error message or an empty string if valid.
 */
export const validateFirstName = (firstName) => {
  if (!firstName.trim()) {
    return "First Name is required.";
  } else if (firstName.trim().length < 2) {
    return "Must be at least 2 characters long.";
  } else if (!firstName.match(namePattern)) {
    return "Invalid first name.";
  }
  return "";
};

/**
 * Validate a last name.
 *
 * @param {string} lastName - The last name to validate.
 * @returns {string} An error message or an empty string if valid.
 */
export const validateLastName = (lastName) => {
  if (!lastName.trim()) {
    return "Last Name is required.";
  } else if (lastName.trim().length < 2) {
    return "Must be at least 2 characters long.";
  } else if (!lastName.match(namePattern)) {
    return "Invalid last name.";
  }
  return "";
};

/**
 * Validate password confirmation.
 *
 * @param {string} password - The original password.
 * @param {string} confirmPassword - The confirmation password.
 * @returns {string} An error message or an empty string if valid.
 */
export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword.trim()) {
    return "Confirm Password is required.";
  } else if (confirmPassword.trim() !== password.trim()) {
    return "Password does not match.";
  }
  return "";
};

/**
 * Validate a phone number for length and pattern.
 *
 * @param {string} phoneNo - The phone number to validate.
 * @returns {string} An error message or an empty string if valid.
 */
export const validatePhone = (phoneNo) => {
  if (!phoneNo.trim()) {
    return "Phone No. is required.";
  } else if (phoneNo.trim().length !== 10) {
    return "Phone Number must be 10 characters long.";
  } else if (!phoneNo.match(phonePattern)) {
    return "Invalid phone number.";
  }
  return "";
};
