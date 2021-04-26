function truthCheck(collection, pre) {


  for(let x of collection){
    if(Boolean(x[pre])==false)
      return false
  }
  
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");