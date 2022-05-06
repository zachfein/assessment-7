const addToZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return true;
      }
    }
  }
  return false;
};

// console.log(addToZero([4, 7, 8, -4, 25]));
// Time complexity- 0(n^2)

const hasUniqueChars = (str) => {
  let uniqueStr = new Set(str.split(""));
  return !(uniqueStr.size < str.length);
};

// console.log(hasUniqueChars("moonday"));
// Time complexity- O(n)

const isPangram = (str) => {
  let alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
  for (let chicken of str.toLowerCase()) {
    alphabet.delete(chicken);
    if (alphabet.size == 0) {
      return true;
    }
  }
  return false;
};

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// Time complexity- O(1)

const findLongestWord = (arr) => {
  let answer = 0;

  arr.forEach((str) => {
    if (str.length > answer) {
      answer = str.length;
    }
  });
  return answer;
};

// console.log(findLongestWord(["hi", "hello"]));
// Time complexity- O(n)
