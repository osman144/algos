function quickSort(arr, start, end) {
  // Base case or terminating case
  if (start >= end) {
      return arr;
  }
  
  // Returns pivotIndex
  let index = partition(arr, start, end);
  
  // Recursively apply the same logic to the left and right subarrays
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
}

function partition(arr, start, end){
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start; 
  for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
      }
  }
  
  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
  return pivotIndex;
};

// let array = [4,32,2,8,345,500,1,63,32,55, 234,92]
// console.log(quickSort(array, 0, array.length - 1))



/// Quick Sort 2 
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0]; // 2
  let left = []; // O(n)
  let right = []; // O(n)

  // O(n)
  for (let i = 1; i < arr.length; i++){
    if (arr[i] < pivot) {
      // push everything less than the pivot to the left of the pivot
      left.push(arr[i]);
    }else{
      // push everything greater than the pivot to the right of the pivot
      right.push(arr[i]);
    }
  }

  left = quickSort(left); // [2,8,1,32,32,4,63,32,55,234,92]
  right = quickSort(right); // [500]

  return left.concat(pivot, right);
}