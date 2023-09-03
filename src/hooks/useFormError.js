import { useState } from "react";

/**
 * useFormError - A custom React hook for managing form errors.
 *
 * @returns {Object} An object containing the current form errors and a function to set form errors.
 */
const useFormError = () => {
  // Initialize the form error state as an empty object.
  const [formError, setFormError] = useState({});

  /**
   * onSetFormError - A function to set form errors.
   *
   * @param {Object} data - The form error data, typically a key-value pair of field names and error messages.
   */
  const onSetFormError = (data) => {
    setFormError(data);
  };

  // Return an object with the current form errors and the function to set form errors.
  return { formError, onSetFormError };
};

export default useFormError;
