/**
 * Registers core components for the app.
 */
import Borealis from '../src/borealis';

import Editor from './components/Editor';
import List from './components/List';
import PageList from './components/PageList';

import pageReducer from './state/pageReducer';

const b = new Borealis(window.borealis);

b.getState().registerReducer('pageReducer', pageReducer);
b.getComponents().registerComponent('Editor', Editor);
b.getComponents().registerComponent('List', List);
b.getComponents().registerComponent('PageList', PageList);
