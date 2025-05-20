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

See [Live Demo](./live-demo.md) for BDD testing details.

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
