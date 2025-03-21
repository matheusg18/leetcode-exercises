// https://leetcode.com/problems/min-stack

import assert from 'assert';
import { describe, it } from 'node:test';

/*
  Following the tip: "Consider each node in the stack having a minimum value."
*/
class MinStack {
  private _arr: number[];
  private _minStack: number[];

  constructor() {
    this._arr = [];
    this._minStack = [];
  }

  push(val: number): void {
    this._arr.push(val);
    this._minStack.push(this._minStack.length > 0 ? Math.min(this._minStack[this._minStack.length - 1], val) : val);
  }

  pop(): void {
    this._arr.pop();
    this._minStack.pop();
  }

  top(): number {
    return this._arr[this._arr.length - 1];
  }

  getMin(): number {
    return this._minStack[this._minStack.length - 1];
  }
}

describe('MinStack', () => {
  it('should pass the test case', () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    assert.strictEqual(minStack.getMin(), -3);
    minStack.pop();
    assert.strictEqual(minStack.top(), 0);
    assert.strictEqual(minStack.getMin(), -2);
  });
});
