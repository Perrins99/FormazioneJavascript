function findLongestWordLength(str) {
  
  let myRegex = /\w+/ig

  let words=str.match(myRegex);
  let max=-1;
  
  for(let w of words){
    if (w.length>max)
      max=w.length;
  }
  
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");