// https://leetcode.com/problems/merge-sorted-array

import assert from 'assert';

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const newArr: number[] = [];

  for (let i = 0, j = 0; newArr.length < m + n; ) {
    if (i < m && nums1[i] < (nums2[j] ?? Number.MAX_SAFE_INTEGER)) newArr.push(nums1[i++]);
    else newArr.push(nums2[j++]);
  }

  nums1.length = 0;
  nums1.push(...newArr);
}

const firstTest = [1, 2, 3, 0, 0, 0];
merge(firstTest, 3, [2, 5, 6], 3);
assert.deepStrictEqual(firstTest, [1, 2, 2, 3, 5, 6]);

const secondTest = [1];
merge(secondTest, 1, [], 0);
assert.deepStrictEqual(secondTest, [1]);
