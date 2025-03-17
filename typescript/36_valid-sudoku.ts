// https://leetcode.com/problems/valid-sudoku

import assert from 'assert';
import { describe, it } from 'node:test';

/*
  - check row;
  - check column;
  - check box;

  Time complexity:  O(1) -> as board is always 9x9
  Space complexity: O(1) -> as board is always 9x9
*/
function isValidSudoku(board: string[][]): boolean {
  return checkRows(board) && checkColumns(board) && checkBoxes(board);
}

function checkRows(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    const frequencyMap: Record<string, number> = {};

    for (const cell of board[i]) {
      if (cell in frequencyMap && cell !== '.') return false;
      else frequencyMap[cell] = 1;
    }
  }

  return true;
}

function checkColumns(board: string[][]): boolean {
  for (let j = 0; j < board.length; j++) {
    const frequencyMap: Record<string, number> = {};

    for (let i = 0; i < board.length; i++) {
      const cell = board[i][j];

      if (cell in frequencyMap && cell !== '.') return false;
      else frequencyMap[cell] = 1;
    }
  }

  return true;
}

function checkBoxes(board: string[][]): boolean {
  let factor = 3; // sqrt of board length

  for (let i = 0; i < board.length; i += factor) {
    for (let j = 0; j < board.length; j += factor) {
      if (!checkBox(board, [i, i + factor - 1], [j, j + factor - 1])) return false;
    }
  }

  return true;
}

function checkBox(board: string[][], iRange: [number, number], jRange: [number, number]): boolean {
  const frequencyMap: Record<string, number> = {};
  for (let i = iRange[0]; i <= iRange[1]; i++) {
    for (let j = jRange[0]; j <= jRange[1]; j++) {
      const cell = board[i][j];

      if (cell in frequencyMap && cell !== '.') return false;
      else frequencyMap[cell] = 1;
    }
  }

  return true;
}

describe('isValidSudoku', () => {
  it('should return true', () => {
    assert.equal(
      isValidSudoku([
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ]),
      true,
    );
  });

  it('should return false', () => {
    assert.equal(
      isValidSudoku([
        ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ]),
      false,
    );
  });

  it('should return false', () => {
    assert.equal(
      isValidSudoku([
        ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
        ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
        ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
        ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
        ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
        ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
      ]),
      false,
    );
  });
});
