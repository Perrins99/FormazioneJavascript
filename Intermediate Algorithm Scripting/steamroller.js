function recursiveGet(arr,x){

  if(!(Array.isArray(x))){
    return x
  }
  
  for(let y of x){
    let temp =recursiveGet(arr,y)
    if(temp!=undefined)
      arr.push(temp)
  }
}

function steamrollArray(arr) {
  
  let newArr = []
  for(let x of arr){
    if(!(Array.isArray(x)))
      newArr.push(x)
    else{
      recursiveGet(newArr,x)
    }
  }

  return newArr
}

steamrollArray([1, [2], [3, [[4]]]]);