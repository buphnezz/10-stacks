'use strict';

const LinkedList = require('../lib/linked-list');

describe('linked-list.js', () => {
  test('#testList.push', () => {
    const testList = new LinkedList();
    testList.push(1);
    testList.push(2);
    testList.push(3);
    expect(testList._storage).toEqual([1, 2, 3]);
    expect(testList._storage[0]).toEqual(1);
    expect(testList._storage[2]).toEqual(3);
  });
  test('#testList.pop', () => {
    const testList = new LinkedList();
    testList.push(1);
    testList.push(2);
    testList.push(3);
    testList.pop(1);
    testList.pop(2);
    testList.pop(3);
    expect(testList._storage).toEqual([]);
    expect(testList._storage[0]).toEqual(undefined);
    expect(testList._storage[1]).toEqual(undefined);
  });
  test('#testList.peek', () => {
    const testList = new LinkedList();
    testList.push(1);
    testList.push(2);
    testList.push(3);
    testList.peek(1);
    expect(testList._storage).toEqual([1, 2, 3]);
    expect(testList._storage[0]).toEqual(1);
    expect(testList._storage[4]).toEqual(undefined);
  });
});
