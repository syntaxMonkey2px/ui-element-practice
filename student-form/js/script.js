document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code here
  // This code will be executed only after the HTML content is fully loaded

  // Define array of student objects
  let classStudents = [
    {id:1, name: 'Johnny', age: 17, score: 87},
    {id:2, name: 'Ashley', age: 17, score: 62},
    {id:3, name: 'Leah', age: 18, score: 73},
    {id:4, name: 'Daphne', age: 17, score: 58},
    {id:5, name: 'Carlos', age: 16, score: 57},
    {id:6, name: 'Matt', age: 14, score: 91},
    {id:7, name: 'Chris', age: 19, score: 35},
    {id:8, name: 'Xavier', age: 20, score: 77},
    {id:9, name: 'Marlyn', age: 17, score: 76}
  ];

  // Function to display student data in the table
  function displayStudents() {
    let table = document.getElementById("studentTable");
    let tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    for(let i=0; i < classStudents.length; i++) {
      let row = tbody.insertRow();
      let nameCell = row.insertCell(0);
      let ageCell = row.insertCell(1);
      let scoreCell = row.insertCell(2);

      nameCell.textContent = classStudents[i].name;
      ageCell.textContent = classStudents[i].age;
      scoreCell.textContent = classStudents[i].score;
    }
  }

  // Call the function to display initial student data
  displayStudents();

  // Calculate average score and display students with scores above average
  let count = classStudents.length;
  let sum = 0;

  for(let i=0; i < classStudents.length; i++) {
    sum += classStudents[i].score;
  }

  let averageScore =  sum / count;

  console.log("Class Average Score: " + averageScore.toFixed(2));

  console.log("| Pass |");
  for(let i=0; i < classStudents.length; i++) {
    if(classStudents[i].score > averageScore) {
      console.log(classStudents[i].name);
    }
  }
});
