// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instructorAttr){
        super(instructorAttr)
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(studentAttr){
        super(studentAttr)
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubject = studentAttr.favSubject;
    }
    listSubjects(){
        this.favSubject.forEach((item) => { console.log(item);})
        
    }
    PRAssignments(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} had begun sprint challenge on ${subject}`)
    }
}

const fred = new Student({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    previousBackground: 'college',
    className: 'wed21',
    favSubject: ['Html', 'CSS', 'JavaScript']
  });

  fred.listSubjects();
