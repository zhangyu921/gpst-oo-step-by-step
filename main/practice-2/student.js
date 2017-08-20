const Person = require('./person')

class Student extends Person {
  constructor (name, age, clazz) {
    super(name, age)
    this.clazz = clazz
  }

  introduce () {
    return `${this.basicIntroduce()} I am a Student.${
      this.clazz.leader && (this.clazz.leader.id === this.id)
        ? ` I am Leader of Class ${this.clazz.number}.`
        : ` I am at Class ${this.clazz.number}.`
      }`
  }
}

module.exports = Student
/*

var Class = require('./class')
var c = new Class(1)
var s = new Student('a',21,c)

console.log(s.introduce())*/
