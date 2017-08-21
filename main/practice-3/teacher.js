const Person = require('./person')

class Teacher extends Person {
  constructor (name, age, clazzes) {
    super(name, age)
    this.clazzes = clazzes || []
    if (this.clazzes.length !== 0) {
      this.clazzes.forEach(clazz => {
        clazz.observer.regist('assignLeader', student => {
          this.notifyLeaderAssigned(
            `${student.name} become Leader of Class ${student.clazz.number}`
          )
        })
        clazz.observer.regist('appendMember', student => {
          this.notifyStudentAppended(
            `${student.name} has joined Class ${student.clazz.number}`
          )
        })
      })
    }
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

  isTeaching (student) {
    if (this.clazzes.length === 0) {return false}
    for (let clazz of this.clazzes) {
      if (clazz.hasStudent(student)) {return true}
    }
    return false
  }

  notifyLeaderAssigned (str) {
    return `I am ${this.name}. I know ${str}.`
  }

  notifyStudentAppended (str) {
    return `I am ${this.name}. I know ${str}.`
  }
}

module.exports = Teacher