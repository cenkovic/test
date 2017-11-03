class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    console.log(this.firstName, this.lastName)
  }

}

console.log(new Person('Pera', 'Peric').getFullName());