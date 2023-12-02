// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const taskText = taskInput.value.trim();

//     if (taskText !== '') {
//       const taskList = document.getElementById('taskList');

//       // Create list item
//       const listItem = document.createElement('li');
//       listItem.textContent = taskText;

//       // Create delete button
//       const deleteButton = document.createElement('button');
//       deleteButton.textContent = 'DELETE';
//       deleteButton.onclick = function() {
//         taskList.removeChild(listItem);
//       };

//       // Append delete button to list item
//       listItem.appendChild(deleteButton);

//       // Add the new task to the list
//       taskList.appendChild(listItem);

//       // Clear the input field
//       taskInput.value = '';
//     } else {
//       alert('Please enter a task!');
//     }
//   }

// function addTask() {
//     const taskInput = document.getElementById("taskInput");
//     const taskText = taskInput.value.trim();   //Here we have used third variable to store the value of taskInput which is taskText

//     if (taskText !== '') {
//         const taskList = document.getElementById("taskList");  // in this we'll add Ul list

//         // creating  list item
//         const listItem = document.createElement("li");  //then create new list item (li) to hold the value
//         listItem.textContent = taskText;

//         // creating a Neww Delete button using function
//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete"// (Delete) ye jab hum button ko click karenge to delete printhojag
//         deleteButton.style.padding=".5rem";
//         deleteButton.style.margin=".5rem";
//         deleteButton.onclick = function() {
//             taskList.removeChild(listItem);
//         }

//        // Append delete button to list item
//        listItem.appendChild(deleteButton);

//        // adding new task to the list
//        taskList.appendChild(listItem);

//      //  it's for clearing the input field
//         taskInput.value = '';

//     }else{
//         alert("Please Enter a Task!");
//     }
// }

function AddTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.padding = ".5rem";
    deleteButton.style.margin = ".5rem";
    
    // -----------its a  function
    deleteButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = "";
  } else {
    alert("Please Enter a Tassk");
  }
}
