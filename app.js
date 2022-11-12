// SELECTEURS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// ECOUTEURS
todoButton.addEventListener('click', addTodo)

// FONCTIONS
function addTodo(e) {
    e.preventDefault();
    // create todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // create le li
    const newTodo = document.createElement('li')
    newTodo.innerText = "hey"
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    // Button check
    const completeButton = document.createElement('button')
    let completeButtonText = '<i class="fa-solid fa-check"></i>'
    completeButton.insertAdjacentHTML('afterbegin', completeButtonText)
    completeButton.classList.add('complete-btn')    
    todoDiv.appendChild(completeButton)

    // Button delete
    const deleteButton = document.createElement('button')
    let deleteButtonText='<i class="fa-solid fa-trash"></i>'
    deleteButton.insertAdjacentHTML('afterbegin', deleteButtonText)
    deleteButton.classList.add('delete-btn')    
    todoDiv.appendChild(deleteButton)

    // Ajouter la div dans la todoList
    todoList.appendChild(todoDiv)
}