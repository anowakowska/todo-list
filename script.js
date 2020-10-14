
let myList = document.getElementsByTagName("li");
let i;

document.getElementById("add-task").addEventListener('click', newListElement);
document.getElementById("add-task").addEventListener('click', clearInput);

function newListElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("input-task").value;
    let inputText = document.createTextNode(inputValue);

    li.appendChild(inputText);

    if (inputValue === '') {
        alert("You must write the task!");
     } else {
        document.getElementById("list").appendChild(li);
     }
}

function clearInput() {
    document.getElementById("input-task").value='';
}

