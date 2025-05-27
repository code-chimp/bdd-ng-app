# Quick Start Guide

Welcome to the BDD Angular Demo with Cucumber.js and Playwright! This guide will help you quickly set up and run the project.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) v22.15.1 or compatible (a `.nvmrc` file is provided)
- [Angular CLI](https://angular.io/cli) v19.2.x

## Project Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/code-chimp/bdd-ng-app.git
   cd bdd-ng-app
   ```

2. **Install Dependencies**

   Make sure you're using the correct Node version:

   ```bash
   # If using nvm
   nvm use
   # If using Volta (recommended)
   # Volta will automatically use the correct version
   ```

   Install dependencies:

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:4200/`

## Running Tests

### Unit Tests

Execute the Angular unit tests:

```bash
npm run test:spec
```

### BDD Tests

1. **Install Playwright Browsers** (first time only):

   ```bash
   npm run e2e:install
   ```

2. **Run BDD Tests**:

   ```bash
   # Run all tests and generate HTML reports
   npm run test:bdd

   # Run a specific feature file
   npm run test:bdd:run ./tests/assurance/features/your-feature.feature

   # Run a specific scenario
   npm run test:bdd:run ./tests/assurance/features/your-feature.feature -- --name "Your scenario name"
   
   # Run scenarios specified by tags (see https://cucumber.io/docs/cucumber/api#tag-expressions)
   npm run test:bdd:run -- --tags "@your-tag and not @other-tag"
   ```

## Development Tools

### Code Quality

- **Format Code**:

  ```bash
  npm run format:fix    # Fix formatting issues
  npm run format:check  # Check formatting only
  ```

- **Lint Code**:
  ```bash
  npm run lint       # Run all linters
  npm run fix:ts     # Fix TypeScript issues
  npm run fix:styles # Fix CSS issues
  ```

### Building for Production

```bash
npm run build
```

### Watch Mode

For development with automatic rebuilds:

```bash
npm run watch
```

## Test Reports

After running BDD tests:

- Basic HTML report: `reports/bdd-report-basic.html`
- Detailed HTML report: `reports/bdd-report.html`
- Enhanced multi-format report: `reports/bdd-report-multiple/index.html`
- JSON data: `reports/bdd-report.json`
- JUnit XML: `reports/bdd-report.xml`
