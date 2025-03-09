// https://leetcode.com/problems/top-k-frequent-elements

import assert from 'assert';

function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap = buildfrequencyMap(nums);
  const orderedTuples = Array.from(frequencyMap.entries()).sort((a, b) => b[1] - a[1]);
  const result: number[] = [];

  for (let i = 0; i < k; i++) {
    result.push(orderedTuples[i][0]);
  }

  return result;
}

function buildfrequencyMap(nums: number[]): Map<number, number> {
  const frequencyMap = new Map<number, number>();
  for (const num of nums) {
    if (frequencyMap.has(num)) frequencyMap.set(num, (frequencyMap.get(num) as number) + 1);
    else frequencyMap.set(num, 1);
  }

  return frequencyMap;
}

assert.deepStrictEqual(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
assert.deepStrictEqual(topKFrequent([1], 1), [1]);
assert.deepStrictEqual(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3], 1), [3]);
assert.deepStrictEqual(topKFrequent([1, 1, 2, 2, 3, 3], 3), [1, 2, 3]);
assert.deepStrictEqual(topKFrequent([1, 1, 1, 2, 2, 2, 3, 3, 3], 3), [1, 2, 3]);
assert.deepStrictEqual(topKFrequent([1, 2], 2), [1, 2]);
assert.deepStrictEqual(topKFrequent([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 2), [4, 3]);
assert.deepStrictEqual(topKFrequent([1, 1, 1, 1, 2, 2, 2, 3, 3, 3], 1), [1]);
