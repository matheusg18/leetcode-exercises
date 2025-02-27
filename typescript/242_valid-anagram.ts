// https://leetcode.com/problems/valid-anagram

import assert from 'assert';

type CharFrequencyMap = Record<string, number>;

function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false;

  const sCharfrequencyMap = getCharfrequencyMap(s);
  const tCharfrequencyMap = getCharfrequencyMap(t);

  return checkCharfrequencyMapEquity(sCharfrequencyMap, tCharfrequencyMap);
}

function getCharfrequencyMap(word: string): CharFrequencyMap {
  const charfrequencyMap: CharFrequencyMap = {};
  for (const char of word) {
    charfrequencyMap[char] = char in charfrequencyMap ? charfrequencyMap[char] + 1 : 1;
  }

  return charfrequencyMap;
}

function checkCharfrequencyMapEquity(
  sCharfrequencyMap: CharFrequencyMap,
  tCharfrequencyMap: CharFrequencyMap,
): boolean {
  for (const key in sCharfrequencyMap) {
    if (sCharfrequencyMap[key] != tCharfrequencyMap[key]) return false;
  }

  return true;
}

assert.equal(isAnagram('anagram', 'nagaram'), true);
assert.equal(isAnagram('rat', 'car'), false);

// Time complexity:  O(n)
// Space complexity: O(1)
