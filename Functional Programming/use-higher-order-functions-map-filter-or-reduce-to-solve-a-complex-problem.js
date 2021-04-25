const squareList = arr => {
  // Only change code below this line
  return arr.filter(x => Number.isInteger(x) && x > 0).map(x => x*x)
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);