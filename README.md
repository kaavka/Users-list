# User Management System

This project is a simple user management system built with React and Next.js. It allows users to view a list of users, add new users, edit existing user information, and delete users.

## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**

   ````bash
   git clone https://github.com/your-username/user-management-system.git
   cd user-management-system```

   ````

2. **Install dependencies / run the project:**

   ```bash
   npm install
   npm run dev
   ```

## Components

### AddUser

- A component showcasing state usage to display a modal for editing and adding new users.

### DeleteButton

- Deletes an existing user.

### EditButton

- Opens a modal for editing user information.

### Footer

- A shared component across all pages with a link to the project's GitHub repository.

### FormPair

- A reusable component for form inputs.

### Header

- A shared component across all pages with a link to the homepage.

### NewUserForm

- A component for modifying existing user details or adding a new user.

### Pair

- A reusable component for displaying user information.

### UserCard

- Contains all information about a user.

### UserIcons

- A container for functional icons and user icons.

## Components in Detail

### NewUserForm Component

Allows users to add or edit user information.

### UserCard Component

Displays user information, including their name, email, age, and a brief description.

### UserIcons Component

Provides icons for user-related actions, such as deleting or editing a user.

## Utils

### Constants

- Used to maintain consistent constants across all components.

### validateUser

- Used for validating all keys of a new or edited user.

## Production Dependencies

- **axios (^1.6.2):** A popular library for making HTTP requests, likely used for handling API calls.
- **classnames (^2.3.2):** A utility for conditionally joining class names together, useful for managing dynamic class names in React components.
- **next (14.0.4):** A React framework that enables server-side rendering, automatic code splitting, and simpler configuration for React applications.
- **react (^18):** The core React library for building user interfaces.
- **react-dom (^18):** The ReactDOM library, necessary for rendering React components in the browser.

## Development Dependencies

- **@types/node (^20):** TypeScript type definitions for Node.js, required when using TypeScript in a Node.js environment.
- **@types/react (^18):** TypeScript type definitions for React.
- **@types/react-dom (^18):** TypeScript type definitions for ReactDOM.
- **@typescript-eslint/eslint-plugin (^6.15.0):** ESLint plugin for TypeScript, providing linting rules specific to TypeScript code.
- **@typescript-eslint/parser (^6.15.0):** ESLint parser for TypeScript, allowing ESLint to understand TypeScript syntax.
- **eslint (^8.56.0):** A popular linting tool for identifying and fixing problems in JavaScript and TypeScript code.
- **eslint-config-next (14.0.4):** ESLint configuration specific to Next.js projects.
- **eslint-config-prettier (^9.1.0):** ESLint configuration for Prettier integration, ensuring ESLint and Prettier work seamlessly together.
- **eslint-plugin-prettier (^5.1.1):** ESLint plugin that runs Prettier as an ESLint rule, enforcing consistent code formatting.
- **sass (^1.69.5):** The Sass preprocessor, used for styling and defining styles in a more maintainable way.
- **typescript (^5):** A superset of JavaScript that adds static typing, enhancing code quality and development experience.

These dependencies are essential for both development and production, providing the necessary tools and libraries to build and maintain your Next.js application.
