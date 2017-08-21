const Person = require('./person')

class Student extends Person {
  constructor (name, age, clazz) {
    super(name, age)
    this.clazz = clazz
  }

  introduce () {
    return `${this.basicIntroduce()} I am a Student.${
      this.clazz.hasStudent(this)
        ? this.clazz.leader && (this.clazz.leader.id === this.id)
        ? ` I am Leader of Class ${this.clazz.number}.`
        : ` I am at Class ${this.clazz.number}.`
        : ' I haven\'t been allowed to join Class.'
      }`
  }
}

module.exports = Student
