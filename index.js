document.querySelector("form").addEventListener("submit", addTodo);

function addTodo(event) {
  event.preventDefault();
  const item = document.createElement("li");
  item.innerText = document.getElementById("item").value; //.value is where text is stored

 const button = document.createElement('button');
 button.innerText = 'x';
 button.addEventListener('click', removeTodo);
 item.append(button);

item.addEventListener('click', completeTodo)

  const list = document.querySelector("ul");
  list.appendChild(item);
}
function removeTodo(event){
    event.target.parentNode.remove()
}

function completeTodo(event){
    let value = event.target.getAttribute('aria-checked')
    if (value !== 'true') {
    event.target.setAttribute('aria-checked', 'true')
    } else {
        event.target.setAttribute('aria-checked', 'false')
    }
// event.target.setAttribute('aria-checked', !(value === 'true'))
}