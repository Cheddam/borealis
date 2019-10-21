import Borealis from '../src/borealis';
import ExampleComponent from './components/ExampleComponent';


const b = new Borealis(window.borealis);

b.addComponent('ExampleComponent', ExampleComponent);
