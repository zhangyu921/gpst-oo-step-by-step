const Person = require('./person');

module.exports = class Student extends Person {
    constructor(name, age, clazz) {
        super(name, age);
        this.clazz = clazz;
    }
    introduce() {
        return this.basicIntroduce() + " I am a Student. " + this.getClassInfo() + ".";
    }

    getClassInfo() {

        let clazzInfo = "";
        if (this.clazz.hasStudent(this)) {
            clazzInfo = "I am at Class " + this.clazz.num;
        } else {
            clazzInfo = "I haven't been allowed to join Class"
        }
        if (this.clazz.isLeader(this)) {
            clazzInfo = "I am Leader of Class " + this.clazz.num;
        }

        return clazzInfo;
    }
}