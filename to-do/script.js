//this code is not workking properly yet

const tasks = [];

function addTask() {
  const inputElement = document.querySelector('.task');
  const inputValue = inputElement.value;  

  const deadlineInput = document.querySelector('.deadline');
  const deadlineValue = deadlineInput.value; 

  if (inputValue && deadlineValue) {

    tasks.push({
      inputValue, 
      deadlineValue
    });

    inputElement.value = '';
    deadlineInput.value = '';

    renderTodoList();
  }
}

function renderTodoList() {
  let todoListHTML = '';


  tasks.forEach((taskObject, index) => {
    const { inputValue, deadlineValue } = taskObject;
    const html = `
      <div class="task-item">
        <div>${inputValue}</div>
        <div>${deadlineValue}</div>
        <button class="delete-todo-button" data-index="${index}">Delete</button>
      </div>
    `;
    todoListHTML += html;
  });


  document.querySelector('.todo-grid').innerHTML = todoListHTML;
}

document.querySelector('.todo-grid').addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-todo-button')) {
    const index = event.target.dataset.index; 
    tasks.splice(index); 
    renderTodoList();  
  }
});

document.querySelector('.add-task').addEventListener('click', () => {
  addTask();
});
