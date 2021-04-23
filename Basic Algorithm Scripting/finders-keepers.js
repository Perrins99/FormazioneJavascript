function findElement(arr, func) {
  
  for(let x of arr){
    if(func(x))
      return x;
  }

  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);