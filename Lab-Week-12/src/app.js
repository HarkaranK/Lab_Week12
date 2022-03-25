//Part 2
 
function elementlogger() {
    const elementSelect = document.querySelector(".one")
    return elementSelect
}
console.log(elementlogger())

//Part 3
const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]
  
  const studentsScholarship = []
  
   for (const student of students) {
        let average = student.grades.reduce((x,y) => x+y,0) / student.grades.length;
      if(average >= 80){
      const ob = [{name: student.name, gradeAvg: average}]
      studentsScholarship.push(ob)
      }
    }
  
  console.log(studentsScholarship)

//Part 4

function dark_mode() {
        const darkMode = document.querySelector("div")
        return darkMode.classList.toggle("dark-theme")
      }
dark_mode()
    
