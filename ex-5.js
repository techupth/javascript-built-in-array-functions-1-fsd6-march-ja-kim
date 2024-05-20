const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(acc, students) {
  // Start coding here
  return acc + students.score;
}

const AverageStudentScore =
  students.reduce(getAverageStudentScore, 0) / students.length;

console.log(AverageStudentScore); // Output: 87.5
