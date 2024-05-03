// Keep only the fields that are valid in JSON
const cleanFields = (obj: unknown) => {
  if (
    typeof obj === 'undefined' ||
    obj === null ||
    typeof obj === 'bigint' ||
    Number.isNaN(obj) ||
    obj === Infinity ||
    obj === -Infinity
  ) {
    return undefined;
  }
  if (['string', 'number', 'boolean'].includes(typeof obj)) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(cleanFields).filter(t => typeof t !== 'undefined');
  }
  const result = {};
  for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
    const cleaned = cleanFields(value);
    if (typeof cleaned !== 'undefined') {
      result[key] = cleaned;
    }
  }
  return result;
};

export default cleanFields;
