function fearNotLetter(str) {
  
  let current = str.charCodeAt(0)


  for(let i=0;i<str.length;i++){
    if(str.charCodeAt(i)==current)
      current++;
    else
      return String.fromCharCode(current) 
  }

  return undefined


}

fearNotLetter("abce");