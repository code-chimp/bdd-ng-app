# Project Structure

This document provides an overview of the project structure for better understanding and navigation.

## Root Files

- **angular.json**: Angular CLI configuration file.
- **cucumber.mjs**: Configuration for Cucumber.js with parallel execution and multiple reporting formats.
- **eslint.config.mjs**: ESLint configuration file with TypeScript, JSON, and Markdown support.
- **LICENSE**: License information for the project.
- **package.json**: Contains metadata, dependencies, and scripts for the project.
- **README.md**: Main project documentation.
- **tsconfig\*.json**: TypeScript configuration files for different parts of the application.

## Key Directories

### assets/

Static assets like images used in documentation and application.

### docs/

Project documentation:

- **angular-development.md**: Angular-specific development guidelines
- **live-demo.md**: Step-by-step guide for implementing new test scenarios
- **project-structure.md**: (This document) Project structure overview
- **quick-start.md**: Setup and usage guide
- **would-you-like-to-know-more.md**: Additional resources and tutorials

### public/

Public assets:

- **favicon.ico/svg**: Application favicons

### reports/

Test execution reports:

- **bdd-report-basic.html**: Basic HTML report
- **bdd-report.html**: Detailed HTML report with test statistics
- **bdd-report.json**: JSON report data
- **bdd-report.xml**: JUnit XML report format
- **bdd-report-multiple/**: Enhanced multi-format report with UI

### scripts/

Utility scripts:

- **cucumber-html-reporter.mjs**: Basic HTML report generator
- **multiple-cucumber-html-reporter.mjs**: Enhanced HTML report generator
- **notify-lockfile-changed.js**: Git hook notification for package-lock.json changes
- **validate-lockfile.cjs**: NPM lockfile validation

### src/

Application source code:

#### app/

Angular application components:

- **app.component.{html,ts}**: Root application component
- **app.config.ts**: App configuration with experimental features
- **app.routes.ts**: Application routing

##### components/

Feature components:

- **task-list/**: Task management components
  - **task-form/**: New task creation form
  - **task-item/**: Individual task item display

##### models/

Data models:

- **task.model.ts**: Task interface definition

##### services/

Application services:

- **tasks.service.ts**: Task management service using Angular signals

### tests/

Test related files:

#### assurance/

BDD test infrastructure:

- **features/**: Cucumber feature files
  - **support/hooks.ts**: Test lifecycle hooks
- **step-definitions/**: Step implementations

#### page-objects/

Playwright page objects:

- **todo-manager.page.ts**: Todo application page model
