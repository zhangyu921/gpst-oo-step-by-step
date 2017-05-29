// Write your code here
module.exports = class Class {
    constructor(num) {
        this.num = num;
        this.leader = null;
        this.students = [];
    }

    assignLeader(student) {
        if (this.students.includes(student)) {
            this.leader = student;
            if (this.assignedLeaderEvent) {
                this.assignedLeaderEvent(student.name + " become Leader of Class " + this.num);
            }
            return "Assign team leader successfully.";
        } else {
            return "It is not one of us.";
        }
    }

    isLeader(student) {
        return student === this.leader;
    }

    appendMember(student) {
        this
            .students
            .push(student);
        if (this.appendedMemberEvent) {
            this.appendedMemberEvent(student.name + " has joined Class " + this.num);
        }
    }

    hasStudent(student) {
        return this
            .students
            .includes(student);
    }

    subscribeAppendedMemberEvent(event) {
        this.appendedMemberEvent = event;
    }

    subscribeAssignLeaderEvent(event) {
        this.assignedLeaderEvent = event;
    }
}