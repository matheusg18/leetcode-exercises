// https://leetcode.com/problems/top-k-frequent-elements

import assert from 'assert';
import { describe, it } from 'node:test';

/*
  * build a frequency map;
  * create an array with a length of nums.length size + 1, where each element is initially an empty array
    (this array will be used for bucket sorting, the index will be the frequency number and
    it's content, the number itself, eg: [1, 1, 2, 2, 4] => [[], [4], [1, 2], [], []]);
  * populate the grouping array;
  * loop through the array in reverse order to collect the top k frequent.
*/
function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap = buildfrequencyMap(nums);

  const groupingArray: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, numFrequency] of frequencyMap) {
    groupingArray[numFrequency].push(num);
  }

  const result: number[] = [];
  for (let i = groupingArray.length - 1; i > 0; i--) {
    for (const num of groupingArray[i]) {
      result.push(num);

      if (result.length === k) return result;
    }
  }

  return [];
}

function buildfrequencyMap(nums: number[]): Map<number, number> {
  const frequencyMap = new Map<number, number>();
  for (const num of nums) {
    if (frequencyMap.has(num)) frequencyMap.set(num, (frequencyMap.get(num) as number) + 1);
    else frequencyMap.set(num, 1);
  }

  return frequencyMap;
}

describe('topKFrequent', () => {
  it('should return [1, 2] for nums = [1, 1, 1, 2, 2, 3] and k = 2', () => {
    assert.deepStrictEqual(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
  });

  it('should return [1] for nums = [1] and k = 1', () => {
    assert.deepStrictEqual(topKFrequent([1], 1), [1]);
  });

  it('should return [3] for nums = [1, 1, 1, 2, 2, 3, 3, 3, 3] and k = 1', () => {
    assert.deepStrictEqual(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3], 1), [3]);
  });

  it('should return [1, 2, 3] for nums = [1, 1, 2, 2, 3, 3] and k = 3', () => {
    assert.deepStrictEqual(topKFrequent([1, 1, 2, 2, 3, 3], 3), [1, 2, 3]);
  });

  it('should return [1, 2, 3] for nums = [1, 1, 1, 2, 2, 2, 3, 3, 3] and k = 3', () => {
    assert.deepStrictEqual(topKFrequent([1, 1, 1, 2, 2, 2, 3, 3, 3], 3), [1, 2, 3]);
  });

  it('should return [1, 2] for nums = [1, 2] and k = 2', () => {
    assert.deepStrictEqual(topKFrequent([1, 2], 2), [1, 2]);
  });

  it('should return [4, 3] for nums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4] and k = 2', () => {
    assert.deepStrictEqual(topKFrequent([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 2), [4, 3]);
  });

  it('should return [1] for nums = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3] and k = 1', () => {
    assert.deepStrictEqual(topKFrequent([1, 1, 1, 1, 2, 2, 2, 3, 3, 3], 1), [1]);
  });
});
