class Person {
 constructor(name, age) {
  this.name = name
  this.age = age
 }

 sayHello() {
    return `Hello my name is ${this.name}`
 }

 visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`
 }

 switchVisit(otherPerson) {
    return otherPerson.visit(this)
 }
 update(obj) {
    if (typeof obj !== 'object') {
        throw new TypeError('argument must be an object')
    }
    this.name = obj.name
    this.age = obj.age
 }
}

module.exports = Person;
