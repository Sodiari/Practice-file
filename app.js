// UI vars
const form = document.querySelector('#tasks-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all eventlsteners 
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
    // add task event 
    form.addEventListener('submit',addTask);
}
// Add Task 
function addTask(event){
    if (taskInput.value === '') {
        alert ('Add a task');

    }
    // Create li element 
    const li = document.createElement('li');
    // Add class 
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // new link 
    const link = document.createElement('a');
    //add class to link 
    link.className = 'delete-item secondary-content';
    // add icon 
    link.innerHTML = '< i class ="fa fa-remove"></i> ';
    // append link to li
    li.appendChild(link);
    // append li to the ul
    tasklist.appendChild(li);
    // clear input
    taskInput.value = '';


    e.preventDefault();
}











