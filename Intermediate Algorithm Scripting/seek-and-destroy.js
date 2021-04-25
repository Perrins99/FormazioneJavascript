function destroyer(arr) {
  
  let args = [...arguments]
  return arr.filter(x => args.indexOf(x)==-1)

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);