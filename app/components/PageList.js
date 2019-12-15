import React, { Suspense } from 'react';
import Borealis from '../../src/borealis';

const List = React.lazy((new Borealis(window.borealis)).getComponents().loadComponent('List'));

const PageList = () => {
  return (
        <Suspense fallback={<div>Loading Page list...</div>}>
          <List title="Pages" items={[]} onSelect={() => false} />
        </Suspense>
  )
};

export default PageList;
