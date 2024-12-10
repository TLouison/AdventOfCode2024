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

function defrag(input: [number | null]): [number | null] {
  // Defragments the input by swapping the end values to the earliest available space. We determine when
  // we are done by checking to see if the earliest free space is after the value we are currently checking.
  //
  //  Returns the defragmented string

  let numArray: [number | null] = input;
  let earliestFreeSpaceIndex = 0;
  // Loop backwards, finding the last value that is not empty
  for (var i = numArray.length - 1; i > earliestFreeSpaceIndex; i--) {
    // console.log(
    //   "Trying to swap at index",
    //   i,
    //   earliestFreeSpaceIndex,
    //   stringArray[i],
    // );
    if (numArray[i] !== null) {
      // Now that we've found a non-empty value, loop from the beginning of the string to
      // find the earliest place to put it.
      for (var j = earliestFreeSpaceIndex - 1; j < numArray.length; j++) {
        if (numArray[j] === null) {
          numArray[j] = numArray[i];
          numArray[i] = null;
          earliestFreeSpaceIndex = j + 1;
          break;
        }
      }
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
