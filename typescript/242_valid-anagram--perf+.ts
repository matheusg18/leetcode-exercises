// https://leetcode.com/problems/valid-anagram

import assert from 'assert';

type CharFrequencyMap = Record<string, number>;

// Time complexity:  O(n)
// Space complexity: O(1)
function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false;

  const sCharfrequencyMap: CharFrequencyMap = {};
  const tCharfrequencyMap: CharFrequencyMap = {};
  for (let i = 0; i < s.length; i++) {
    sCharfrequencyMap[s[i]] = s[i] in sCharfrequencyMap ? sCharfrequencyMap[s[i]] + 1 : 1;
    tCharfrequencyMap[t[i]] = t[i] in tCharfrequencyMap ? tCharfrequencyMap[t[i]] + 1 : 1;
  }

  return areCharFrequencyMapsEqual(sCharfrequencyMap, tCharfrequencyMap);
}

function areCharFrequencyMapsEqual(sCharfrequencyMap: CharFrequencyMap, tCharfrequencyMap: CharFrequencyMap): boolean {
  for (const key in sCharfrequencyMap) {
    if (sCharfrequencyMap[key] != tCharfrequencyMap[key]) return false;
  }

  return true;
}

assert.equal(isAnagram('anagram', 'nagaram'), true);
assert.equal(isAnagram('rat', 'car'), false);
