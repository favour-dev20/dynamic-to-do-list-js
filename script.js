// Run code after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    /**
     * addTask
     * - Reads the input value, validates it, creates a list item with a remove button,
     *   appends to the task list, and clears the input.
     */
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // If empty, prompt the user and do nothing else
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Create a new li element and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for this task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Assign an onclick event to remove the li element from taskList
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the remove button to the li, then append li to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = '';
    }

    // Attach event listener to addButton to call addTask on click
    addButton.addEventListener('click', addTask);

    // Allow pressing Enter in the input to add the task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optionally invoke addTask on load only if there's pre-filled text (avoids an empty-alert)
    if (taskInput.value.trim() !== '') {
        addTask();
    }
});
