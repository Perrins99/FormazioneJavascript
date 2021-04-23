function maxInArray(arr){
  let max=arr[0];
  for(let x of arr){
    if(x>max)
      max=x;
  }
  return max;

}

function largestOfFour(arr) {

  let newArr = [];
  for(let x of arr){
    newArr.push(maxInArray(x));
  }

  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);