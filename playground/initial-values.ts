import React from 'react';

const getValue = () => {
  const hash = window.location.hash ? window.location.hash.slice(1) : '';
  const query = new URLSearchParams(hash);
  return {
    page: query.get('page') || 'playground',
    l: query.get('l') || '',
    r: query.get('r') || '',
  };
};

export const useInitialValues = () => {
  const [initialValues, setInitialValues] = React.useState(getValue());

  React.useEffect(() => {
    const hashChange = () => {
      const newValue = getValue();
      for (const key in newValue) {
        if (initialValues[key] !== newValue[key]) {
          setInitialValues(newValue);
          break;
        }
      }
    };
    window.addEventListener('hashchange', hashChange);
    return () => {
      window.removeEventListener('hashchange', hashChange);
    };
  }, [initialValues]);

  return initialValues;
};

export const updateInitialValues = (page: string, l: string, r: string) => {
  const hash = window.location.hash ? window.location.hash.slice(1) : '';
  const query = new URLSearchParams(hash);
  query.set('page', page);
  query.set('l', l);
  query.set('r', r);
  window.location.hash = query.toString();
};
