export default class Container {
  constructor() {
    this.registry = {};
    this.loadedDependencies = [];
  }

  /**
   * Fetch a JS bundle from the server
   *
   * @param path
   * @param handleLoad
   * @param handleError
   */
  fetchDependency(path, handleLoad, handleError) {
    if (this.loadedDependencies.includes(path)) {
      handleLoad();
    }

    const script = document.createElement('script');

    script.src = path;
    script.onload = () => {
      this.loadedDependencies.push(path);
      handleLoad();
    };
    script.onerror = () => handleError();

    document.body.appendChild(script);
  }
}