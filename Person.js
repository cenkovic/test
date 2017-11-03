class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    //@TODO Missing implementation
    console.log('Get full name');
  }

}

console.log(new Person('Pera', 'Peric').getFullName());