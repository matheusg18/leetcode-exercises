// https://leetcode.com/problems/product-of-array-except-self

import assert from 'assert';
import { describe, it } from 'node:test';

/*
  - create a prefix product array;
  - create a suffix product array;
  - get the answer by multiplying the prefix and suffix array.

  Time complexity:  O(n)
  Space complexity: O(n)
*/
function productExceptSelf(nums: number[]): number[] {
  const prefix: number[] = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  const sufix: number[] = new Array(nums.length).fill(1);
  for (let i = nums.length - 2; i >= 0; i--) {
    sufix[i] = sufix[i + 1] * nums[i + 1];
  }

  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * sufix[i] || 0; // avoid -0 results
  }

  return result;
}

describe('productExceptSelf', () => {
  it('should return [24, 12, 8, 6] for nums = [1, 2, 3, 4]', () => {
    assert.deepStrictEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
  });

  it('should return [0, 0, 9, 0, 0] for nums = [-1, 1, 0, -3, 3]', () => {
    assert.deepStrictEqual(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
  });

  it('should return [1, 0] for nums = [0,1]', () => {
    assert.deepStrictEqual(productExceptSelf([0, 1]), [1, 0]);
  });

  it('should return [0,1] for nums = [1,0]', () => {
    assert.deepStrictEqual(productExceptSelf([1, 0]), [0, 1]);
  });

  it('should return [0,0,0] for nums = [0,0,0]', () => {
    assert.deepStrictEqual(productExceptSelf([0, 0, 0]), [0, 0, 0]);
  });

  it('should return [1,1] for nums = [1,1]', () => {
    assert.deepStrictEqual(productExceptSelf([1, 1]), [1, 1]);
  });
  it('should return [0,0,0,0] for nums = [0,0,0,0]', () => {
    assert.deepStrictEqual(productExceptSelf([0, 0, 0, 0]), [0, 0, 0, 0]);
  });

  it('should return [-1,1] for nums = [1,-1]', () => {
    assert.deepStrictEqual(productExceptSelf([1, -1]), [-1, 1]);
  });
});
