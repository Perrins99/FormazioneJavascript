function mutation(arr) {
  
  arr[0] = arr[0].toLowerCase()
  arr[1] = arr[1].toLowerCase()

  
  
  for(let x of arr[1]){
    if(! (arr[0].includes(x)))
      return false;
  }
  
  return true;

}

mutation(["hello", "hey"]);