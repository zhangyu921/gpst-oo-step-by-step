// Write your code here

let _id = 100000

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
    this.id = _id++
  }

  basicIntroduce () {
    return `My name is ${this.name}. I am ${this.age} years old.`
  }

  introduce () {
    return this.basicIntroduce()
  }
}

module.exports = Person
