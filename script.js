function addTask(){

    
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();


    if (taskText === "") return;

    let taskList = document.getElementById('taskList');

    let li = document.createElement("li");
    li.textContent = taskText;

    // Klikom na zadatak oznacava se kao zavrsen

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Dugme za brisanje zadatka
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };


    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";

}