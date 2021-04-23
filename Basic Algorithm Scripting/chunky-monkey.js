function chunkArrayInGroups(arr, size) {
  
  let smallArr = [];
  let bigArr = [];
  for(let i = 0; i<arr.length;i+=size){
    for(let j=0;j<size;j++){
      if(i+j<arr.length)
        smallArr.push(arr[i+j]);
    }
      
    bigArr.push(smallArr);
    smallArr=[];
  }

  return bigArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);