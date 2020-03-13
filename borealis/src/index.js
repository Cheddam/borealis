import ComponentContainer from './containers/ComponentContainer';
import StateContainer from './containers/StateContainer';

class Borealis {
    constructor(store) {
        store.components = store.components || new ComponentContainer();
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

exports.Borealis = Borealis;