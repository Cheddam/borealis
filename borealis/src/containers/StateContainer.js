import { createStore, combineReducers } from 'redux';

import Container from './Container';

export default class StateContainer extends Container {
  constructor() {
    super();

    this.store = createStore(
        combineReducers({ default: () => ({}) }),
        {},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    this.store.asyncReducers = {};
  }

  /**
   * Stores reference to a new reducer, and reloads the state
   *
   * @param name
   * @param reducer
   */
  registerReducer(name, reducer) {
    this.store.asyncReducers[name] = reducer;

    this.store.replaceReducer(combineReducers({ ...this.store.asyncReducers }));
  }

  getStore() {
    return this.store;
  }
}