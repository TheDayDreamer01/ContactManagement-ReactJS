export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) {
    return "Email is required.";
  } else if (!email.match(emailPattern)) {
    return "Invalid email address.";
  } else {
    return "";
  }
};

export const validatePasswordLength = (password) => {
  if (!password.trim()) {
    return "Password is required.";
  } else if (password.trim().length < 6) {
    return "Password must at least be 6 characters long.";
  } else {
    return "";
  }
};

export const validateFirstName = (firstName) => {
  const namePattern = /^[\w\d\s]+$/;

  if (!firstName.trim()) {
    return "First Name is required.";
  } else if (firstName.trim().length < 2) {
    return "Must be 2 characters long.";
  } else if (!firstName.match(namePattern)) {
    return "Invalid first name.";
  } else {
    return "";
  }
};

export const validateLastName = (lastName) => {
  const namePattern = /^[\w\d\s]+$/;

  if (!lastName.trim()) {
    return "Last Name is required.";
  } else if (lastName.trim().length < 2) {
    return "Must be 2 characters long.";
  } else if (!lastName.match(namePattern)) {
    return "Invalid last name";
  } else {
    return "";
  }
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword.trim()) {
    return "Confirm Password is required.";
  } else if (confirmPassword.trim() !== password.trim()) {
    return "Password does not match.";
  } else {
    return "";
  }
};
