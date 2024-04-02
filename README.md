
# Real Estate Platform Website
This is a real estate platform website that allows users to search for properties to buy or rent. The website integrates with the Google Maps API to provide location-based search functionality and display property listings on an interactive map.

## Features

- Search for properties by location, price range, and property type (buy or rent)
- Interactive map integration with Google Maps API to display property listings
- User authentication and authorization using Next Auth, MongoDB, Prisma, JWT, and cookies
- Responsive and modern user interface designed with React and SCSS
- Efficient state management using the Context API
- Seamless navigation and routing with React Router DOM
- Backend powered by Express.js and Node.js

## Technologies Used

- React: A JavaScript library for building user interfaces
- SCSS: A CSS preprocessor that extends the capabilities of CSS
- JavaScript: The programming language used for the frontend and backend
- Next Auth: An authentication library for Next.js applications
- MongoDB: A NoSQL database for storing user and property data
- Prisma: A modern database toolkit for simplified database access
- JWT (JSON Web Tokens): A standard for securely transmitting information between parties as a JSON object
- Cookies: Used for session management and authentication
- Context API: A React API for managing global state without prop drilling
- React Router DOM: A routing library for React applications
- Express.js: A web application framework for Node.js
- Node.js: A JavaScript runtime for server-side development

## Getting Started

To run the real estate platform website locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/DariusGuillaume/rental-website 
   ```

2. Install the dependencies:
   ```
   cd real-estate-platform
   npm install
   ```

3. Set up the environment variables:
   - Create a `.env` file in the root directory
   - Add the necessary environment variables (e.g., Google Maps API key, MongoDB connection string, JWT secret)

4. Start the development server:
   ```
   npm run dev 
   ```

5. Open your browser and visit `http://localhost:5173` to see the website in action.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

