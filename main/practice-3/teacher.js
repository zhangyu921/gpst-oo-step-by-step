const Person = require('./person');

module.exports = class Teacher extends Person {

    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
        this.initEvent();
    }

    initEvent() {
        this
            .clazzes
            .forEach(clazz => {
                clazz.subscribeAppendedMemberEvent(notofyMsg => this.notifyStudentAppended(notofyMsg));
                clazz.subscribeAssignLeaderEvent(notofyMsg => this.notifyLeaderAssigned(notofyMsg));
            });
    }

    introduce() {
        return this.basicIntroduce() + " I am a Teacher. " + this.getClassInfo() + ".";
    }

    getClassInfo() {
        let clazzNums = [];
        let classInfo = "";
        for (let clazz of this.clazzes) {
            clazzNums.push(clazz.num);
        }
        if (clazzNums.length === 0) {
            classInfo = "I teach No Class";
        } else {
            classInfo = "I teach Class " + clazzNums.join(',');
        }
        return classInfo;
    }

    isTeaching(student) {
        return this
            .clazzes
            .some(clazz => clazz.hasStudent(student));
    }

    notifyStudentAppended(printStr) {
        console.log("I am " + this.name + ". I know " + printStr + ".");
    }

    notifyLeaderAssigned(printStr) {
        console.log("I am " + this.name + ". I know " + printStr + ".");
    }

}