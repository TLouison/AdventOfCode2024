const fs = require("fs");

const INPUT_FILE_NAME = "input.txt";
const INPUT_DATA = fs.readFileSync(INPUT_FILE_NAME, "utf-8").trim();

enum ValueType {
  File = 1,
  EmptySpace,
}

function generateFileString(): [number | null] {
  let type = ValueType.File;
  let result: [number | null] = [];
  let currentFileID = 0;

  function addNTimes(val: number | null, n: number) {
    for (var i = 0; i < n; i++) {
      result.push(val);
    }
  }

  for (var i of INPUT_DATA) {
    let value = parseInt(i);
    if (type === ValueType.File) {
      addNTimes(currentFileID, value);
      currentFileID++;
      type = ValueType.EmptySpace;
    } else {
      addNTimes(null, value);
      type = ValueType.File;
    }
  }
  return result;
}

function calculateChecksum(input: [number | null]): number {
  return input
    .map((val, index) => (val === null ? 0 : val * index))
    .reduce((acc, cur) => acc + cur, 0);
}

function getBlockStats(
  input: [number | null],
  target: number | null,
): { blockSize: number; blockStart: number } {
  let blockSize = 0;
  let blockStart = -1;
  for (var i = 0; i < input.length; i++) {
    if (input[i] == target) {
      if (blockStart == -1) {
        blockStart = i;
      }
      blockSize++;
    }
  }
  return { blockSize, blockStart };
}

function defrag(input: [number | null]): [number | null] {
  // Defragments the input by swapping the end values to the earliest available space. We determine when
  // we are done by checking to see if the earliest free space is after the value we are currently checking.
  //
  //  Returns the defragmented string

  let numArray: [number | null] = input;
  let earliestFreeSpaceIndex = 0;
  // Loop backwards, finding the last value that is not empty
  for (var i = numArray.length - 1; i > earliestFreeSpaceIndex; i--) {
    if (numArray[i] !== null) {
      // Now that we've found a non-empty value, loop from the beginning of the string to
      // find the earliest place to put it.
      // First, find how many blocks we are moving
      let { blockSize, blockStart } = getBlockStats(input, numArray[i]);

      // Start from 0 since we might find a block that fits a smaller file earlier. Stop at i so that
      // we don't move the block further to the right.
      for (var j = 0; j < i; j++) {
        if (numArray[j] === null) {
          // Find the size of the open block
          let startIndex = j;
          let openingSize = 0;
          while (numArray[j] === null) {
            openingSize++;
            j++;
          }

          if (openingSize >= blockSize) {
            // Move the data to the new block
            for (
              var k = startIndex, l = blockStart;
              k < startIndex + blockSize;
              k++, l++
            ) {
              numArray[k] = numArray[i];
              numArray[l] = null;
            }
            break;
          }
        }
      }

      i = blockStart;
    }
  }
  return numArray;
}

let fileString = generateFileString();
console.log(fileString);
// let valueIndexes = getValueIndexes(fileString);
let defraggedString = defrag(fileString);
console.log("Defragged string:", defraggedString);
console.log(calculateChecksum(defraggedString));
