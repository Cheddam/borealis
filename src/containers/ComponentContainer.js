import Container from './Container';

export default class ComponentContainer extends Container {
  constructor(componentMap) {
    super();

    this.map = componentMap;
  }

  /**
   * Adds a component to the registry.
   *
   * @param name
   * @param component
   */
  registerComponent(name, component) {
    this.registry[name] = component;
  }

  /**
   * Fetches a component from the registry, loading any dependencies required for it to exist.
   * Conforms to the Webpack Dynamic Import API.
   *
   * @param name
   * @returns {function(): Promise<Object>}
   */
  loadComponent(name) {
    const { registry, map } = this;

    return () => {
      return new Promise((resolve, reject) => {
        if (registry[name]) {
          resolve({ default: registry[name] });
        }

        if (!map[name]) {
          reject(`Component '${name}' not found in map.`);
        }

        let remainingDependencies = map[name].length;
        map[name].map(path => {
          this.fetchDependency(
            path,
            () => {
              remainingDependencies--;

              // If this was the last dependency to finish loading, the component can be resolved
              if (remainingDependencies === 0) {
                if (!registry[name]) {
                  return reject(`Component '${name}' was not registered by mapped module(s).`);
                }

                resolve({
                  default: registry[name]
                });
              }
            },
            () => {
              reject(`A bundle related to component '${name}' could not be loaded: ${path}`);
            }
          );
        });
      });
    }
  }
}