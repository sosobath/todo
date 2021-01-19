
const elementTODOLIST = document.getElementById("todolist");
let todo = document.getElementById("todo");

function ajoutTodo() {

    let data = {
        description: todo.value
    }
    fetch('https://soso10.pythonanywhere.com/todo', {
        method: 'POST',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(data),
    }).then(response => rafraichirHTML())
}

function deleteTodo(indice) {
    fetch('https://soso10.pythonanywhere.com/todo/' + indice, {
        method: 'DELETE'})
        .then(response => rafraichirHTML())
}

function rafraichirHTML() {
    todo.value = "";
    fetch('https://soso10.pythonanywhere.com/todo')
        .then(response => response.json())
        .then(todolist => {
            elementTODOLIST.innerHTML= "";
            for (indice in todolist) {
                let li = document.createElement("li");
                li.innerHTML = 
                "<span>" + todolist[indice].description + "</span>&nbsp;" +
                "<a class='deleteBtn' onclick='deleteTodo(" + indice + ")'>&#10006;</a>";
                elementTODOLIST.appendChild(li);
            }
        });
}

rafraichirHTML()
