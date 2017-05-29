const Person = require('./person');

module.exports = class Student extends Person {
    constructor(name, age, clazz) {
        super(name, age);
        this.klass = clazz;
    }
    introduce() {
        return this.basicIntroduce() + " I am a Student. I am at Class " + this.klass + ".";
    }
}