// https://leetcode.com/problems/product-of-array-except-self

import assert from 'assert';
import { describe, it } from 'node:test';

/*
  - create a prefix product array in the result array;
  - use an variable to keep the suffix product;
  - calculate the result array values.

  Time complexity:  O(n)
  Space complexity: O(1) -> the result array does not count here
*/
function productExceptSelf(nums: number[]): number[] {
  const result: number[] = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * suffix || 0; // avoid -0 results;
    suffix *= nums[i];
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
