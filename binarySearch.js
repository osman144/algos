let list = [ 1, 2];

// // binary search
function binarySearch(target, arr){
  let left = 0;
  let right = arr.length - 1;

  while(left <= right){
    let midpoint = Math.floor((left + right)/2);
    if(arr[midpoint] === target) return true;
    if(target < arr[midpoint]){
      right = midpoint - 1;
    }else{
      left = midpoint + 1; //1
    }
  }
  return -1;
}

// 1 ---- 2

// function binarySearch(target, list, left, right){
//   if(left > right) return false; // overlap

//   let mid = Math.floor((left+right)/2); // 1

//   if(target === list[mid]){ 
//     return true; // found
//   } else if(target < list[mid]){
//     // go search left side
//     return binarySearch(target, list, left, mid - 1)
//   } else{
//     // go search right side
//     return binarySearch(target, list, mid + 1, right) // 2
//   };
// }

// console.log(binarySearch(10, list, 0, list.length - 1))


function binarySearch(target, arr, left, right){
  if(left > right) return;
  if(list.length === 0) return false;

  let mid = Math.floor((left+right/2))

  if(target === arr[mid]){
    return true;
  }else if(target < mid){
    arr = arr.slice(0, mid)
    binarySearch(target, arr, left, mid-1)
  }else{
    arr = arr.slice(mid+1)
    binarySearch(target, arr, mid+1, right)
  }

  return false;
}

console.log(binarySearch(100000000, [-1, 0, 1, 2, 4], 0, list.length - 1))