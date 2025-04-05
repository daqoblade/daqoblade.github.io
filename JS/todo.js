const todoForm = document.querySelector("#todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todo-list")

const TODOS_KEY = "todos"
let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    li.remove()
    saveTodos();
    
}

function paintTodo(newTodo) {
    todos.push(newTodo)
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text;
    const button = document.createElement("button")
    button.innerText = "🗑"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button)
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodoObj = {
        text:todoInput.value,
        id: Date.now()
    }
    todoInput.value = "";
    paintTodo(newTodoObj);
    saveTodos();
}

const savedTodos = localStorage.getItem(TODOS_KEY)

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(paintTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit)
