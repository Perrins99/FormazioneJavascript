function titleCase(str) {
  
str = str.toLowerCase();

/* myReg matches with words including or not "'" */ 
let myReg = /\w+\'*\w*/ig 
let words = str.match(myReg);
let newArr = [];
for(let x of words){
  let letter= x[0].toUpperCase()
  let remaining = x.slice(1,x.length)
  
  newArr.push(letter+remaining);
}

return newArr.join(" ");
}

titleCase("I'm a little tea pot");