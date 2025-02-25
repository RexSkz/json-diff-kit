import React from 'react';

import './label.less';

interface PropTypes {
  title: React.ReactNode;
  tip?: React.ReactNode;
}

const Label: React.FC<PropTypes> = ({ title, tip }) => {
  return (
    <span className="label">
      <span className="label-wrapper">
        <span className="label-question-mark">?</span>
        {!!tip && <div className="label-tip">{tip}</div>}
      </span>
      {title}
    </span>
  );
};

export default Label;
