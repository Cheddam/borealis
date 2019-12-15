import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Borealis from '../src/borealis';

const componentMap = {
    'ExampleComponent': ['/dist/module.js'],
};

// Component store (host app creates this container somewhere child bundles can reference it)
window.borealis = {};

const b = new Borealis(window.borealis, window.appConfig);

import ErrorHandler from './components/ErrorHandler';

const Editor = React.lazy(b.getComponents().loadComponent('Editor'));
const PageList = React.lazy(b.getComponents().loadComponent('PageList'));

const items = [
  { id: '1', name: 'First Page' },
  { id: '2', name: 'Second Page' },
  { id: '3', name: 'Third Page' },
];

let selectedItemID = '1';

ReactDOM.render((
  <Provider store={b.getState().getStore()}>
    <div className="app">
      <div className="left">
        <h1>'Stripe</h1>

        <Suspense fallback={<div>Loading List...</div>}>
          <ErrorHandler>
            <PageList
              title="Pages"
              items={items}
              onSelect={(id) => selectedItemID = id}
            />
          </ErrorHandler>
        </Suspense>
      </div>

      <div className="main">
        <Suspense fallback={<div>Loading Editor...</div>}>
          <ErrorHandler>
            <Editor
              item={items.find(i => i.id === selectedItemID)}
              onUpdate={(name) => items.find(i => i.id === selectedItemID).name = name}
            />
          </ErrorHandler>
        </Suspense>
      </div>
    </div>
  </Provider>
), document.getElementById('app-container'));
