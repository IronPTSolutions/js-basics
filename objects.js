var company = {
    name: "Iron Soft S.L",
    description: "Mobile & Web applications development.",
    since: 2008,
    contact: {
        country: "Spain",
        city: "Madrid",
        address: "C/ Pablo Iglesias, 85",
        zipcode: 28035,
        email: "ironsoft@example.org"
    },
    employees: [
        {
            name: "Malva",
            lastName: "Gil Ruiz",
            age: 53,
            position: "CTO",
            skills: [
                "Java8",
                "HTML+CSS",
                "Spring"
            ],
            fullName: function() {
                return this.name + " " + this.lastName;
            }
        },
        {
            name: "Cole",
            lastName: "F. Grissom",
            age: 25,
            position: "Developer",
            skills: [
                "Java8",
                "Spring"
            ],
            fullName: function () {
                return this.name + " " + this.lastName;
            }
        },
        {
            name: "Pedro",
            lastName: "García",
            age: 32,
            position: "Developer",
            skills: [
                "Android",
                "Swift",
                "JavaScript",
                "HTML+CSS"
            ],
            fullName: function () {
                return this.name + " " + this.lastName;
            }
        }
    ],
    getContactInfo: function () {
        return this.contact.address + ", " +
            this.contact.zipcode + ". " +
            this.contact.city + ", " + this.contact.country +
            ".";
    },
    addEmployee: function(employee) {
        this.employees.push(employee);
    }
}

console.log("Name: ", company.name);
console.log("Description: ", company.description);
console.log("Contact information: ", company.getContactInfo());

console.log("Employees: ");
company.employees.forEach(function(employee) {
    console.log("\t- " + employee.fullName() + " - " + employee.position);
})