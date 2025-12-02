class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        return this.marks.reduce((sum, m) => sum + m, 0) / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return "A";
        else if (avg >= 75) return "B";
        else if (avg >= 50) return "C";
        return "F";
    }
}

const s1 = new Student("Akash", [88, 92, 85]);
const s2 = new Student("Riya", [60, 70, 65]);
const s3 = new Student("Rahul", [40, 35, 50]);

console.log(s1.name, s1.getGrade());
console.log(s2.name, s2.getGrade());
console.log(s3.name, s3.getGrade());
