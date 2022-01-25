const todos = document.getElementById('todos');
const btnAdd = document.getElementById('btn-add');
const todoInput = document.getElementById('todo-input')

initApp()

function initApp() {
    if (localStorage.getItem('todos') === null) {
        console.log('no todos found');
    } else {
        // console.log(localStorage.getItem('todos'))
        const todos = JSON.parse(getTodos())
        // console.log(todos.length)
        for (let i = 0; i < todos.length; i++) {
            addTodoDOM(todos[i].text)
        }
    }
}

function checkStorage() {
    if (localStorage.getItem('todos') === null) {
        return false;
    } else {
        return true;
    }
}

function setTodos(value) {
    localStorage.setItem('todos', value)
}

function getTodos() {
    return localStorage.getItem('todos')
}

function addTodoDOM(value) {
    const todoBody = document.createElement('div')
    todoBody.classList.add('todo')
    todoBody.innerHTML = `
    <label class="custom-checkbox">
        <input type="checkbox" name="">
        <span></span>
    </label>
    <p class="todo-text">${value}</p>
    `
    todos.appendChild(todoBody)
}

btnAdd.addEventListener('click', e => {
    if (todoInput.value.trim() !== '') {
        addTodoDOM(todoInput.value)
        let id = 1
        if (!checkStorage()) {
            let todo = {
                idx: id,
                text: todoInput.value,
                done: false
            }
            setTodos(JSON.stringify(todo))
        } else {
            let local = JSON.parse(getTodos())
            const array = []
            array.push(local)
            let idx = (array[0].length === null || array[0].length === undefined) ? id + 1 : id + array[0].length
            let todo = {
                idx: idx,
                text: todoInput.value,
                done: false
            }
            array.push(todo)
            setTodos(JSON.stringify(array.flat(1)))

        }
    }
    todoInput.value = ''
})