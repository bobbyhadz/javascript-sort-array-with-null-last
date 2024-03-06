// EXAMPLE 1 - Sort an Array with NULL values coming last in JavaScript

const arr = ['c', null, 'z', null, 'b', null, 'a'];

// ✅ Sort Ascending (low to high)
const sortedAsc = arr.sort((a, b) => {
  if (a === null) {
    return 1;
  }

  if (b === null) {
    return -1;
  }

  if (a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
});
console.log(sortedAsc); // 👉️ ['a', 'b', 'c', 'z', null, null, null]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Sort with null values in descending order

// const arr = ['c', null, 'z', null, 'b', null, 'a'];

// // ✅ Sort Descending (high to low)
// const sortedDesc = arr.sort((a, b) => {
//   if (a === null) {
//     return 1;
//   }

//   if (b === null) {
//     return -1;
//   }

//   if (a === b) {
//     return 0;
//   }

//   return a < b ? 1 : -1;
// });

// console.log(sortedDesc); // 👉️ ['z', 'c', 'b', 'a', null, null, null]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Sort an Array with NULL values coming last without mutation

// const arr = ['c', null, 'z', null, 'b', null, 'a'];

// // 👇️ create shallow copy before calling sort()
// const sortedAsc = [...arr].sort((a, b) => {
//   if (a === null) {
//     return 1;
//   }

//   if (b === null) {
//     return -1;
//   }

//   if (a === b) {
//     return 0;
//   }

//   return a < b ? -1 : 1;
// });

// console.log(sortedAsc); // 👉️ ['a', 'b', 'c', 'z', null, null, null]
// console.log(arr); // 👉️ ['c', null, 'z', null, 'b', null, 'a']

// ------------------------------------------------------------------

// // EXAMPLE 4 - Sort an Array with NULL values coming last in descending order

// const arr = ['c', null, 'z', null, 'b', null, 'a'];

// const sortedDesc = arr.sort((a, b) => {
//   if (a === null) {
//     return 1;
//   }

//   if (b === null) {
//     return -1;
//   }

//   if (a === b) {
//     return 0;
//   }

//   return a < b ? 1 : -1;
// });

// console.log(sortedDesc); // 👉️ ['z', 'c', 'b', 'a', null, null, null]
