const Person = require('./person');

module.exports = class Teacher extends Person {

    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
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
}