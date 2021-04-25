function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line

  let prop = Object.getOwnPropertyNames(source)

  for(let x of collection){
    for(var i=0;i<prop.length;i++){
      if(x[prop[i]]==source[prop[i]])
        continue
      else
        break
    }
    if(i==prop.length) //in this case every property has the same value
      arr.push(x)
  }

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
