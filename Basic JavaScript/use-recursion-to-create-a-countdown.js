// Only change code below this line
function countdown(n){
  if (n<1)
    return [];
  
  var arr = countdown(n-1);
  arr.unshift(n);
  return arr;

}
// Only change code above this line