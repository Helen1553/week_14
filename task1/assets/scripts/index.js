// Создаем пустой массив и заполняем его случайными оценками от 1 до 100 для 12 студентов, используя циклы
// let grades = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1);
let grades = [];
for (let i = 0; i < 12; i++) {
    grades.push(Math.floor(Math.random()*100))
}
console.log(grades)

// Рассчитываем и выводим средний балл студентов через функцию-коллбек
let averageGrade = grades.reduce((sum, grade) => {return sum + grade;}, 0) / grades.length;
console.log(`Средний балл студентов: ${averageGrade.toFixed(2)}`);

// Находим и выводим максимальный балл среди студентов
let maxGrade = Math.max(...grades);
console.log(`Максимальный балл: ${maxGrade}`);

// Находим и выводим минимальный балл среди студентов
let minGrade = Math.min(...grades);
console.log(`Минимальный балл: ${minGrade}`);

// Считаем и выводим количество студентов с положительными оценками (балл >= 60)
let passingGrades = grades.filter(grade => grade >= 60);
console.log(`Количество студентов с положительными оценками: ${passingGrades.length}`);

// Считаем количество оставшихся оценок (в данном случае это количество студентов с положительными оценками)
console.log(`Количество оставшихся оценок: ${passingGrades.length}`);

// Считаем и выводим количество студентов с отрицательными оценками (балл < 60)
let failingGrades = grades.filter(grade => grade < 60);
console.log(`Количество студентов с отрицательными оценками: ${failingGrades.length}`);

// Преобразуем числовые оценки в формат буквенных оценок
let letterGrades = grades.map(grade => {
    if (grade >= 80) return 'A';
    else if (grade >= 60) return 'B';
    else if (grade >= 40) return 'C';
    else if (grade >= 20) return 'D';
    else return 'E';
});
// Выводим буквенные оценки
console.log(`Буквенные оценки: ${letterGrades.join(', ')}`);
