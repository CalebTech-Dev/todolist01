
arrayStore = [{name: 'wash clocthes', dueDate: '2024-04-27'}];
renderTodo();

function renderTodo(){
  let totalTodo = '';

  arrayStore.forEach(function(todoObject, i){
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
      <button onclick="
      arrayStore.splice(${i},1);
      renderTodo();
      " class="delete-btn">Delete</button>
      `;
    totalTodo += html;
  });
  document.querySelector('.js-render-todo').innerHTML = totalTodo;
}


function addTodo(){
  const inputElement = document.querySelector('.js-todo-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-duedate');
  const dueDate = dateInputElement.value;
  arrayStore.push({
    name,
    dueDate
  });
  inputElement.value = '';
  renderTodo();
}