// Query
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns
// true when passed as a parameter to the callback function.

function all(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}

//Sample
var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});
console.log(allAreLessThanSeven); // false
