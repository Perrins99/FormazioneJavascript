function bouncer(arr) {
  
  arr = arr.filter(x => x!=false && 
            x!=null && !(Number.isNaN(x)))
  
  
  return arr;
}

bouncer([7, "ate", "", false, 9])