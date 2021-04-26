function rot13(str) {
  
  let regex = /\W|_/
  let arr = str.split("")
  
  for(let i=0;i<arr.length;i++){
    if(!(regex.test(arr[i]))){
      let code = (arr[i].charCodeAt(0)-13)
      if(code<65)
        code+=26
      arr[i] = String.fromCharCode(code)
    }
  }
  
  return arr.join("")
}

rot13("SERR PBQR PNZC");