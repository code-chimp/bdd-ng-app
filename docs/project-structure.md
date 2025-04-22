# Project Structure

This document provides an overview of the project structure for better understanding and navigation.

## Root Files

- **angular.json**: Angular CLI configuration file.
- **cucumber.mjs**: Configuration for Cucumber.js.
- **eslint.config.mjs**: ESLint configuration file.
- **LICENSE**: License information for the project.
- **package.json**: Contains metadata about the project and its dependencies.
- **README.md**: Main documentation file for the project.
- **tsconfig\*.json**: TypeScript configuration files for the application and tests.

## Folders

### assets/

Contains static assets such as images.

- **taming-assurance.jpg**: Image used in the documentation or application.

### docs/

Contains documentation files.

- **live-demo.md**: Instructions for implementing a new scenario.
- **project-structure.md**: (This document) Overview of the project structure.

### public/

Contains public assets served directly by the application.

- **favicon.ico**: Favicon for the application.
- **favicon.svg**: SVG version of the favicon.

### src/

Contains the main source code of the application.

- **index.html**: Entry HTML file for the application.
- **main.ts**: Main entry point for the Angular application.
- **styles.css**: Global styles for the application.

#### app/

Contains application-specific components, models, and services.

- **app.component.html**: HTML template for the main app component.
- **app.component.ts**: TypeScript logic for the main app component.
- **app.config.ts**: Configuration for the app.
- **app.routes.ts**: Routing configuration for the app.

##### components/

Contains reusable components.

- **task-list/**: Task list component and its subcomponents.
  - **task-form/**: Task form component files.
  - **task-item/**: Task item component files.

##### models/

Contains data models.

- **task.model.ts**: Model for tasks.

##### services/

Contains services for business logic and data handling.

- **tasks.service.ts**: Service for managing tasks.

### tests/

Contains test-related files and configurations.

- **cucumber.conf.ts**: Configuration for Cucumber.js tests.
- **global.d.ts**: Global TypeScript definitions for tests.

#### assurance/

Contains assurance tests.

- **features/**: Feature files for Cucumber.js.
  - **todo-manager.feature**: Feature file for the Todo Manager.
- **step-definitions/**: Step definitions for Cucumber.js.
  - **todo-manager.context.ts**: Context and step definitions for the Todo Manager.
