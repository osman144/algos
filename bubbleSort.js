function bubbleSort(arr){
  // [6, 4, 0];

  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if (arr[i] > arr[j]) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([6,4, 0, 9, 7]));