const jsStringify = (obj: any) => {
  const code = JSON.stringify(obj, null, 2);
  return code
    .replace(/^(\s+)"([^"]+)":/gm, '$1$2:')
    .replace(/: "([^'"]+)"(,?)\n/g, ': \'$1\'$2\n');
};

export default jsStringify;
