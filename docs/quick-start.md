# Quick Start Guide

Follow these steps to quickly set up and run the project:

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v20 or later)
- [Angular CLI](https://angular.io/cli) (v19 or later)

## Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/code-chimp/bdd-ng-app.git
   cd bdd-ng-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm start
   ```

   Open your browser and navigate to `http://localhost:4200/` to view the application.

4. **Run Unit Tests**

   To execute unit tests:

   ```bash
   npm test
   ```

5. **Run End-to-End Tests**

   First, install Playwright browsers:

   ```bash
   npm run e2e:install
   ```

   Then, run all assurance tests:

   ```bash
   npm run test:e2e
   ```

   or execute a specific feature:

   ```bash
   npm run test:e2e ./tests/assurance/features/your-feature-file.feature
   ```

   or run a specific scenario using the scenario's text:

   ```bash
   npm run test:e2e ./tests/assurance/features/your-feature-file.feature -- --name "Delete an existing task item from the task list"
   ```
