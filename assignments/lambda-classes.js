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
    changeGrade(student){
        student.grade = Math.random() * 100
        console.log(`${student.name}'s new grade is ${student.grade}.`)
    }
}

class Student extends Person {
    constructor(studentAttr){
        super(studentAttr)
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubject = studentAttr.favSubject;
        this.grade = studentAttr.grade;
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
    canGraduate(){
        if(this.grade >= 70){
            console.log(`${this.name} is ready to graduate!`)
        } else{
            console.log(`${this.name} needs to go back and do more assignments!`)
        }
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }

}

const sarah = new Person({
    name: 'Sarah',
    location: 'Seattle',
    age: 20,
  });

sarah.speak()

const John = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  John.demo('html')

  const jane = new Student({
    name: 'Jane',
    location: 'Portland',
    age: 37,
    previousBackground: 'college',
    className: 'wed21',
    favSubject: ['Html', 'CSS', 'JavaScript'],
    grade: 90
  });

  John.grade(jane,'CSS')

const fred = new Student({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    previousBackground: 'college',
    className: 'wed21',
    favSubject: ['Html', 'CSS', 'JavaScript'],
    grade: 65
  });

  fred.listSubjects();
  fred.PRAssignments('React');
  fred.sprintChallenge('html');
  fred.canGraduate()
  jane.canGraduate()

  const brad = new ProjectManager({
    name: 'Brad',
    location: 'Boulder',
    age: 35,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'CS1',
    favInstructor: 'McGonagal'
  });

brad.standUp('web21');
brad.debugsCode(jane, 'javascript')
brad.changeGrade(jane)
brad.changeGrade(fred)
console.log(fred)

