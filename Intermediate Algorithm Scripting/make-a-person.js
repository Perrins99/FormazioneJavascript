var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  
  var fullName = firstAndLast;
  var firstName = firstAndLast.split(" ")[0]
  var lastName = firstAndLast.split(" ")[1]

  this.getFullName = function() {
    return fullName;
  }

  this.getFirstName = function() {
    return firstName;
  }
  
  this.getLastName = function() {
    return lastName;
  }

  this.setFirstName = function(first){
    firstName = first
    fullName = firstName + " " + lastName
  }
  
  this.setLastName = function(last){
    lastName=last
    fullName = firstName + " " + lastName
  }
  this.setFullName= function(firstAndLast){
    fullName=firstAndLast
    firstName = fullName.split(" ")[0]
    lastName = fullName.split(" ")[1]
  }

};

var bob = new Person('Bob Ross');
bob.getFullName();