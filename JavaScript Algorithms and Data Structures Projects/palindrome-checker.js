function palindrome(str) {
  
  let regex = /\W|_|\s/

  let arr = str.split(regex)
  
  str = arr.join("")
  let str2 = arr.join("").split("").reverse().join("")

  str = str.toLowerCase()
  str2 = str2.toLowerCase()
  
  if(str==str2)
    return true
   
  return false
}



palindrome("not a palindrome");