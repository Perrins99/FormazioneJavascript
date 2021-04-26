function dropElements(arr, func) {
  

  /**
   * Scorro il vettore, elimino un elemento e verifico
   * che func sull'elemento successivo sia true. Se 
   * questo accade allora smetto di iterare e aggiungo 
   * al risultato il vettore restante
   * 
   */

  while(arr.length>0){
    if(func(arr[0]))
      break
    arr.shift()
    
  }

  return arr



}

dropElements([1, 2, 3], function(n) {return n < 3; });