import cmp from './cmp';

describe('Utility function: cmp', () => {
  it('should respect the order', () => {
    const arr = [true, false, 1, '1', null, [1, 2, 3], { a: 1, b: 2 }];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    arr.sort((x, y) => cmp(x, y, {}));
    expect(arr).toEqual([false, true, 1, '1', null, [1, 2, 3], { a: 1, b: 2 }]);
  });

  it('should correctly handle `ignoreCase`', () => {
    const arr = ['a', 'B', 'c', 'D', 'e', 'F'];

    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    arr.sort((x, y) => cmp(x, y, {}));
    expect(arr).toEqual(['B', 'D', 'F', 'a', 'c', 'e']);

    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    arr.sort((x, y) => cmp(x, y, { ignoreCase: true }));
    expect(arr).toEqual(['a', 'B', 'c', 'D', 'e', 'F']);
  });
});
