const sum = (...args) => {
  let tot=0;
  for(let i=0;i<args.length;i++){
    tot+=args[i];
  }
  return tot;
}