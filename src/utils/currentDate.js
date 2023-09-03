/**
 * getCurrentDate - Get the current date in the format "MM-DD-YYYY".
 *
 * @returns {string} The current date in "MM-DD-YYYY" format.
 */
export const getCurrentDate = () => {
  // Create a new Date object to represent the current date and time.
  const now = new Date();

  // Extract the year, month, and day components from the Date object.
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1.
  const day = String(now.getDate()).padStart(2, "0");

  // Format the date components into "MM-DD-YYYY" format and return the result.
  return `${month}-${day}-${year}`;
};
