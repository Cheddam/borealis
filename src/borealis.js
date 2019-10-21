class Borealis {
  constructor(store, componentMap = {}) {
    store.componentMap = Object.assign({}, store.componentMap, componentMap);

    if (!store.componentRegistry) {
      store.componentRegistry = {};
    }

    if (!store.loadedModules) {
      store.loadedModules = [];
    }

    this.store = store;
  }

  /**
   * Adds a component to the registry.
   *
   * @param name
   * @param component
   */
  addComponent(name, component) {
    this.store.componentRegistry[name] = component;
  }

  /**
   * Fetches a component from the registry, loading any related JS modules required for it to exist.
   * Conforms to the Webpack Dynamic Import API.
   *
   * @param name
   * @returns {function(): Promise<Object>}
   */
  loadComponent(name) {
    const { componentRegistry, componentMap, loadedModules } = this.store;

    return () => {
      return new Promise((resolve, reject) => {
        // Only fetch modules that haven't already been loaded
        let requiredModules = componentMap[name].filter(url => !loadedModules.includes(url));

        if (requiredModules.length === 0) {
          if (componentRegistry[name]) {
            resolve({ default: componentRegistry[name] });
          }

          if (!componentMap[name]) {
            reject(`Component '${name}' not found in map.`);
          }
        }

        let remainingModules = requiredModules.length;
        requiredModules.map(url => {
          const script = document.createElement('script');

          script.src = url;
          script.onload = () => {
            loadedModules.push(url);
            remainingModules--;

            // If this was the last module to finish loading, the component is ready to be resolved
            if (remainingModules === 0) {
              if (!componentRegistry[name]) {
                return reject(`Component '${name}' was not registered by mapped module(s).`);
              }

              resolve({
                default: componentRegistry[name]
              });
            }
          };
          script.onerror = () => {
            reject(`A bundle related to component '${name}' could not be loaded: ${url}`);
          };

          document.body.appendChild(script);
        });
      });
    }
  }
}

export default Borealis;