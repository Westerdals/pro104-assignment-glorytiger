function createTask(event) {
    event.preventDefault();
    
    clearFeedbacks();

    // Find an element with attribute "name" as "name". In this case <input name="name" placeholder="Product ..."
    // and retrives the .value - what the user wrote in the <input>
    const name = document.querySelector("[name='task-name-in']").value;
    
    // Check if the text field is empty. If it is, write a message in the feedback div and return
    const feedbackDiv1 = document.getElementById("task-name-feedback-div");
    if (name === '') {
        feedbackDiv1.innerHTML = "Feltet kan ikke være tomt";
        return;
    }

    // Get the number of element stored in "taskList" in localStorage. 
    const id = getUniqueListId("taskList");

    const memberId = -1;
    
    // Object construction shorthand - this is the same as writing
    //const product = {
    //    id: id,
    //    name: name, ...
    //};
    // Which again could be written as:
    //const task = {};
    //task.id = id;
    //task.name = name;
    // etc.
    const task = {id, name, memberId};
    
    // Get the STRING item with the key "productList" from localStorage and parse (interpret) it into an object array
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    // Add the new product to the productList
    taskList.push(task);
    // "stringify" the productList back into a String and write it back to LocalStorage
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
    
    // Display a feedback message to the user
    const feedbackDiv2 = document.getElementById("task-submit-feedback-div");
    feedbackDiv2.innerHTML = "Oppgave ble lagt til";
    
    populateTasksDropdown();
    
    // Clean values from <form>
    event.target.reset();
}