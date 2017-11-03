class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    console.log("TEST");
  }

}

console.log(new Person('Pera', 'Peric').getFullName());