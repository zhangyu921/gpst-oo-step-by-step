// Write your code here
const Observer = require('./Observer')

class Class {
  constructor (number) {
    this.number = number
    this.leader = undefined
    this.member = new Set()
    this.observer = new Observer()
  }

  appendMember (student) {
    this.member.add(student)
    this.observer.fire('appendMember', student)
  }

  assignLeader (student) {
    if (this.member.has(student)) {
      this.leader = student
      this.observer.fire('assignLeader', student)
      return 'Assign team leader successfully.'
    } else {
      return 'It is not one of us.'
    }
  }

  hasStudent (student) {
    return this.member.has(student)
  }

}

module.exports = Class