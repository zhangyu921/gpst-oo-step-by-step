const Person = require('./person')

class Teacher extends Person {
  constructor (name, age, clazzes) {
    super(name, age)
    this.clazzes = clazzes || []
  }

  introduce () {
    return `${this.basicIntroduce()} I am a Teacher. I teach ${
      (() => {
        if (this.clazzes.length === 0) {return 'No Class'}
        const classNumArr = this.clazzes.map(item => item.number)
        return 'Class ' + classNumArr.join(',')
      })()
      }.`
  }
}

module.exports = Teacher