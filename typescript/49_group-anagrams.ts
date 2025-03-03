// https://leetcode.com/problems/group-anagrams

import assert from 'assert';

// Time complexity:  O(m * n * log n)
// Space complexity: O(m * n)
function groupAnagrams(strs: string[]): string[][] {
  const resultMap: Record<string, string[]> = {};

  for (let i = 0; i < strs.length; i++) {
    const alphabetical = strs[i].split('').sort().join();

    if (alphabetical in resultMap) resultMap[alphabetical].push(strs[i]);
    else resultMap[alphabetical] = [strs[i]];
  }

  return Object.values(resultMap);
}

assert.deepStrictEqual(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']), [
  ['eat', 'tea', 'ate'],
  ['tan', 'nat'],
  ['bat'],
]);
assert.deepStrictEqual(groupAnagrams(['']), [['']]);
assert.deepStrictEqual(groupAnagrams(['a']), [['a']]);
assert.deepStrictEqual(groupAnagrams(['bdddddddddd', 'bbbbbbbbbbc']), [['bdddddddddd'], ['bbbbbbbbbbc']]);
assert.deepStrictEqual(groupAnagrams(['abc', 'cba', 'bac', 'foo', 'oof']), [
  ['abc', 'cba', 'bac'],
  ['foo', 'oof'],
]);
assert.deepStrictEqual(groupAnagrams(['', 'b']), [[''], ['b']]);
assert.deepStrictEqual(groupAnagrams(['ddddddddddg', 'dgggggggggg']), [['ddddddddddg'], ['dgggggggggg']]);
