function truncateString(str, num) {
  
  if(str.length>num){
    let arr=[];
    for (let i=0;i<num;i++)
      arr.push(str[i]);
    
    arr.push("...");
    return arr.join("");
  }

  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);