var numbers = [2, 3, 7, 4, 20, 1, 2, 7];
var cities = ['miami', 'barcelona', 'madrid', 'berlin', 'paris'];
var students = [
    {
        name: "Tony Parker",
        firstProject: 80,
        secondProject: 75,
        finalExam: 90,
        age: 25,
        skills: ['C', 'Java', 'JavaScript']
    },
    {
        name: "Marc Barchini",
        firstProject: 84,
        secondProject: 65,
        finalExam: 65,
        age: 30,
        skills: ['Swift', 'JavaScript']
    },
    {
        name: "Claudia Lopez",
        firstProject: 45,
        secondProject: 95,
        finalExam: 99,
        age: 49,
        skills: ['Java', 'Pearl']
    },
    {
        name: "Alvaro Briattore",
        firstProject: 82,
        secondProject: 92,
        finalExam: 70,
        age: 24,
        skills: ['JavaScript', 'PHP']
    },
    {
        name: "Isabel Ortega",
        firstProject: 90,
        secondProject: 32,
        finalExam: 85,
        age: 21,
        skills: ['Lua', 'Python']
    },
    {
        name: "Francisco Martinez",
        firstProject: 90,
        secondProject: 55,
        finalExam: 78,
        age: 45,
        skills: ['C++', 'Python']
    },
    {
        name: "Jorge Carrillo",
        firstProject: 83,
        secondProject: 77,
        finalExam: 90,
        age: 32,
        skills: ['C#', 'C++', 'C']
    },
    {
        name: "Miguel López",
        firstProject: 80,
        secondProject: 75,
        finalExam: 75,
        age: 31,
        skills: ['Scala', 'Java']
    },
    {
        name: "Carolina Perez",
        firstProject: 85,
        secondProject: 72,
        finalExam: 67,
        age: 27,
        skills: ['Scala', 'Java', 'JavaScript']
    },
    {
        name: "Ruben Pardo",
        firstProject: 89,
        secondProject: 72,
        finalExam: 65,
        age: 28,
        skills: ['C#', 'JavaScript']
    }
]

/* MAP */

// New array with each number element multiplied by 2
var numbersMul2 = numbers.map(function(number) {
    return number * 2;
});
console.log('Numbers Mul 2:', numbersMul2);

// New array with each city to upper case
var citiesToUpper = cities.map(function(city) {
    return city.toUpperCase();
});
console.log('Cities to upper:', citiesToUpper);

// New array with each city to capitalize
var citiesToCapitalize = cities.map(function(city) {
    return city.charAt(0).toUpperCase() + city.substr(1, city.length);
});
console.log('Cities to capitalize:', citiesToCapitalize);

// New array with only students names
var studentsName = students.map(function(student) {
    return student.name;
});
console.log('Student names:', studentsName);

// New array with objects with the name and last name
var studentsNameLastName = students.map(function(student) {
    var fullName = student.name.split(' ');
    return {
        name: fullName[0],
        lastName: fullName[1]
    }
});
console.log('Students with  names & last name: ', studentsNameLastName);

// New array with objects with the student name and the final grade
var studentsGrades = students.map(function(student) {
    var projectsAvg = (student.firstProject + student.secondProject) / 2;
    var finalGrade = student.finalExam * 0.6 + projectsAvg * 0.4;
    return {
        name: student.name,
        finalGrade: Number(finalGrade.toFixed(2))
    }
});
console.log(studentsGrades);


/* REDUCE */

// Sum all numbers
var sumOfNumbers = numbers.reduce(function(sum, number) {
    return sum += number
}, 0);
console.log('Sum of numbers:', sumOfNumbers);

// Camelcasefy all cities
var camelCasefiedCities = cities.reduce(function(word, city, index) {
    if (index === 0) {
        return word += city.charAt(0).toLocaleLowerCase() + city.substr(1, city.length);
    } else {
        return word += city.charAt(0).toUpperCase() + city.substr(1, city.length);
    }
}, '');
console.log('Camelcasefied cities: ', camelCasefiedCities);

// Sum of students ages
var sumOfStudentsAges = students.reduce(function(age, student) {
    return age + student.age;
}, 0);
console.log('Sum of students ages: ', sumOfStudentsAges);

// Average of students ages
var avgOfStudentsAges = students.reduce(function(age, student, index, students) {
    if (index < students.length - 1) {
        return age + student.age;
    } else {
        return age / students.length;
    }
}, 0);
console.log('Avg of students ages: ', avgOfStudentsAges);


/* FILTER */

// Filter of evens numbers
var evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log('Even numbers: ', evenNumbers);

// Students older than 30 years
var studentsOlderThan30 = students.filter(function(student) {
    return student.age > 30;
});
console.log('Students older than 30: ', studentsOlderThan30);

// Name of Students older than 30 years
var studentsOlderThan30Names = students.filter(function(student) {
    return student.age > 30;
}).map(function(student) {
    return student.name;
});
console.log('Name of students older than 30: ', studentsOlderThan30Names);

// Students with JavaScript skill
var studentsWithJavaScriptSkill = students.filter(function(student) {
    return student.skills.indexOf('JavaScript') !== -1;
});
console.log('Name with JavaScript skill: ', studentsWithJavaScriptSkill);

// Students with Java skill & older than 30 years
var studentsOlderThan30AndJ = students.filter(function(student) {
    return student.age > 30 && student.skills.indexOf('Java') !== -1;
});
console.log('Name with Java skill and older tah 30: ', studentsOlderThan30AndJ);


/* SORT */

// Ascending sorted numbers
var ascendingNumbers = numbers.sort(function(number1, number2) {
    return number1 - number2;
});
console.log('Ascending numbers: ', ascendingNumbers);

// Descending sorted numbers
var descendingNumbers = numbers.sort(function(number1, number2) {
    return number2 - number1;
});
console.log('Descending numbers: ', descendingNumbers);

// Alphabetical student names
var alphabeticalStudentsNames = students.sort(function(student1, student2) {
    return student1.name.localeCompare(student2.name);
});
console.log('Alphabetical students: ', alphabeticalStudentsNames);

// Sort students by final grade
var studentsByFinalGrade = students.sort(function(student1, student2) {
    var student1FinalGrade = student1.finalExam * 0.6 + ((student1.firstProject + student1.secondProject) / 2) * 0.4;
    var student2FinalGrade = student2.finalExam * 0.6 + ((student2.firstProject + student2.secondProject) / 2) * 0.4;
    return student2FinalGrade - student1FinalGrade;
});
console.log('Students by final grade: ', studentsByFinalGrade);


// Sort by more skills number
var studentsByMoreSillsNumber = students.sort(function(student1, student2) {
    if (student1.skills.length > student2.skills.length) {
        return 1;
    } else if (student1.skills.length > student2.skills.length) {
        return -1;
    } else {
        return 0;
    }
});
console.log('Students by more skills number: ', studentsByMoreSillsNumber);


/* SLICE */

// List 3 first students
var students3Limit = students.slice(0, 3)
console.log('3 first students: ', students3Limit)


/* SPLICE */

// Delete Barcelona city
cities.splice(cities.indexOf('barcelona'), 1)
console.log('Cities without Barcelona: ', cities)

// Delete 3 first students
students.splice(0, 3)
console.log('Students: ', students)
