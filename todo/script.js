document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('#push');
    const taskInput = document.querySelector('#task input');
    const taskContainer = document.querySelector('#tasks');

    addButton.addEventListener('click', function() {
        if (taskInput.value.trim() === '') {
            alert("Please Enter a Task");
        } else {
            const taskText = taskInput.value;

            const taskElement = document.createElement('div');
            taskElement.classList.add('task');
            taskElement.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="delete">DEL
                    <i class="far fa-trash-alt"></i>
                </button>
            `;

            taskContainer.appendChild(taskElement);
            taskInput.value = '';
        }
    });

    taskContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete')) {
            event.target.parentNode.remove();
        }
    });
});
