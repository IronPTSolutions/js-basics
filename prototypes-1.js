/* Person */

function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.fullName = function () {
    return this.name + ' ' + this.lastName;
}

Person.prototype.greet = function () {
    return 'Hi! my name is ' + this.fullName();
}

var person = new Person('John', 'Doe', 30);
console.log(person);
console.log(person.greet());
console.log('person instance of Person: ', person instanceof Person);

/* Instructor */

function Teacher(name, lastName, age, hireDate) {
    Person.call(this, name, lastName, age);
    this.hireDate = hireDate;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Person.prototype.teachSomething = function () {
    return '2 + 2 = 4'
}

Teacher.prototype.greet = function () {
    return Person.prototype.greet.call(this) + ' and I\'m a teacher';
}

var teacher = new Teacher('Carlos', 'del Prado', 27, new Date('2018-01-01'));
console.log(teacher);
console.log(teacher.greet());
console.log('teacher instance of Person: ', teacher instanceof Person);
console.log('teacher instance of Teacher: ', teacher instanceof Teacher);
console.log(teacher.teachSomething());


/* Student */

function Student(name, lastName, age, notes) {
    Person.call(this, name, lastName, age);
    this.notes = notes;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greet = function () {
    return Person.prototype.greet.call(this) + ' and I\'m a student';
}

Student.prototype.avg = function () {
    return this.notes.reduce(function (acc, note, index, notes) {
        acc = acc + note;
        if (index === notes.length - 1) {
            acc = acc / notes.length
        }
        return acc;
    }, 0);
}

var student = new Student('María', 'Pérez', 25, [7, 9, 10]);
console.log(student);
console.log(student.greet());
console.log('student instance of Person: ', teacher instanceof Person);
console.log('student instance of Teacher: ', teacher instanceof Teacher);
console.log('student instance of Student: ', teacher instanceof Student);
console.log(student.avg());