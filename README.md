# Real Estate Website

## Overview
This is a full-stack real estate website built with Node.js for the backend and React with Tailwind CSS for the frontend. It allows users to browse, create, update, and delete property listings.

## Features
- User authentication (Sign Up, Sign In, OAuth)
- Create, update, and delete property listings
- Search and filter listings
- User profile management

## Tech Stack
- **Backend**: Node.js, Express.js
- **Frontend**: React, Tailwind CSS, Vite
- **Database**: MongoDB
- **State Management**: Redux Toolkit

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB instance

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/real-estate-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Real-Estate-Website
   ```
3. Install dependencies for both backend and frontend:
   ```bash
   # Backend
   cd api
   npm install

   # Frontend
   cd ../client
   npm install
   ```

## Environment Variables
Create a `.env` file in the `api` directory and add the following:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running the Application
1. Start the backend server:
   ```bash
   cd api
   npm start
   ```
2. Start the frontend development server:
   ```bash
   cd client
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:5173`.

## Folder Structure
### Backend (`api`)
- `controllers/`: Contains route handlers
- `models/`: Database models
- `routes/`: API routes
- `utils/`: Utility functions

### Frontend (`client`)
- `src/components/`: Reusable React components
- `src/pages/`: Page-level components
- `src/redux/`: Redux store and slices

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License.