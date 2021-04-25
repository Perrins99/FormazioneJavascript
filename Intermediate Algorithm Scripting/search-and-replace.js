function myReplace(str, before, after) {
  let arr1 = before.match(/\w/g)
  let arr2 = after.match(/\w/g)

  if(arr1[0] == arr1[0].toLowerCase())
    arr2[0] = arr2[0].toLowerCase()
  else if(arr1[0] == arr1[0].toUpperCase()){
    arr2[0] = arr2[0].toUpperCase()
  }
  
  let aft = arr2.join("")

  str = str.replace(before,aft);
  return str
}

myReplace("Let us go to the store", "store", "mall");