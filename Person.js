class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return "My name is: " + this.firstName + ", and my lastname is: " + this.lastName;
  }

}

console.log(new Person('Pera', 'Peric').getFullName());