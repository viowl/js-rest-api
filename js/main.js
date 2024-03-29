const list = document.querySelector(".todo-list");


const getTodos = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Something went wrong");
                    }
                    
                    return response.json();
                })
}


const showDefaultError = (error) => console.error(error.message);

const renderTodos = (todos) => {
    list.innerHTML = todos.reduce((html, todo) => html + `
        <li>
            <div>${todo.title}</div>
            <div>${todo.completed ? "Done" : "In Progress"}</div>
        </li>
    `, "")
}

getTodos()
    .then(renderTodos)
    .catch(showDefaultError);

