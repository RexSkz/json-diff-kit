import React from 'react';
import ReactDOM from 'react-dom';

import Playground from './playground';
import Docs from './docs';
import MarshallerTest from './marshaller-test';

import '../src/viewer.less';
import './index.less';
import { updateInitialValues, useInitialValues } from './initial-values';

const Index: React.FC = () => {
  const { page } = useInitialValues();

  switch (page) {
    case 'marshaller-test':
      return <MarshallerTest />;
    case 'docs':
      return <Docs onSwitch={() => updateInitialValues('playground', '', '')} />;
    default:
      return <Playground onSwitch={() => updateInitialValues('docs', '', '')} />;
  }
};

ReactDOM.render(<React.StrictMode><Index /></React.StrictMode>, document.getElementById('root'));
