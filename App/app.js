const todo_input = document.getElementById('todoInput');
const add_todos = document.querySelector('.addTodos');
const todo_list = document.querySelector('.todoList');
var todoValue;

add_todos.addEventListener("click", () => {
    todoValue = todo_input.value;
    todo_input.value = "";

    var todo = document.createElement("div");
    todo.className = "todos";

    var todoText = document.createElement("p");
    todoText.className = "todoText";
    todoText.innerHTML = todoValue;

    var todoCompleteDelete = document.createElement("div");
    todoCompleteDelete.className = "todoCompleteDelete";

    var todoComplete = document.createElement("div");
    todoComplete.className = "todoComplete";
    todoComplete.innerHTML = "Complete";

    var todoDelete = document.createElement("div");
    todoDelete.className = "todoDelete";
    todoDelete.innerHTML = "Delete";

    todoCompleteDelete.appendChild(todoComplete);
    todoCompleteDelete.appendChild(todoDelete);


    todo.appendChild(todoText);
    todo.appendChild(todoCompleteDelete);
    todo_list.appendChild(todo);


});

todo_list.addEventListener("click", (e) => {
    const target = e.target;

    if(target.classList[0] == 'todoComplete')
    {
        const todo = target.parentElement.parentElement;
        todo.childNodes[0].classList.toggle("completeClick");

    }
})




