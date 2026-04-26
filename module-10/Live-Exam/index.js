for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 6, 6]));
