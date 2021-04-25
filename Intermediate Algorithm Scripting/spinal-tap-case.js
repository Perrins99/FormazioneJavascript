function spinalCase(str) {

  let regex = /\s+|\_+/g
  str = str.replace(/([a-z])([A-Z])/g,"$1 $2")
  str = str.toLowerCase()
  str = str.replace(regex,"-")
  console.log(str)
  return str;
}

spinalCase('ThisIsSpinalTap');