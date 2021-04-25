function diffArray(arr1, arr2) {
  var newArr = [];

  for(let x of arr1){
    if(arr2.indexOf(x)==-1)
      newArr.push(x)
  }

  for(let y of arr2){
    if(arr1.indexOf(y)==-1)
      newArr.push(y)
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);