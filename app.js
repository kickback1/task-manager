const tasks = [];

function addTask() {
    const input = document.getElementById('task-input');
    const taskText = input.value;
    if (taskText) {
        tasks.push({ id: Date.now(), text: taskText, done: false });
        input.value = '';
        displayTasks();
    }
}

function displayTasks() {
    const list = document.getElementById('task-list');
    list.innerHTML = '';
    tasks.forEach(task => {
        const div = document.createElement('div');
        div.className = 'task-item';
        div.innerHTML = `
            <input type="checkbox" onchange="toggleTask(${task.id})">
            <span class="${task.done ? 'done' : ''}">${task.text}</span>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        list.appendChild(div);
    });
}

<<<<<<< HEAD
function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    tasks.splice(index, 1);
    displayTasks();
}
=======
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    task.done = !task.done;
    displayTasks();
}
>>>>>>> feature/complete-tasks
