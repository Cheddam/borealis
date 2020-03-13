import React from 'react';
import { Borealis } from 'borealis';

const container = new Borealis(window.borealis);

container.getComponents().registerComponent('ExampleComponent', () => import(/* webpackChunkName: "ExampleComponent" */ './components/ExampleComponent'));
