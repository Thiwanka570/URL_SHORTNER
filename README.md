

# URL Shortener

A web application for shortening URLs, built using the MERN (MongoDB, Express, React, Node.js) stack.

## Features

- Shorten long URLs into concise links.
- View a list of shortened URLs.
- Redirect users from short URLs to original links.
- Real-time usage statistics for links (optional).
- Modern and responsive user interface.

## Tech Stack

- **Frontend:** React, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other:** Mongoose, Axios

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- Git installed on your machine.

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Thiwanka570/URL_SHORTNER.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd URL_SHORTNER
   ```

3. Install dependencies for the backend:
   ```bash
   cd server
   npm install
   ```

4. Install dependencies for the frontend:
   ```bash
   cd ../client
   npm install
   ```

5. Set up environment variables:
   - Create a `.env` file in the `server` folder.
   - Add the following environment variables:
     ```
     MONGO_URI=<your-mongodb-connection-string>
     PORT=5000
     BASE_URL=http://localhost:5000
     ```

6. Start the application:
   - Run the backend:
     ```bash
     cd ../server
     npm start
     ```
   - Run the frontend:
     ```bash
     cd ../client
     npm start
     ```

7. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Folder Structure

- `/server`: Backend code (Express API and database logic).
- `/client`: Frontend code (React application).

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!

- **Author:** Thiwanka  
- **GitHub:** [Thiwanka570](https://github.com/Thiwanka570)  
- **Email:** *your-email@example.com*

--- 

Replace placeholders (like `<your-mongodb-connection-string>` and `your-email@example.com`) with actual details to personalize the README.
