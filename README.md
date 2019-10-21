# Borealis PoC

A barebones example of a custom dynamic import resolver for React components. See the [blog post](#) for more details.

### Repository Layout

```
app/ # Represents the core application that will fetch components from external modules
  components/
    ErrorHandler.js # Basic Error Boundary to render an appropriate message if dynamic component loading fails
  index.js
module/ # Represents an external module that contains a component to be consumed by the core application
  components/
    ExampleComponent.js # The component that will be dynamically loaded
  index.js
src/
  borealis.js # The secret sauce that powers the dynamic dependency injection
index.html # An example page that will load the app
webpack.mix.js # Configuration for building the app / module (powered by Laravel Mix for simplicity)
```