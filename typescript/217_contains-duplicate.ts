// https://leetcode.com/problems/contains-duplicate

import assert from 'assert';

function containsDuplicate(nums: number[]): boolean {
  const frequencyMap: Record<number, number> = {};

  for (const num of nums) {
    frequencyMap[num] = num in frequencyMap ? frequencyMap[num] + 1 : 1;

    if (frequencyMap[num] > 1) return true;
  }

  return false;
}

assert.equal(containsDuplicate([1]), false);
assert.equal(containsDuplicate([1, 2, 3, 1]), true);
assert.equal(containsDuplicate([1, 2, 3, 4]), false);
assert.equal(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
