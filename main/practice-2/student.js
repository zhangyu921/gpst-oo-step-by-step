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
        if (this.clazz.isLeader(this)) {
            return "I am Leader of Class " + this.clazz.num;
        } else {
            return "I am at Class " + this.clazz.num;

        }
    }
}