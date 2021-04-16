//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");





//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions

function addTodo(event) {
    event.preventDefault();

    // Create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Create check button
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add("complete-btn");
    todoDiv.appendChild(checkButton);
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("trash-btn");
    todoDiv.appendChild(deleteButton);
   
    // Add div to the Todo container
    todoList.appendChild(todoDiv);

    // Clear todo input value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    // Delete todo
    if(item.classList[0] == "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
}








