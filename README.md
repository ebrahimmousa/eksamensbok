## ExamensBok Overview

This e-commerce platform is built with React.js and Vite for the frontend, while Strapi CMS serves as the backend. The goal is to provide a comprehensive solution for e-commerce needs, with a focus on high-quality code and seamless integration with external systems.

## Dependencies and Requirements

- Frontend: React.js, Vite
  TO HAVE ACCES TO THE REACT + VITE YOU NEED TO USE IT IN THE FRONT END FOLDER
  cd front end
  npm run dev

- Backend: Strapi CMS
  STRAPI CMS HEADLESS CONTENT MANAGEMENT SYSTEM : npm install strapi-sdk-javascript
  TO HAVE ACCESS TO THE STRAPI YOU NEED TO INSTALL USE IT IN THE BACKEND FOLDER :
  cd frontend
  cd backend
  cd my-project
  npm run develop

TO GET ACCES TO THE STRAPI ADMIN :
email: anders.andersson@elevera.org
password: Strapinew1234
DU ÄR EN SUPER ADMIN

- Additional Dependencies:
  REDUX : npm install @reduxjs/toolkit

- MUI MATERIALS:
  https://mui.com/material-ui/
  npm install @mui/material

- Slider :
  swiper : npm install swiper

- NODE.JS : https://nodejs.org/

- React UI Kit provided by MDB (Material Design for Bootstrap) : npm install mdb-react-ui-kit

- npm install react-router-dom

- npm install @stripe/stripe-js @stripe/react-stripe-js
  @stripe/stripe-js: This package includes the core Stripe.js library.
  @stripe/react-stripe-js: This package provides a set of React hooks and components that make it easier to integrate Stripe.js

- API KEYS FOR THE STRIPE PAYMENT METHOD :
  publishal
  pk_test_51Nw5ZcFZHoD1e3i2tCNsG6kJQ18ar9AKxuSHqapIw9WRADSPVoEKZml4pSLrwTnWxIf0zrNiO2gu6nM8wPQzTI4Y00cRzSqrFc

secret
sk_test_51Nw5ZcFZHoD1e3i2vUDQMlaKBLJwwbU7Hz41ZLuTWPZVGhR2iWymJH3QCRJLHpUizFASVKsInJktnIqHhefz1Ppb00JFrFhmIX

- NODEMAILER:
  Is a popular Node.js module for sending emails from Node.js applications
  npm install nodemailer
  CreateS a transporter using SMTP transport

- CORS package:
  Is a Node.js middleware that enables Cross-Origin Resource Sharing (CORS) in your web application
  npm install cors

Minimum requirements:

- Browser Versions:

Google Chrome:
Version 120.0.6099.225 (Official Build) (64-bit)

Microsoft Edge:
Version 121.0.2277.83 (Official build) (64-bit)

- Web Server Requirements:
  "engines": {
  "node": ">=18.0.0 <=20.x.x",
  "npm": ">=6.0.0"
  },
  "license": "MIT"
  src: FrontEnd\BackEnd\my-project\package.json

STRAPI VERSION
v4.19.0

API_KEY : http://localhost:1337/api/products?populate=\*

## Project Structure

1. Frontend:
   Source Code: FrontEnd/src/
   components/: Reusable React components.
   pages/: Top-level components for each page or route.
   services/: API interaction and utility functions.
   Redux/: Redux store configuration and slices.
   Static Assets: FrontEnd/public/
   Configuration: FrontEnd/.env, FrontEnd/package.json, FrontEnd/vite.config.js
2. Backend:
   Source Code: FrontEnd/BackEnd/my-project/src/
   api/: API routes, controllers, and services.
   config/, database/: Configuration files.
   Public Uploads: FrontEnd/BackEnd/my-project/public/uploads/
   Configuration: FrontEnd/BackEnd/my-project/.env
3. Shared:
   Common Code: FrontEnd/BackEnd/my-project/common/
   Images: FrontEnd/src/Images/

## Mandatory Elements

1. Fully or partially applying an existing system or framework. (REACT + VITE).
2. Relating to e-commerce or similar. (SELLING BOOKS).
3. Self-developed frontend code maintaining high quality.

Choose at least 3 of the following:

1. external system used via an API.
2. Connection to a payment solution.
3. Routing and fancy URLs.
4. RESTful API communication.
5. Frontend is responsive.
6. Frontend without page reloads.
7. Product and inventory management using Strapi CMS.
8. Different user levels.

## Contact

For any inquiries or assistance, please contact:

- Email: ebrahim-mousa@hotmail.com
