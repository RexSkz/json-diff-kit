import React from 'react';

import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/themes/prism.css';

interface PropTypes {
  code: string;
}

const GeneratedCode: React.FC<PropTypes> = ({ code }) => {
  const html = React.useMemo(() => {
    return Prism.highlight(code, Prism.languages.tsx, 'tsx');
  }, [code]);

  return (
    <pre className="language-tsx" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default GeneratedCode;
