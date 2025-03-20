// This file manages the task-related functionality, including adding, completing, and saving tasks.

document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

function loadTasks() {
    const currentUser = '7yo';
    const savedTasks = JSON.parse(localStorage.getItem('tasks_' + currentUser) || '{}');
    const taskList = document.getElementById('task-list');

    Object.keys(savedTasks).forEach(taskId => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.id = taskId;

        const checkbox = document.createElement('div');
        checkbox.className = 'task-checkbox';
        checkbox.onclick = () => toggleTask(taskId);
        if (savedTasks[taskId]) {
            checkbox.classList.add('checked');
            checkbox.innerHTML = '<i class="fas fa-check"></i>';
            taskItem.classList.add('completed');
        }

        const label = document.createElement('span');
        label.className = 'task-label';
        label.textContent = taskId.replace('-', ' ');

        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskList.appendChild(taskItem);
    });
}

function toggleTask(taskId) {
    const taskElement = document.getElementById(taskId);
    const checkbox = taskElement.querySelector('.task-checkbox');

    taskElement.classList.toggle('completed');
    checkbox.classList.toggle('checked');

    if (checkbox.classList.contains('checked')) {
        checkbox.innerHTML = '<i class="fas fa-check"></i>';
    } else {
        checkbox.innerHTML = '';
    }

    saveTaskState(taskId, checkbox.classList.contains('checked'));
}

function saveTaskState(taskId, isChecked) {
    const currentUser = '7yo';
    const savedTasks = JSON.parse(localStorage.getItem('tasks_' + currentUser) || '{}');
    savedTasks[taskId] = isChecked;
    localStorage.setItem('tasks_' + currentUser, JSON.stringify(savedTasks));
}