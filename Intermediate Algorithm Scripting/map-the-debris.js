function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const EARTHRADIUS = 6367.4447;
  
  for(let x of arr){
    let r = EARTHRADIUS + x.avgAlt
    delete x.avgAlt
    x.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(r*r*r/GM))
    
  }
  
  return arr
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);