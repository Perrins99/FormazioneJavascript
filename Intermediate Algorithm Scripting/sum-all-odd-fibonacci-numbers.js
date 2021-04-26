function sumFibs(num) {
  if(num==1)
    return 2
  
  let arr=[1]

  let n1=1
  let n2=1
  while(n2<=num){
    arr.push(n2)
    let temp = n2
    n2+=n1
    n1=temp
    
  }

  return arr.filter(x => x%2!=0).reduce((accumulator,current) => {
    return accumulator+current
  })


}

sumFibs(4);