# Cognito Supermarket App

## Overview

This Supermarket App is a simple React application designed to display a list of products retrieved from an API endpoint. Users can add products to a shopping basket, view the items in their basket and remove items from their basket. The app handles both successful and failed API requests, providing feedback to the user.

## Features

- Displays a list of products with names and prices.
- Shows users a product description via a dropdown.
- Allows users to add products to a basket.
- Allows users to remove products from the basket.
- Shows the items added to the basket.
- Shows the total sum of the items in the basket.
- Handles API request errors and displays an error message.
- Responsive design to work on both desktop and mobile screens.

## Directory Structure

```
├── public
│ ├── index.html
│ ├── favicon.ico
│ └── ...
├── src
│ ├── __tests__
│ │ ├── App.test.js
│ │ ├── Basket.test.js
│ │ └── Product.test.js
│ ├── components
│ │ ├── Basket.js
│ │ ├── Header.js
│ │ ├── Product.js
│ │ └── ProductList.js
│ ├── App.js
│ ├── index.js
│ └── setupTests.js
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
   git clone https://github.com/kreider94/cognito-supermarket-app.git
   cd cognito-supermarket-app
   ```

2. **Install dependencies:**:
    ```
    npm install
    ```

3. **Run app**:
    ```
    npm start
    ```

4. **Run tests**:
    ```
    npm test
    ```

## State Management Explanation
In this project, the useState hook from React was used for state management. This decision was made because the application is relatively simple, with state management needs confined to a few components. The useState hook is straightforward to use and fits well with the current requirements of the app.

**Why useState?**

- Simplicity: The useState hook is part of the React core library and provides a simple way to manage state in functional components.
- Local State: The state management requirements are local to individual components and do not need to be shared across many components.
- Ease of Use: useState is easy to understand and implement, making it suitable for small to medium-sized applications.

**When to Consider Redux or Other State Management Libraries**

If the application grows larger and more complex, with state that needs to be shared across many components or managed in a more centralized way, then it might be beneficial to consider a more robust state management solution like Redux or Context API. These tools provide more powerful state management capabilities and can help manage complex state interactions and side effects.
