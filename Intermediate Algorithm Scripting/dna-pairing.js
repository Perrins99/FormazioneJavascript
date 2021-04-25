function pairElement(str) {
  
  let arr = []

  for(let x of str){
    switch(x){
      case 'G':
        arr.push(["G","C"])
        break
      case 'C':
        arr.push(["C","G"])
        break
      case 'A':
        arr.push(["A","T"])
        break
      case 'T':
        arr.push(["T","A"])
        break
    }
  }

  return arr



}

pairElement("GCG");