const useInitialValues = () => {
  const hash = window.location.hash ? window.location.hash.slice(1) : '';
  const query = new URLSearchParams(hash);
  const initialValues = {
    l: query.get('l') || '',
    r: query.get('r') || '',
  };
  return initialValues;
};

export default useInitialValues;
