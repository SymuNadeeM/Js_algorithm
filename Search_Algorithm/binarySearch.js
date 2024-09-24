// Problem: Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// arr=[-5,8,7,9,1],t=9 --> should return 3

function binarySearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}
console.log(binarySearch([-5, 10, 5, 8, 7, 5], 7));

// Original binarySearch::

// function binaryOriginalSearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (target === arr[middleIndex]) {
//       return middleIndex;
//     }
//     if (target < arr[middleIndex]) {
//       rightIndex = middleIndex - 1;
//     } else {
//       leftIndex = middleIndex + 1;
//     }
//   }
//   return -1;
// }

// console.log(binaryOriginalSearch([-5, 8, 9, 78, 10, 6], 78));
// console.log(binaryOriginalSearch([-15, 8, 9, 78, 10, 6], 10));
// console.log(binaryOriginalSearch([20, -8, 10, 78, 10, 6], 6));
// console.log(binaryOriginalSearch([-5, 8, 9, 78, 10, 65], 65));
