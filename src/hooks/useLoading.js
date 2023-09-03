import { useState } from "react";

/**
 * useLoading - A custom React hook for managing loading states.
 *
 * @returns {Object} An object containing the current loading state and a function to set the loading state.
 */
const useLoading = () => {
  // Initialize the loading state as 'false' (not loading).
  const [loading, setLoading] = useState(false);

  /**
   * setOnLoading - A function to set the loading state.
   *
   * @param {boolean} value - The loading state value ('true' for loading, 'false' for not loading).
   */
  const setOnLoading = (value) => {
    setLoading(value);
  };

  // Return an object with the current loading state and the function to set the loading state.
  return { loading, setOnLoading };
};

export default useLoading;
