const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}
// Results for extraLargeArray
// insert 1.0034081s
// append 4.8653ms

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}
// Results for extraLargeArray
// insert 1.2571821s
// append 5.4099ms

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start(); // Starts timer
doublerAppend(mediumArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();

console.log("Results for the extraLargeArray");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// RESULTS:

// extraLargeArray
// Insert 1.0153762s
// Append 7.7126ms

// largeArray
// Insert 10.0948ms
// Append 869.2μs

// mediumArray
// Insert 223.2μs
// Append 197.6μs

// smallArray
// Insert 60.8μs
// Append 148.1μs

// tinyArray
// Insert 46μs
//Append 123.7μs

// In the case of .push, the time complexity for an array should always be O(1) because only one element is being affected. The element that is pushed. All other elements in the array remain static. In the case of .unshift, the entire array is affected, as an element is added to beginning of the array. All subsequent elements must move back. The runtime complexity is therefore O(n) as the length of the array is relevant. The longer the array, the more complex and taxing the runtime. In most cases, the insert function has a significantly better runtime than the append function as insert uses    .push and append uses .unshift
