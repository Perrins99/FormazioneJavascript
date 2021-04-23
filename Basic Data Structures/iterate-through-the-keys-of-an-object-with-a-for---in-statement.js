function countOnline(usersObj) {
  // Only change code below this line
  let tot=0;
  for(let u in usersObj){
    if(usersObj[u].online)
      tot+=1;
  }
  return tot;
  // Only change code above this line
}