

class Person {
    constructor(firstName,lastName,dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob);    
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object
const person1 = new Person('John','Doe','4-3-1980');

const person2 = new Person('Mary','Jane','4-3-1980');

console.log(person2.getFullName())