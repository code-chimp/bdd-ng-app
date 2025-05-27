# Angular Development Guide

This guide covers Angular (v19.2+) development specifics for this project.

## Development Environment

### Prerequisites

- Node.js v22.15.1 (managed by Volta)
- Angular CLI v19.2.x
- VS Code with recommended extensions (see `.vscode/extensions.json`)

## Development Server

Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:4200/`. HMR (Hot Module Replacement) is disabled by default for better stability with BDD tests.

## Project Features

### Modern Angular Features

- Standalone components
- Signals for state management
- TypeScript strict mode enabled
- Experimental zoneless change detection

### Component Structure

- Components follow Angular's standalone architecture
- Tailwind CSS for styling
- Reactive forms for input handling
- Accessibility-first approach with ARIA attributes

## Code Organization

### Components

Components are organized by feature:

```plaintext
src/app/components/
├── task-list/             # Task list feature
│   ├── task-form/        # New task creation
│   └── task-item/        # Individual task display
```

### Services

Services use Angular's dependency injection and signals:

```typescript
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private _tasks = signal<Task[]>([]);
  // ...
}
```

### Models

Interfaces are used for type safety:

```typescript
export interface Task {
  id: string;
  name: string;
  completed: boolean;
}
```

## Code Generation

Generate new components (they will be created as standalone):

```bash
ng generate component components/your-component
```

Available generators:

- `component`
- `directive`
- `pipe`
- `service`
- `class`
- `interface`
- `enum`

## Building

### Development Build

```bash
npm run build
```

### Production Build

```bash
npm run build -- --configuration production
```

Build output will be in the `dist/` directory.

### Watch Mode

```bash
npm run watch
```

## Testing

### Unit Tests

```bash
npm run test:spec
```

For test coverage:

```bash
npm run test:spec -- --code-coverage
```

### End-to-End Tests

#### Install Playwright Browsers

Before running tests for the first time, install the required Playwright browsers:

```bash
npm run e2e:install
```

#### Run All Tests

Execute all BDD tests and generate reports, use the following command:

```bash
npm run test:bdd
```

#### Run a Specific Feature

To run a specific feature file:

```bash
npm run test:bdd:run ./tests/assurance/features/your-feature-file.feature
```

#### Run a Specific Scenario

To run a specific feature file using the **Scenario:** text description:

```bash
npm run test:bdd:run ./tests/assurance/features/your-feature-file.feature -- --name "Delete an existing task item from the task list"
```

### Test Reports

After running the tests, several report formats are generated in the `reports/` directory:

- **Basic HTML Report**: `reports/bdd-report-basic.html`
- **Enhanced HTML Report**: `reports/bdd-report-deluxe.html`
- **JSON Report**: `reports/bdd-report.json`
- **JUnit Report**: `reports/bdd-report.xml`
- **Multiple Format Report**: `reports/bdd-report-multiple/index.html`

The multiple format report includes:
- Test execution details
- Feature and scenario statistics
- Platform and browser information
- Screenshots for failed scenarios
- Detailed step execution logs

Screenshots of failed tests are automatically captured and included in the reports.

### Additional Resources

For more details, refer to the [Quick Start Guide](./quick-start.md) and [Project Structure](./project-structure.md) documentation.

## Code Quality

### Linting

- ESLint for TypeScript
- Stylelint for CSS/SCSS
- Prettier for formatting

Run all checks:

```bash
npm run lint
```

### Formatting

- Prettier enforces consistent code style
- TailwindCSS plugin sorts utility classes

Format all files:

```bash
npm run format:fix
```

## Production Considerations

### Budgets

Bundle size budgets are configured in `angular.json`:

- Initial bundle: Warning at 500kB, Error at 1MB
- Component styles: Warning at 4kB, Error at 8kB

### Source Maps

Enabled in development, disabled in production for security.

### Optimization

Production builds include:

- Tree shaking
- Minification
- Dead code elimination
- Asset optimization
