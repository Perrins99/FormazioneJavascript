function translatePigLatin(str) {
  
  let myregex = /\w/g
  let arr = str.match(myregex)
  let myRegex2 = /^[^aeiou]+/g
  if(myRegex2.test(arr)){
    let temp = str.match(myRegex2)
    arr.push(temp)
    for(let i=0;i<temp[0].length;i++){
      arr[i]=""
    }

    arr.push("ay")
    return arr.join("")
  }
  else{
    arr.push("way")
    return arr.join("")
  }

}

translatePigLatin("schwartz");