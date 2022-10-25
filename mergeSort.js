let list = [20, 23, 4, 5, 88, 9, 0, 2, 1, 34];

// helper function
function mergeArrays(arr1, arr2){
  // Given two arrays, this function constructs a single sorted array
  let sortedArr = [];
  let i = 0;
  let j = 0;

  while(i<arr1.length && j<arr2.length){
    if(arr1[i] < arr2[j]){
      sortedArr.push(arr1[i]);
      i++;
    }else{
      sortedArr.push(arr2[j]);
      j++;
    }
  }

  // hit the end of array 1, so concat the rest of arr2 from where j was at
  if(i === arr1.length){
    sortedArr = sortedArr.concat(arr2.slice(j));
  }else{
    sortedArr = sortedArr.concat(arr1.slice(i));
  }

  return sortedArr;
}

function mergeSort(arr){
  // [1, 43, 2, 78] --> [1, 43] and [2, 78] --> [1] [43] [2] [78] --> [1, 43] [2, 78] --> [1, 2, 43, 78]
  // 1. Base case
  if(arr.length <= 1) return arr;

  // 2. Break array in half using slice
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  
  // 3. return merged arrays
  return mergeArrays(left, right);
} 



function mergeSort(arr){
  if(arr.length <= 1) return arr;

  // break in half using slice
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // compare the left and the right
  return mergeArrays(left, right);
}

function mergeArrays(arr1, arr2){
  let sortedArr = [];
  let i = 0;
  let j = 0;

  while(i<arr1.length && j<arr2.length){
    if(arr1[i] < arr2[j]){
      sortedArr.push(arr1[i]);
      i++;
    }else{
      sortedArr.push(arr1[j]);
      j++;
    }
  }
}