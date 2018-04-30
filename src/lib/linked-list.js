'use strict';

class LinkedList {
  constructor() {
    this._storage = [];
  }

  push(value) {
  // Zachary - putting elements at the end of the array
    this._storage.push(value);
  }

  pop() {
    return this._storage.pop();
  }

  peek() {
    return this._storage[0];
  }

  isEmpty() {
    return this._storage(true, false);
  }
}

module.exports = LinkedList;
