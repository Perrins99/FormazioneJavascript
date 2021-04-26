function sumPrimes(num) {
  
  let sum=0
  
  for(var i=2;i<=num;i++){
    for(var j=2;j<i;j++){
      if(i%j==0)
        break
    }
    if(j>=i)
      sum+=i
  }


  return sum
}

sumPrimes(977);