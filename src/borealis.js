import ComponentContainer from './containers/ComponentContainer';
import StateContainer from './containers/StateContainer';

class Borealis {
  constructor(store, componentMap = {}) {
    store.components = store.components || new ComponentContainer(componentMap);
    store.state = store.state || new StateContainer();

    this.store = store;
  }

  getComponents() {
    return this.store.components;
  }

  getState() {
    return this.store.state;
  }
}

export default Borealis;