// Write your code here
module.exports = class Class {
    constructor(num) {
        this.num = num;
        this.leader = null;
    }

    assignLeader(student) {
        this.leader = student;
    }

    isLeader(student) {
        return student === this.leader;
    }
}