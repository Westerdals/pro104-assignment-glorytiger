function createTask(event) {
    event.preventDefault();
    
    const id = memberIdCount++;

    // Find an element with attribute "name" as "name". In this case <input name="name" placeholder="Product ..."
    // and retrives the .value - what the user wrote in the <input>
    const name = document.querySelector("[name='task-name']").value;

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
    
    // Clean values from <form>
    event.target.reset();
}