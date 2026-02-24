const taskInput = document.getElementById('taskInput');
const deadlineInput = document.getElementById('deadlineInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const filterSelect = document.getElementById('filterSelect');

let tasks = [];

function addTask() {
  
  const taskText = taskInput.value.trim();
  const deadline = new Date(deadlineInput.value).toISOString();

  if (taskText !== '') {
    
    const task = {
      id: Date.now().toString(),
      text: taskText,
      deadline: deadline,
      completed: false,
    };

    tasks.push(task);
    saveTasksToLocalStorage();

    renderTasks();
    taskInput.value = '';
    deadlineInput.value = '';
  }
}