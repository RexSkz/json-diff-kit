const setInitialValues = (l: string, r: string) => {
  const hash = window.location.hash ? window.location.hash.slice(1) : '';
  const query = new URLSearchParams(hash);
  query.set('l', l);
  query.set('r', r);
  window.location.hash = query.toString();
};

export default setInitialValues;
