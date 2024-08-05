# Supermarket App

## Overview

The Supermarket App is a simple React application designed to display a list of products retrieved from an API endpoint. Users can add products to a shopping basket and view the items in their basket. The app handles both successful and failed API requests gracefully, providing feedback to the user.

## Features

- Displays a list of products with names and prices.
- Allows users to add products to a basket.
- Shows the items added to the basket.
- Handles API request errors and displays an error message.
- Responsive design to work on both desktop and mobile screens.

## Directory Structure

```
├── public
│ ├── index.html
│ ├── favicon.ico
│ └── ...
├── src
│ ├── components
│ │ ├── Basket.js
│ │ ├── Header.js
│ │ ├── Product.js
│ │ ├── ProductList.js
│ ├── __tests__
│ │ ├── App.test.js
│ │ ├── Basket.test.js
│ │ ├── Product.test.js
│ ├── App.js
│ ├── index.js
│ ├── setupTests.js
│ └── ...
├── .eslintrc.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/your-username/supermarket-app.git
   cd supermarket-app
   ```

2. **Install dependencies:**:
    ```npm install
    ```

3. **Run app**:
    ```
    npm start
    ```

4. **Run tests**:
    ```
    npm test
    ```