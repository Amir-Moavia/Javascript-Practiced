const todoArray = JSON.parse(localStorage.getItem('TodoListLocalStorage')) || [];

renderTodoList();

function addTodo() {
    const inputElement = document.querySelector('.inputtext');
    const inputDate = document.querySelector('.dateInTodo');

    const name = inputElement.value;
    const dueDate = inputDate.value;

    if (name === '' || dueDate === '') return;

    todoArray.push({
        name,
        dueDate
    });

    inputElement.value = '';
    inputDate.value = '';

    saveAndRender();
}

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoArray.length; i++) {
        const todoObject = todoArray[i];
        const { name, dueDate } = todoObject; 

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="removeBtn" onclick="
                deleteTodo(${i});
            ">Delete</button>
        `;
        todoListHTML += html;
    }
    
    document.querySelector('.todoContainer').innerHTML = todoListHTML;
}

function deleteTodo(index) {
    todoArray.splice(index, 1);
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem('TodoListLocalStorage', JSON.stringify(todoArray));
    renderTodoList();
}