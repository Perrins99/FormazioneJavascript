// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "PhilosophiĆ¦ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList,bookName) {
  let arr = []
  for(let x of bookList){
    arr.push(x)
  }
  arr.push(bookName)
  return arr;
  
  // Change code above this line
}

// Change code below this line
function remove (bookList,bookName) {
  let arr = []
  for(let x of bookList){
    arr.push(x)
  }
  let index = arr.indexOf(bookName)
  if(index>=0)
    arr.splice(index,1)

  return arr;
    // Change code above this line
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);