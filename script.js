students = [
  {
    name: 'Bruno',
    firstGrade: 8.5,
    secondGrade: 9.8,
  },
  {
    name: 'Doug',
    firstGrade: 7,
    secondGrade: 7,
  },
  {
    name: 'Arthur',
    firstGrade: 4.5,
    secondGrade: 8,
  },
  {
    name: 'Roberto',
    firstGrade: 8.5,
    secondGrade: 7,
  },
]

function calcAverage(firstGrade, secondGrade){
  return average = (firstGrade + secondGrade) / 2
}

for ( let student of students){
  let average = calcAverage(student.firstGrade, student.secondGrade)
  if (average >= 7){
    msg = 'Você foi aprovado.'
  } else {
    msg = 'Você não foi aprovado.'
  }
  alert(`${student.name}, sua média foi de: ${average}. ${msg}`)
}