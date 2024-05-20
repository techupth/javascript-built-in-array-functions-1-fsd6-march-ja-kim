const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(acc,curr) {
  // Start coding here
  return acc + curr.score

}

let avgScore = students.reduce(getAverageStudentScore,0); // Output: 87.5
console.log(avgScore/students.length)