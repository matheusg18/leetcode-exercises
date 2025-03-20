// https://leetcode.com/problems/valid-parentheses

import assert from 'assert';
import { describe, it } from 'node:test';

/*
  Time complexity:  O(n)
  Space complexity: O(n)
*/
function isValid(s: string): boolean {
  if (s.length === 1 || s.length % 2 === 1) return false;

  const dict = { '(': ')', '[': ']', '{': '}' };
  const closeStack: string[] = [];

  for (const char of s) {
    if (char in dict)
      closeStack.push(dict[char as keyof typeof dict]);
    else if (char === closeStack[closeStack.length - 1])
      closeStack.pop();
    else
      return false;
  }

  return closeStack.length === 0;
}

describe('isValid', () => {
  it('should return true for s = "()"', () => {
    assert.equal(isValid('()'), true);
  });

  it('should return true for s = "()[]{}"', () => {
    assert.equal(isValid('()[]{}'), true);
  });

  it('should return false for s = "(]"', () => {
    assert.equal(isValid('(]'), false);
  });

  it('should return false for s = "([)]"', () => {
    assert.equal(isValid('([)]'), false);
  });

  it('should return true for s = "{[]}"', () => {
    assert.equal(isValid('{[]}'), true);
  });

  it('should return false for s = "(("', () => {
    assert.equal(isValid('(('), false);
  });

  it('should return false for s = "]"', () => {
    assert.equal(isValid(']'), false);
  });

  it('should return false for s = "){"', () => {
    assert.equal(isValid('){'), false);
  });

  it('should return false for s = "([)]"', () => {
    assert.equal(isValid('([)]'), false);
  });

  it('should return false for s = "){"', () => {
    assert.equal(isValid('){'), false);
  });

  it('should return false for s = "("{}"', () => {
    assert.equal(isValid('({}'), false);
  });
});
