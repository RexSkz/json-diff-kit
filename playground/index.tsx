import React from 'react';
import ReactDOM from 'react-dom';

import Playground from './playground';
import Docs from './docs';

import '../src/viewer.less';
import './index.less';

const Index: React.FC = () => {
  const [usePlayground, setUsePlayground] = React.useState(true);

  return usePlayground
    ? <Playground onSwitch={() => setUsePlayground(false)} />
    : <Docs onSwitch={() => setUsePlayground(true)} />;
};

ReactDOM.render(<Index />, document.getElementById('root'));
