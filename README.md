# BDD Angular Demo with Cucumber.js and Playwright

## TODO

- [ ] Ensure vscode cucumber is configured to find the step definitions
- [ ] Ensure optimal cucumber.js configuration
- [ ] Ensure optimal playwright configuration

This project demonstrates the integration of Behavior-Driven Development (BDD) practices with a modern 
Angular 19 application, utilizing Cucumber.js for BDD testing and Playwright for automated browser testing.

## Technologies Used

- **Angular 19**: Modern web application framework
- **TypeScript**: Strongly-typed JavaScript for enhanced developer experience
- **Cucumber.js**: BDD test automation framework
- **Playwright**: Browser automation library for end-to-end testing
- **TailwindCSS**: Utility-first CSS framework for efficient styling

## The Value of BDD and Living Documentation

Behavior-Driven Development bridges the gap between technical and non-technical stakeholders by:

1. **Creating a common language**: Gherkin syntax (Given-When-Then) provides readable test scenarios that business stakeholders can understand
2. **Documenting specifications**: Test scenarios serve as living documentation that evolves with the application
3. **Validating acceptance criteria**: Ensures development meets business requirements
4. **Facilitating collaboration**: Promotes shared understanding across the entire team

This approach results in:

- Better alignment between business goals and development efforts
- Clearer requirements documentation
- More effective regression testing
- Improved communication between all stakeholders

## The Value of TailwindCSS

TailwindCSS provides significant advantages to development teams by:

1. **Accelerating UI Development**: Utility-first approach eliminates the need to write custom CSS, allowing faster implementation of designs.
2. **Maintaining Consistency**: Pre-defined design system with constraints for spacing, colors, typography, and more ensures visual consistency.
3. **Reducing CSS Complexity**:
   - No need to create and maintain complex CSS class naming systems
   - Minimizes CSS specificity issues and selector conflicts
   - Results in smaller bundle sizes through optimized production builds
4. **Improving Developer Experience**:
   - Write styles directly in your markup without context switching
   - IntelliSense support in modern IDEs provides autocomplete
   - Predictable styling behavior with direct control over every element
5. **Supporting Responsive Design**: Built-in responsive modifiers (sm:, md:, lg:, etc.) make creating adaptive interfaces straightforward.

This project demonstrates how TailwindCSS integrates with Angular components to create maintainable, consistent UI patterns while 
reducing style-related technical debt.

## Development Guide

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running Unit Tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
npm run test:spec
```
### End-to-End / Assurance Tests

First-time setup requires install Playwright browsers:

```bash
npm run e2e:install
```

#### Running All Tests

To run the BDD tests with Cucumber.js and Playwright:

```bash
npm run test:e2e
```

#### Executing a Specific Feature

To run a specific feature file, use the following command:

```bash
npm run test:e2e ./tests/assurance/features/your-feature-file.feature
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
