// Only change code below this line
function urlSlug(title) {

  title = title.trim()
  let arr = title.split(/\s+/)
  for(let i=0;i<arr.length;i++){
    arr[i] = arr[i].toLowerCase()
  }
  return arr.join("-")

}
// Only change code above this line