// https://leetcode.com/problems/longest-consecutive-sequence

import assert from 'assert';
import { describe, it } from 'node:test';

/*
  - build a lookup Set;
  - build a "sequence starters array";
    - a "sequence starter" is the elemente which doesn't have a -1 of it in the Set.
  - for the result:
    - loop through the "sequence starters array":
      - finding the sequence by adding +1 and checking the Set.

  Time complexity:  O(n)
  Space complexity: O(n)
*/
function longestConsecutive(nums: number[]): number {
  const lookupSet = new Set(nums);

  const sequenceStarters: number[] = [];
  for (const num of lookupSet) {
    if (!lookupSet.has(num - 1)) sequenceStarters.push(num);
  }

  let longestSequence = 0;
  for (const sequenceStarter of sequenceStarters) {
    let actualSequence = 1, k = 1;
    while (lookupSet.has(sequenceStarter + k)) {
      actualSequence++;
      k++;
    }

    if (actualSequence > longestSequence) longestSequence = actualSequence;
  }

  return longestSequence;
}

describe('longestConsecutive', () => {
  it('should return 4 for nums = [100, 4, 200, 1, 3, 2]', () => {
    assert.deepStrictEqual(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
  });

  it('should return 9 for nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]', () => {
    assert.deepStrictEqual(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
  });

  it('should return 3 for nums = [1, 0, 1, 2]', () => {
    assert.deepStrictEqual(longestConsecutive([1, 0, 1, 2]), 3);
  });

  it('should return 0 for nums = []', () => {
    assert.deepStrictEqual(longestConsecutive([]), 0);
  });
});
