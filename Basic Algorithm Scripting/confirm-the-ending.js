function confirmEnding(str, target) {

  return str.includes(target,(str.length-target.length-1));
}

confirmEnding("Bastian", "n");