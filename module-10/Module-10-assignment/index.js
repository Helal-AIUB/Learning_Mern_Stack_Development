// calculate Difference
function calculateDifference(a, b) {
  return a - b;
}
console.log("Difference:", calculateDifference(10, 4)); 

// Check Odd
function isOdd(num) {
  return num % 2 !== 0;
}
console.log("Is 5 odd?", isOdd(5));
console.log("Is 8 odd?", isOdd(8));

// find Minimum
function findMin(arr) {
  return Math.min(...arr);
}
console.log("Minimum:", findMin([3, 7, 2, 9, 1])); 


// filter Even Numbers
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log("Even Numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));


// sort Array Descending
function sortArrayDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}
console.log("Sorted Desc:", sortArrayDescending([5, 2, 9, 1, 7])); 


// lowercase First Letter
function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Lowercase First Letter:", lowercaseFirstLetter("Hello"));

// find Average
function findAverage(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}
console.log("Average:", findAverage([2, 4, 6, 8]));

//  Check Leap Year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is 2024 a leap year?", isLeapYear(2024));
console.log("Is 2023 a leap year?", isLeapYear(2023));