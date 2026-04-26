class Student {
  constructor(id, name, course, marks) {
    this.id = id;
    this.name = name;
    this.course = course;
    this.marks = marks;
  }
  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Course: ${this.course}, Marks: ${this.marks}`;
  }
}

const students = [
  new Student(1, "Helal", "IP", 90),
  new Student(2, "Partho", "Data Structure", 42),
  new Student(3, "Ridwan", "Algorithm", 67),
  new Student(4, "Marowa", "OOP", 92),
  new Student(5, "Salman", "Java", 78),
  new Student(6, "Faravi", "IP", 70),
];

//Map
const studentNames = students.map((student) => student.name);
console.log("Student Names: ", studentNames);

//Filter
const Marks_upper_seventy = students.filter((student) => student.marks > 70);
console.log("\nStudents Mark above 70");
Marks_upper_seventy.forEach((student) => {
  console.log(student.getDetails());
});

//All Student Details
console.log("\nAll Student Info: ");
students.forEach((student) => {
  console.log(student.getDetails());
});
