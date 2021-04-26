function smallestCommons(arr) {

  let max = 0
  let min = 0

  if(arr[0]>arr[1]){
    max=arr[0]
    min=arr[1]
  }
  else{
    max=arr[1]
    min=arr[0]
  }

  let scm = max
  let finished = false
  while(!finished){
    for(var i=min;i<max;i++){
      if(scm%i!=0)
        break
    }
    if(i==max)
      finished = true
    else
      scm+=max
  }
  
  return scm
}


smallestCommons([1,5]);