class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    fullName = Person.firstname + ' ' + Person.lastname;
  }

}

console.log(new Person('Pera', 'Peric').getFullName());