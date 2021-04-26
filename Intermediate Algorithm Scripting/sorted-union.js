function uniteUnique() {

  let newArr = []

  for(let x of arguments)
    newArr = newArr.concat(x)

  return newArr.filter((elem, index) => 
            newArr.indexOf(elem) == index); 

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);