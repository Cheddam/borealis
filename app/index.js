import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Borealis from '../src/borealis';

const componentMap = {
    'ExampleComponent': ['/dist/module.js'],
};

// Component store (host app creates this container somewhere child bundles can reference it)
window.borealis = {};

const b = new Borealis(window.borealis, componentMap);

import ErrorHandler from './components/ErrorHandler';

const ExampleComponent = React.lazy(b.loadComponent('ExampleComponent'));

ReactDOM.render((
  <div>
    <h2>Core Application</h2>

    <p>The following component will be dynamically loaded from <code>/dist/module.js</code>:</p>

    <Suspense fallback={<div>Loading...</div>}>
      <ErrorHandler>
        <ExampleComponent />
      </ErrorHandler>
    </Suspense>
  </div>
), document.getElementById('app'));
