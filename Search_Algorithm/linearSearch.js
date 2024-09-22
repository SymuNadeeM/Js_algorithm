// Linear Search::

// Problem: Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// arr=[-5,2,47,65], t=47 ---> return 2
// arr=[-5,2,47,65], t=10 ---> return -1

function Linear(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(Linear([-5, 5, 9, 10], 9));
