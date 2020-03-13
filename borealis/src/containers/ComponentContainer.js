import Container from './Container';

export default class ComponentContainer extends Container {
  /**
   * Adds a component to the registry.
   *
   * @param name
   * @param component
   */
  registerComponent(name, component) {
    this.registry[name] = component;

    return this;
  }

  /**
   * Fetches a component from the registry.
   * Conforms to the Webpack Dynamic Import API.
   *
   * @param name
   * @returns {function(): Promise<Object>}
   */
  loadComponent(name) {
    if (!this.registry[name]) {
      return () => Promise.reject(`Component ${name} not found`);
    }

    return this.registry[name];
  }
}