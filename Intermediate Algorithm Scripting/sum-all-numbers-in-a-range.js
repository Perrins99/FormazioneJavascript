function sumAll(arr) {
  if(arr[1]<arr[0]){
    let temp = arr[1]
    arr[1] = arr[0]
    arr[0]=temp
  }
  let sum=0
  for(let i=arr[0];i<=arr[1];i++)
    sum+=i
  
  return sum
}

sumAll([1, 4]);