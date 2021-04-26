function addTogether() {
  
  if(arguments.length==1){
    if(typeof arguments[0] == "number"){
      return m => {
        
        if(typeof m == "number")
          return m+arguments[0]
        return undefined
        }
    }
  }
  else{
    if(typeof arguments[0] == "number" && typeof arguments[1] == "number")
      return arguments[0] + arguments[1]
    return undefined
  }
}

addTogether(2,3);