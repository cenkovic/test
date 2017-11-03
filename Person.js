class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

}

console.log(new Person('Pera', 'Peric').getFullName());