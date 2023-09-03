# Contact Management Frontend

Nexio is a modern and efficient Contact Management System that allows you to seamlessly manage your contacts and interactions. This README provides an overview of Nexio, instructions for installation using ReactJS and Vite, details on how to containerize the application using Docker, licensing information, and more.

## Overview

Nexio is a suggestion-based Contact Management System designed to simplify your contact management tasks. Its features include:

- User-friendly interface for managing contacts.
- Quick access to contact information.
- Intuitive suggestions for smoother interactions.
- Efficient contact categorization and organization.

## Installation (ReactJS + Vite)

To get Nexio up and running on your local machine, follow these installation steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/TheDayDreamer01/ContactManagement-ReactJS.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd contactmanagement-reactjs
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start the Development Server:**

   ```bash
   npm run dev
   ```

5. The Nexio application should now be running at `http://localhost:3000`. You can access it in your web browser to start managing your contacts.

## Use of Docker (Dockerfile)

Nexio can also be containerized using Docker. A `Dockerfile` is included in the repository.

To build and run Nexio in a Docker container, follow these steps:

1. **Build the Docker Image:**

   ```bash
   docker build -t contactmanagementsystem-frontend .
   ```

2. **Run the Docker Container:**

   ```bash
   docker run -p 3000:3000 contactmanagementsystem-frontend
   ```

3. Nexio should now be accessible at `http://localhost:3000`.

## Usage

Nexio is designed to be user-friendly and intuitive. Simply log in, and you can start managing your contacts, accessing suggestions, and organizing your interactions efficiently.

## License

Nexio is open-source software licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as needed.