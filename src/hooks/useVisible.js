import { useState } from "react";

/**
 * useVisible - A custom React hook for managing visibility states.
 *
 * @returns {Object} An object containing the current visibility state and a function to toggle visibility.
 */
const useVisible = () => {
  // Initialize the visibility state as 'false' (not visible).
  const [visible, setVisible] = useState(false);

  /**
   * onSetVisibility - A function to toggle the visibility state.
   *
   * @param {Object} e - The event object (typically from a user interaction like a button click).
   */
  const onSetVisibility = (e) => {
    e.preventDefault(); // Prevents any default behavior, such as following a link.
    setVisible((prevVisible) => !prevVisible); // Toggle the visibility state.
  };

  // Return an object with the current visibility state and the function to toggle visibility.
  return { visible, onSetVisibility };
};

export default useVisible;
