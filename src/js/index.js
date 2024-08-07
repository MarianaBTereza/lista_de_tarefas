// Seleção de Elementos //
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

//Funçoes 
const saveTodo = (text) =>{
     
    const todo = document.createElement ("div")
    todo.classList.add("todo")
    const todoTitle= document.createElement("h3")
    todoTitle.innertext=text
    todo.appendChild("todoTitle")

    const doneBtn= document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML= ' <i class="fa-solid fa-check"></i>' 
    todo.appendChild(doneBtn)

    const doneBtn= document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML= ' <i class="fa-solid fa-check"></i>' 
    todo.appendChild(doneBtn)
    
    const doneBtn= document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML= ' <i class="fa-solid fa-check"></i>' 
    todo.appendChild(doneBtn)
    
    
}
//Eventos 
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = todoInput.value
    if (inputValue) {
        console.log(inputValue);

        const inputValue = todoInput.value;
        if (inputValue) {
            saveTodo(inputValue);
        }




    }
})