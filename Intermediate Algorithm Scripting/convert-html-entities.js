function convertHTML(str) {
  
  let arr = str.match(/[\s\S]/g)

  for (let i=0;i<arr.length;i++){
    switch(arr[i]){
      case "&":
        arr[i] = "&amp;"
        break;
      case "<":
        arr[i] = "&lt;"
        break;
      case ">":
        arr[i] = "&gt;"
        break;
      case '"':
        arr[i] = "&quot;"
        break;
      case "'":
        arr[i] = "&apos;"
        break;
    }
  }

  return arr.join("")

}

convertHTML("Dolce & Gabbana");