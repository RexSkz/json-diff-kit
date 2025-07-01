import { DifferOptions, UndefinedBehavior } from '../differ';
import diffArrayCompareKey, { allObjectsHaveCompareKey } from './diff-array-compare-key';

describe('Utility function: diff-array-compare-key', () => {
  const defaultOptions: DifferOptions = {
    compareKey: 'id',
    showModifications: true,
    undefinedBehavior: UndefinedBehavior.stringify,
  };

  const createOptions = (overrides: Partial<DifferOptions> = {}): DifferOptions => ({
    ...defaultOptions,
    ...overrides,
  });

  describe('allObjectsHaveCompareKey', () => {
    it('should return true when all objects have the compare key', () => {
      const arr = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ];
      expect(allObjectsHaveCompareKey(arr, 'id')).toBe(true);
    });

    it('should return false when some objects are missing the compare key', () => {
      const arr = [
        { id: 1, name: 'Alice' },
        { name: 'Bob' }, // missing id
        { id: 3, name: 'Charlie' },
      ];
      expect(allObjectsHaveCompareKey(arr, 'id')).toBe(false);
    });

    it('should return true for nested arrays with compare key', () => {
      const arr = [
        { id: 1, items: [{ id: 11, value: 'a' }] },
        { id: 2, items: [{ id: 22, value: 'b' }] },
      ];
      expect(allObjectsHaveCompareKey(arr, 'id')).toBe(true);
    });

    it('should return false for nested arrays missing compare key', () => {
      const arr = [
        { id: 1, items: [{ value: 'a' }] }, // nested object missing id
        { id: 2, items: [{ id: 22, value: 'b' }] },
      ];
      expect(allObjectsHaveCompareKey(arr, 'id')).toBe(false);
    });

    it('should handle empty arrays', () => {
      expect(allObjectsHaveCompareKey([], 'id')).toBe(true);
    });

    it('should handle arrays with non-object items', () => {
      const arr = [{ id: 1, name: 'Alice' }, 'string item', 123];
      expect(allObjectsHaveCompareKey(arr, 'id')).toBe(true);
    });
  });

  describe('diffArrayCompareKey - Basic functionality', () => {
    it('should handle identical arrays', () => {
      const left = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ];
      const right = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ];

      const [linesLeft] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      expect(linesLeft).toEqual([
        { level: 0, type: 'equal', text: '[' },
        { level: 1, type: 'equal', text: '{' },
        { level: 2, type: 'equal', text: '"id": 1' },
        { level: 2, type: 'equal', text: '"name": "Alice"' },
        { level: 1, type: 'equal', text: '}' },
        { level: 1, type: 'equal', text: '{' },
        { level: 2, type: 'equal', text: '"id": 2' },
        { level: 2, type: 'equal', text: '"name": "Bob"' },
        { level: 1, type: 'equal', text: '}' },
        { level: 0, type: 'equal', text: ']' },
      ]);
    });

    it('should match objects by compareKey regardless of order', () => {
      const left = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ];
      const right = [
        { id: 2, name: 'Bob' },
        { id: 1, name: 'Alice' },
      ];

      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      // Should match id=1 with id=1 and id=2 with id=2, regardless of position
      expect(linesLeft.filter((line) => line.type === 'equal')).toHaveLength(linesLeft.length);
      expect(linesRight.filter((line) => line.type === 'equal')).toHaveLength(linesRight.length);
    });

    it('should detect modifications in matched objects', () => {
      const left = [{ id: 1, name: 'Alice', age: 25 }];
      const right = [{ id: 1, name: 'Alice', age: 26 }];

      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      // Should have equal parts for id and name, but modified age
      expect(linesLeft.some((line) => line.text === '"age": 25' && line.type === 'modify')).toBe(true);
      expect(linesRight.some((line) => line.text === '"age": 26' && line.type === 'modify')).toBe(true);
    });
  });

  describe('diffArrayCompareKey - Add/Remove operations', () => {
    it('should handle added items', () => {
      const left = [{ id: 1, name: 'Alice' }];
      const right = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ];

      const [, linesRight] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      // Should have added content for Bob
      expect(linesRight.some((line) => line.text.includes('Bob') && line.type === 'add')).toBe(true);
    });

    it('should handle removed items', () => {
      const left = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ];
      const right = [{ id: 1, name: 'Alice' }];

      const [linesLeft] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      // Should have removed content for Bob
      expect(linesLeft.some((line) => line.text.includes('Bob') && line.type === 'remove')).toBe(true);
    });

    it('should handle completely different arrays', () => {
      const left = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ];
      const right = [
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'Dave' },
      ];

      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      // Should have all items as removed from left and added to right
      expect(linesLeft.some((line) => line.text.includes('Alice') && line.type === 'remove')).toBe(true);
      expect(linesLeft.some((line) => line.text.includes('Bob') && line.type === 'remove')).toBe(true);
      expect(linesRight.some((line) => line.text.includes('Charlie') && line.type === 'add')).toBe(true);
      expect(linesRight.some((line) => line.text.includes('Dave') && line.type === 'add')).toBe(true);
    });
  });

  describe('diffArrayCompareKey - Nested structures', () => {
    it('should handle nested arrays in objects', () => {
      const left = [{ id: 1, items: [1, 2, 3] }];
      const right = [{ id: 1, items: [1, 3, 4] }];

      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      // Should recursively diff the nested arrays - verify array structure
      expect(linesLeft).toContainEqual(expect.objectContaining({ text: '[' }));
      expect(linesRight).toContainEqual(expect.objectContaining({ text: '[' }));

      // Should show specific changes in the nested array content
      // Array [1, 2, 3] vs [1, 3, 4] compared by position:
      // - Position 0: 1 vs 1 → equal
      // - Position 1: 2 vs 3 → modify
      // - Position 2: 3 vs 4 → modify

      // Verify equal element
      expect(linesLeft.some((line) => line.text === '1' && line.type === 'equal')).toBe(true);
      expect(linesRight.some((line) => line.text === '1' && line.type === 'equal')).toBe(true);

      // Verify modifications (position-based comparison)
      expect(linesLeft.some((line) => line.text === '2' && line.type === 'modify')).toBe(true);
      expect(linesRight.some((line) => line.text === '3' && line.type === 'modify')).toBe(true);
      expect(linesLeft.some((line) => line.text === '3' && line.type === 'modify')).toBe(true);
      expect(linesRight.some((line) => line.text === '4' && line.type === 'modify')).toBe(true);

      // Verify we have both equal and modify types (showing it did process the nested array)
      const leftTypes = new Set(linesLeft.map((line) => line.type));
      const rightTypes = new Set(linesRight.map((line) => line.type));
      expect(leftTypes.has('equal')).toBe(true);
      expect(leftTypes.has('modify')).toBe(true);
      expect(rightTypes.has('equal')).toBe(true);
      expect(rightTypes.has('modify')).toBe(true);
    });

    it('should handle nested objects in arrays', () => {
      const left = [{ id: 1, profile: { name: 'Alice', age: 25 } }];
      const right = [{ id: 1, profile: { name: 'Alice', age: 26 } }];

      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      // Should show modification in nested object - check for age field modification
      expect(linesLeft.some((line) => line.text.includes('25') && line.type === 'modify')).toBe(true);
      expect(linesRight.some((line) => line.text.includes('26') && line.type === 'modify')).toBe(true);
    });

    it('should handle mixed types in array values', () => {
      const left = [{ id: 1, data: [1, 2] }];
      const right = [{ id: 1, data: { count: 2 } }];

      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      // Should handle type change from array to object
      expect(linesLeft.some((line) => line.type === 'modify' || line.type === 'remove')).toBe(true);
      expect(linesRight.some((line) => line.type === 'modify' || line.type === 'add')).toBe(true);
    });
  });

  describe('diffArrayCompareKey - Options handling', () => {
    it('should respect showModifications option', () => {
      const left = [{ id: 1, name: 'Alice' }];
      const right = [{ id: 1, name: 'Bob' }];

      // With showModifications: true
      const [linesLeft1, linesRight1] = diffArrayCompareKey(
        left,
        right,
        '',
        '',
        0,
        createOptions({ showModifications: true })
      );
      expect(linesLeft1.some((line) => line.type === 'modify')).toBe(true);
      expect(linesRight1.some((line) => line.type === 'modify')).toBe(true);

      // With showModifications: false
      const [linesLeft2, linesRight2] = diffArrayCompareKey(
        left,
        right,
        '',
        '',
        0,
        createOptions({ showModifications: false })
      );
      expect(linesLeft2.some((line) => line.type === 'remove')).toBe(true);
      expect(linesRight2.some((line) => line.type === 'add')).toBe(true);
    });

    it('should respect maxDepth option', () => {
      const left = [{ id: 1, deep: { nested: { value: 1 } } }];
      const right = [{ id: 1, deep: { nested: { value: 2 } } }];

      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, '', '', 0, createOptions({ maxDepth: 2 }));

      // Should stop at maxDepth and show placeholder
      expect(linesLeft.some((line) => line.text === '...')).toBe(true);
      expect(linesRight.some((line) => line.text === '...')).toBe(true);
    });

    it('should handle missing compareKey option', () => {
      const left = [{ id: 1, name: 'Alice' }];
      const right = [{ id: 1, name: 'Bob' }];

      // Should fallback to diffArrayNormal when compareKey is not provided
      const [linesLeft, linesRight] = diffArrayCompareKey(
        left,
        right,
        '',
        '',
        0,
        createOptions({ compareKey: undefined })
      );

      // Should still produce valid output (though using different algorithm)
      expect(linesLeft).toHaveLength(linesRight.length);
      expect(linesLeft[0]).toEqual({ level: 0, type: 'equal', text: '[' });
    });
  });

  describe('diffArrayCompareKey - Edge cases', () => {
    it('should handle empty arrays', () => {
      const [linesLeft, linesRight] = diffArrayCompareKey([], [], '', '', 0, createOptions());

      expect(linesLeft).toEqual([
        { level: 0, type: 'equal', text: '[' },
        { level: 0, type: 'equal', text: ']' },
      ]);
      expect(linesRight).toEqual([
        { level: 0, type: 'equal', text: '[' },
        { level: 0, type: 'equal', text: ']' },
      ]);
    });

    it('should handle arrays with primitive values', () => {
      const left = [1, 2, 3];
      const right = [1, 3, 4];

      // Should fallback to diffArrayNormal for primitive arrays
      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      expect(linesLeft).toHaveLength(linesRight.length);
    });

    it('should handle arrays with mixed object and non-object items', () => {
      const left = [{ id: 1, name: 'Alice' }, 'string', 123];
      const right = [{ id: 1, name: 'Alice' }, 'string', 456];

      // Should fallback to diffArrayNormal for mixed arrays
      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      expect(linesLeft).toHaveLength(linesRight.length);
    });

    it('should handle objects without compareKey', () => {
      const left = [{ name: 'Alice' }, { id: 2, name: 'Bob' }];
      const right = [{ name: 'Alice' }, { id: 2, name: 'Bob' }];

      // Should fallback to diffArrayNormal when objects missing compareKey
      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      expect(linesLeft).toHaveLength(linesRight.length);
    });

    it('should handle duplicate compareKey values', () => {
      const left = [
        { id: 1, name: 'Alice' },
        { id: 1, name: 'Alice2' },
      ];
      const right = [{ id: 1, name: 'Alice' }];

      const [linesLeft] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      // Should match first occurrence and mark second as removed
      expect(linesLeft.some((line) => line.type === 'remove')).toBe(true);
    });

    it('should handle complex nested structures', () => {
      const left = [
        {
          id: 1,
          profile: {
            personal: { name: 'Alice', age: 25 },
            hobbies: ['reading', 'coding'],
            friends: [{ id: 10, name: 'Bob' }],
          },
        },
      ];

      const right = [
        {
          id: 1,
          profile: {
            personal: { name: 'Alice', age: 26 },
            hobbies: ['reading', 'gaming'],
            friends: [{ id: 10, name: 'Robert' }],
          },
        },
      ];

      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      // Should handle deep nested changes
      expect(linesLeft.some((line) => line.text.includes('25') && line.type === 'modify')).toBe(true);
      expect(linesRight.some((line) => line.text.includes('26') && line.type === 'modify')).toBe(true);
    });
  });

  describe('diffArrayCompareKey - Array keys handling', () => {
    it('should handle arrays with keyLeft and keyRight', () => {
      const left = [{ id: 1, name: 'Alice' }];
      const right = [{ id: 1, name: 'Alice' }];

      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, 'users', 'users', 0, createOptions());

      expect(linesLeft[0]).toEqual({ level: 0, type: 'equal', text: '"users": [' });
      expect(linesRight[0]).toEqual({ level: 0, type: 'equal', text: '"users": [' });
    });

    it('should handle different array keys', () => {
      const left = [{ id: 1, name: 'Alice' }];
      const right = [{ id: 1, name: 'Alice' }];

      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, 'oldUsers', 'newUsers', 0, createOptions());

      expect(linesLeft[0]).toEqual({ level: 0, type: 'equal', text: '"oldUsers": [' });
      expect(linesRight[0]).toEqual({ level: 0, type: 'equal', text: '"newUsers": [' });
    });
  });

  describe('diffArrayCompareKey - Type safety', () => {
    it('should handle null and undefined values', () => {
      const left = [{ id: 1, value: null }];
      const right = [{ id: 1, value: undefined }];

      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      expect(linesLeft.some((line) => line.text.includes('null'))).toBe(true);
      expect(linesRight.some((line) => line.text.includes('undefined'))).toBe(true);
    });

    it('should handle special numeric values', () => {
      const left = [{ id: 1, value: NaN }];
      const right = [{ id: 1, value: Infinity }];

      const [linesLeft, linesRight] = diffArrayCompareKey(left, right, '', '', 0, createOptions());

      expect(linesLeft.some((line) => line.text.includes('NaN'))).toBe(true);
      expect(linesRight.some((line) => line.text.includes('Infinity'))).toBe(true);
    });
  });

  // Large-scale scenario tests to validate compare by key logic with many JSON objects
  describe('diffArrayCompareKey - Large-scale validation', () => {
    it('should handle dozens of JSON objects correctly with various structures', () => {
      // Create arrays with dozens of objects to validate large-scale handling
      const createLargeArray = (size: number, baseId = 0) => {
        return Array.from({ length: size }, (_, i) => ({
          id: baseId + i + 1,
          name: `Item ${baseId + i + 1}`,
          type: ['user', 'admin', 'guest'][i % 3],
          metadata: {
            created: `2024-01-${String(i % 28 + 1).padStart(2, '0')}`,
            tags: [`tag${i % 5}`, `category${i % 3}`],
            settings: {
              enabled: i % 2 === 0,
              priority: i % 10,
              config: {
                theme: ['light', 'dark'][i % 2],
                locale: ['en', 'es', 'fr'][i % 3],
              },
            },
          },
          data: Array.from({ length: i % 3 + 1 }, (_, j) => ({
            id: (i + 1) * 10 + j,
            value: `value-${i}-${j}`,
          })),
        }));
      };

      const leftArray = createLargeArray(50);
      const rightArray = [
        ...createLargeArray(30), // First 30 items unchanged
        ...createLargeArray(15, 35).map((item) => ({ // Items 36-50, but modified
          ...item,
          name: `Modified ${item.name}`,
          metadata: {
            ...item.metadata,
            updated: '2024-06-01',
          },
        })),
        ...createLargeArray(10, 60), // New items 61-70
      ];

      const options = createOptions();
      const [linesLeft, linesRight] = diffArrayCompareKey(leftArray, rightArray, '', '', 0, options);

      // Verify the diff results
      expect(linesLeft).toBeDefined();
      expect(linesRight).toBeDefined();
      expect(linesLeft.length).toBeGreaterThan(0);
      expect(linesRight.length).toBeGreaterThan(0);

      // Should have proper array structure brackets
      expect(linesLeft.length).toBeGreaterThan(0);
      expect(linesRight.length).toBeGreaterThan(0);

      // Both sides should start and end with array brackets
      expect(linesLeft[0].text).toBe('[');
      expect(linesLeft[linesLeft.length - 1].text).toBe(']');
      expect(linesRight[0].text).toBe('[');
      expect(linesRight[linesRight.length - 1].text).toBe(']');

      // Verify that items 1-30 are matched correctly (should appear as equal or modify)
      const item1Left = linesLeft.find((line) => line.text.includes('"name": "Item 1"'));
      const item1Right = linesRight.find((line) => line.text.includes('"name": "Item 1"'));
      expect(item1Left).toBeDefined();
      expect(item1Right).toBeDefined();

      // Verify that items 31-50 are removed (only in left)
      const removedItems = linesLeft.filter((line) => line.type === 'remove' && line.text.includes('"name": "Item 3'));
      expect(removedItems.length).toBeGreaterThan(0);

      // Verify that items 61-70 are added (only in right)
      const addedItems = linesRight.filter((line) => line.type === 'add' && line.text.includes('"name": "Item 6'));
      expect(addedItems.length).toBeGreaterThan(0);
    });

    it('should maintain performance with large arrays and mixed operations', () => {
      const startTime = process.hrtime.bigint();

      // Create even larger arrays to test performance
      const createComplexArray = (size: number) => {
        return Array.from({ length: size }, (_, i) => ({
          id: `complex-${i}`,
          data: {
            values: Array.from({ length: 10 }, (_, j) => ({
              id: `val-${i}-${j}`,
              content: `Content for item ${i}, value ${j}`,
              nested: {
                deep: {
                  props: [`prop${j}`, `attr${i % 5}`],
                },
              },
            })),
            metadata: {
              created: Date.now() + i * 1000,
              tags: Array.from({ length: i % 5 + 1 }, (_, k) => `tag-${k}`),
            },
          },
        }));
      };

      const leftLarge = createComplexArray(100);
      const rightLarge = [
        ...createComplexArray(50), // First 50 unchanged
        ...createComplexArray(30).map((item, i) => ({ // 30 modified items
          ...item,
          id: `complex-${i + 50}`,
          data: {
            ...item.data,
            metadata: {
              ...item.data.metadata,
              updated: true,
            },
          },
        })),
        ...createComplexArray(40).map((item, i) => ({ // 40 new items
          ...item,
          id: `complex-new-${i}`,
        })),
      ];

      const options = createOptions();
      const [linesLeft, linesRight] = diffArrayCompareKey(leftLarge, rightLarge, '', '', 0, options);

      const endTime = process.hrtime.bigint();
      const executionTime = Number(endTime - startTime) / 1_000_000; // Convert to milliseconds

      // Verify results are correct
      expect(linesLeft).toBeDefined();
      expect(linesRight).toBeDefined();
      expect(linesLeft.length).toBeGreaterThan(0);
      expect(linesRight.length).toBeGreaterThan(0);

      // Performance should be reasonable (less than 1 second for this scale)
      expect(executionTime).toBeLessThan(1000);

      // Verify structural integrity - both sides should have proper array structure
      expect(linesLeft[0].text).toBe('[');
      expect(linesLeft[linesLeft.length - 1].text).toBe(']');
      expect(linesRight[0].text).toBe('[');
      expect(linesRight[linesRight.length - 1].text).toBe(']');
    });

    it('should correctly handle various JSON object structures without corruption', () => {
      // Test with diverse object structures as suggested by the user
      const diverseObjects = [
        { id: 'user1', type: 'user', profile: { name: 'John', age: 30 } },
        { id: 'org1', type: 'organization', details: { name: 'Company A', employees: 100 } },
        { id: 'prod1', type: 'product', info: { title: 'Widget', price: 29.99, tags: ['electronics', 'gadget'] } },
        { id: 'event1', type: 'event', data: { name: 'Conference', date: '2024-07-01', attendees: [] } },
        { id: 'config1', type: 'configuration', settings: { theme: 'dark', notifications: true, preferences: {} } },
      ];

      const modifiedObjects = [
        { id: 'user1', type: 'user', profile: { name: 'John Smith', age: 31 } }, // Modified
        { id: 'org1', type: 'organization', details: { name: 'Company A', employees: 120 } }, // Modified
        { id: 'prod2', type: 'product', info: { title: 'New Widget', price: 39.99, tags: ['electronics'] } }, // New
        { id: 'event1', type: 'event', data: { name: 'Conference', date: '2024-07-01', attendees: ['John'] } }, // Modified
        // config1 removed, prod1 removed
      ];

      const options = createOptions();
      const [linesLeft, linesRight] = diffArrayCompareKey(diverseObjects, modifiedObjects, '', '', 0, options);

      // Verify no corruption in output structure
      expect(linesLeft).toBeDefined();
      expect(linesRight).toBeDefined();

      // Should have proper array brackets
      expect(linesLeft[0].text).toBe('[');
      expect(linesLeft[linesLeft.length - 1].text).toBe(']');
      expect(linesRight[0].text).toBe('[');
      expect(linesRight[linesRight.length - 1].text).toBe(']');

      // Verify that modifications are detected correctly
      const userModified = linesLeft.some((line) => line.text.includes('"name": "John"')) &&
                          linesRight.some((line) => line.text.includes('"name": "John Smith"'));
      expect(userModified).toBe(true);

      // Verify that removals are handled correctly
      const prodRemoved = linesLeft.some((line) => line.type === 'remove' && line.text.includes('prod1'));
      expect(prodRemoved).toBe(true);

      // Verify that additions are handled correctly
      const prodAdded = linesRight.some((line) => line.type === 'add' && line.text.includes('prod2'));
      expect(prodAdded).toBe(true);

      // Ensure no lines are corrupted (all should have valid text)
      linesLeft.forEach((line) => {
        expect(typeof line.text).toBe('string');
        expect(line.level).toBeGreaterThanOrEqual(0);
        expect(['equal', 'add', 'remove', 'modify']).toContain(line.type);
      });

      linesRight.forEach((line) => {
        expect(typeof line.text).toBe('string');
        expect(line.level).toBeGreaterThanOrEqual(0);
        expect(['equal', 'add', 'remove', 'modify']).toContain(line.type);
      });
    });
  });
});
