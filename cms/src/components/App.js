import React, { Suspense, useState } from 'react';
import { Provider } from 'react-redux';
import { Borealis } from 'borealis';

import ErrorHandler from './ErrorHandler';

const container = new Borealis(window.borealis);

const App = () => {
    const PageList = React.lazy(container.getComponents().loadComponent('PageList'));
    const ExampleComponent = React.lazy(container.getComponents().loadComponent('ExampleComponent'));
    const Editor = React.lazy(container.getComponents().loadComponent('Editor'));

    const [items, setItems] = useState([
        { id: '1', name: 'First Page' },
        { id: '2', name: 'Second Page' },
        { id: '3', name: 'Third Page' },
    ]);

    const [selectedItem, setSelectedItem] = useState('1');

    const updateItem = (id, name) => {
        items[items.findIndex(i => i.id === id)].name = name;
        setItems([...items]);
    };

    return (
        <div className="app">
            <div className="left">
                <h1>'Stripe</h1>

                <Suspense fallback={<div>Loading ExampleComponent...</div>}>
                    <ErrorHandler>
                        <ExampleComponent/>
                    </ErrorHandler>
                </Suspense>

                <Suspense fallback={<div>Loading PageList...</div>}>
                    <ErrorHandler>
                        <PageList
                            items={items}
                            onSelect={(id) => setSelectedItem(id)}
                        />
                    </ErrorHandler>
                </Suspense>
            </div>

            <div className="main">
                <Suspense fallback={<div>Loading Editor...</div>}>
                    <ErrorHandler>
                        <Editor
                            item={items.find(i => i.id === selectedItem)}
                            onUpdate={value => updateItem(selectedItem, value)}
                        />
                    </ErrorHandler>
                </Suspense>
            </div>
        </div>
    );
};

export default App;