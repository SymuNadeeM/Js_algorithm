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
