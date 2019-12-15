import { createStore, combineReducers } from 'redux';

import Container from './Container';

export default class StateContainer extends Container {
  constructor() {
    super();

    this.registry = {
      default: () => ({}),
    };

    this.store = createStore(combineReducers(this.registry), {});
  }

  /**
   * Stores reference to a new reducer, and reloads the state
   *
   * @param name
   * @param reducer
   */
  registerReducer(name, reducer) {
    this.registry[name] = reducer;

    this.reloadReducers();
  }

  reloadReducers() {
    this.getStore().replaceReducer(combineReducers(this.registry));
  }

  getStore() {
    return this.store;
  }
}