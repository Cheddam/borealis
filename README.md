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

### Concept

The core goals driving this project are:

 - There is a [tightly integrated, modular backend application](https://github.com/silverstripe) that supports a front-end
 - The front-end application shouldn't need every possible piece of JS to be loaded at boot time
 - The front-end application, for the foreseeable future, must support browsers as far back as IE 11, so modern JS module APIs can't be easily adopted

We can achieve these goals by implementing the following:

 - The backend application is responsible for generating a dependency map to pass to the dependency injector in the front-end
   - This takes the form of an object like so: `{ ComponentName: ['bundle-containing-component.js'], ... }`
 - Modules for the application can register their React/Redux/etc. components via configuration in the backend, and have them be loaded on demand in the front-end
 - We use tooling built into React and Redux to enable lazy loading of components via our dependency injector
 
### Related links

- [Code Splitting in React](https://reactjs.org/docs/code-splitting.html)
- [Code Splitting in Redux](https://redux.js.org/recipes/code-splitting)
