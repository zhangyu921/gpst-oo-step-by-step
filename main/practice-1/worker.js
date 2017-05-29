const Person = require('./person');

module.exports =class Worker extends Person {
    introduce(){
        return this.basicIntroduce() + " I am a Worker. I have a job.";
    }
}