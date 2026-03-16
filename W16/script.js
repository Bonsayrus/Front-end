// Вам потрібно зробити конструктор сутності "Студент". Студент має ім'я, прізвище, рік народження — це 
// властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але 
// на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на 
// чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який 
// захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і 
// якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з 
// цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

function Student(name, surname, year, grades = []) {
    this.name = name;
    this.surname = surname;
    this.year = year;
    this.grades = grades;

    this.attendance = new Array(25).fill(undefined);
}

Student.prototype.getAge = function() {
    const today = new Date().getFullYear();
    return today - this.year;
};

Student.prototype.getAverageGrade = function() {
    if (this.grades.length === 0) return 0;
    let sum = 0;
    for(let i = 0; i < this.grades.length; i++){
        sum += this.grades[i];
    }
    return sum/this.grades.length;
};

Student.prototype.present = function() {
    const undefIndex = this.attendance.indexOf(undefined);
    if(undefIndex !== -1) return this.attendance[undefIndex] = true;
    else console.log('The attendance array is full!');
};

Student.prototype.absent = function() {
    const undefIndex = this.attendance.indexOf(undefined);
    if(undefIndex !== -1) return this.attendance[undefIndex] = false;
    else console.log('The attendance array is full!');
};

Student.prototype.summary = function() {
    const avgGrade = this.getAverageGrade();
    const lessons = this.attendance.filter((lesson) => lesson !== undefined);
    let attendanceCount = 0;
    lessons.forEach(lesson => {
        if(lesson === true) attendanceCount ++;
    });
    if (lessons.length === 0) return "Занять ще не було";
    const avgAttendance = attendanceCount/lessons.length;
    if(avgGrade > 90 && avgAttendance > 0.9) return "Молодець!";
    else if (avgGrade > 90 || avgAttendance > 0.9) return "Добре, але можна краще";
    else return "Страчувати!";
};

const student1 = new Student("Іван", "Іванов", 2005, [95, 100, 92, 98]);

student1.present();
student1.present();
student1.present();

console.log(`Студент: ${student1.name} ${student1.surname}, Вік: ${student1.getAge()}`);
console.log(`Середній бал: ${student1.getAverageGrade()}`);
console.log(`Вердикт: ${student1.summary()}`);

const student2 = new Student("Петро", "Петров", 2004, [99, 90, 88, 89]);

student2.present();
student2.absent();
student2.present();

console.log(`Студент: ${student2.name} ${student2.surname}, Вік: ${student2.getAge()}`);
console.log(`Середній бал: ${student2.getAverageGrade()}`);
console.log(`Вердикт: ${student2.summary()}`);

const student3 = new Student("Сергій", "Сергієнко", 2003, [70, 65, 60, 68]);

student3.absent();
student3.absent();
student3.present();

console.log(`Студент: ${student3.name} ${student3.surname}, Вік: ${student3.getAge()}`);
console.log(`Середній бал: ${student3.getAverageGrade()}`);
console.log(`Вердикт: ${student3.summary()}`);