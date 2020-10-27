
let myList = document.getElementsByTagName('li');
let i;

document.getElementById('add-task').addEventListener('click', newListElement);
document.getElementById('add-task').addEventListener('click', clearInput);

function newListElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('input-task').value;
    let inputText = document.createTextNode(inputValue);

    li.appendChild(inputText);

    if (inputValue === '') {
        alert('You must write the task!');
     } else {
        document.getElementById('list').appendChild(li);
     }
}

function clearInput() {
    document.getElementById('input-task').value='';
}

function checkLineThrough() {
    if (checkbox.checked == true) {
        task.style.textDecoration = 'line-through';
    } else {
        task.style.textDecoration = 'none';

    }
}

let checkbox = document.getElementsByClassName('box');
let task = document.getElementsByClassName('list-task');

let taskList = document.querySelectorAll('.list-task');
for (let i = 0; i < taskList.length; i++) {
    taskList[i].addEventListener('click', checkLineThrough);
} 
