import { useState } from "react";

/**
 * useFormData - A custom React hook for managing form data.
 *
 * @param {Object} initialData - The initial form data.
 * @returns {Object} An object containing form data, a function to set form data, and a function to update form data.
 */
const useFormData = (initialData) => {
  // Initialize the form data state with the provided initial data.
  const [formData, setFormData] = useState(initialData);

  /**
   * onSetFormData - A function to update the form data when an input value changes.
   *
   * @param {Object} e - The event object from the input element.
   */
  const onSetFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Return an object with the current form data, the function to set form data, and the function to update form data.
  return { formData, setFormData, onSetFormData };
};

export default useFormData;
