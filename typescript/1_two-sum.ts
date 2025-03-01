// https://leetcode.com/problems/two-sum

import assert from 'assert';

// Time complexity:  O(n)
// Space complexity: O(n)
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) return [map.get(complement) as number, i];
    map.set(nums[i], i);
  }

  return [];
}

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
assert.deepEqual(twoSum([0, 4, 3, 0], 0), [0, 3]);
assert.deepEqual(twoSum([-1, -2, -3, -4, -5], -8), [2, 4]);
assert.deepEqual(twoSum([1, 2, 3, 4, 5], 7), [2, 3]);
assert.deepEqual(twoSum([1, 2, 3, 4, 5], 3), [0, 1]);
assert.deepEqual(twoSum([0, 1, 2, 3, 4, 5], 9), [4, 5]);
assert.deepEqual(twoSum([0, 4, 3, 0], 0), [0, 3]);
assert.deepEqual(twoSum([10, 20, 30, 40, 50, 60], 100), [3, 5]);
