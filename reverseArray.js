let arr = [1, 2, 3, 4, 5];

function reverse(arr){
  return arr.reverse();
}



function reverseTwo(arr){
  let newArr = [];
  for(let i=arr.length-1; i>=0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseTwo(arr));


