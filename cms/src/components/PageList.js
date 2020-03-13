import React, { Suspense } from 'react';
import { Borealis } from 'borealis';

import ErrorHandler from './ErrorHandler';

const List = React.lazy((new Borealis(window.borealis)).getComponents().loadComponent('List'));

const PageList = ({ items, onSelect }) => {
    return (
        <ErrorHandler>
            <Suspense fallback={<div>Loading Page list...</div>}>
                <List title="Pages" items={items} onSelect={onSelect} />
            </Suspense>
        </ErrorHandler>
    );
};

export default PageList;
