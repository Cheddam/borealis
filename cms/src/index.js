import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Borealis } from 'borealis';

import ErrorHandler from './components/ErrorHandler';

if (typeof window.borealis === 'undefined') {
    window.borealis = {};
}

const container = new Borealis(window.borealis);

// Register core components (will do this elsewhere later)
container.getState().registerReducer('pageReducer', () => import(/* webpackChunkName: "pageReducer" */ './state/pageReducer'));
container.getComponents().registerComponent('List', () => import(/* webpackChunkName: "List" */ './components/List'));
container.getComponents().registerComponent('PageList', () => import(/* webpackChunkName: "PageList" */ './components/PageList'));
container.getComponents().registerComponent('Editor', () => import(/* webpackChunkName: "Editor" */ './components/Editor'));
container.getComponents().registerComponent('App', () => import(/* webpackChunkName: "App" */ './components/App'));



document.addEventListener('DOMContentLoaded', () => {
    const App = React.lazy(container.getComponents().loadComponent('App'));

    ReactDOM.render(
        (
            <Suspense fallback={<div>Loading App...</div>}>
                <ErrorHandler>
                    <App />
                </ErrorHandler>
            </Suspense>
        ),
        document.getElementById('app-container')
    );
});