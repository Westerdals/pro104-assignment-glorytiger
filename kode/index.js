function createNewTask(event) {
    //event.preventDefault();
    
    // Find an element with attribute "name" as "name". In this case <input name="name" placeholder="Product ..."
    // and retrives the .value - what the user wrote in the <input>
    const name = document.querySelector("[name='task-name']").value;
    
    // Object construction shorthand - this is the same as writing
    //const product = {
    //    name: name,
    //    price: price, ...
    //};
    // Which again could be written as:
    //const product = {};
    //product.name = name;
    // product.price = price;
    // etc.
    const task = {name};
    
    // Get the STRING item with the key "productList" from localStorage and parse (interpret) it into an object array
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    // Add the new product to the productList
    taskList.push(task);
    // "stringify" the productList back into a String and write it back to LocalStorage
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
}

function createNewMember(event) {
    //event.preventDefault();
    
    // Find an element with attribute "name" as "name". In this case <input name="name" placeholder="Product ..."
    // and retrives the .value - what the user wrote in the <input>
    const name = document.querySelector("[name='member-name']").value;
    
    // Object construction shorthand - this is the same as writing
    //const product = {
    //    name: name,
    //    price: price, ...
    //};
    // Which again could be written as:
    //const product = {};
    //product.name = name;
    // product.price = price;
    // etc.
    const member = {name};
    
    // Get the STRING item with the key "productList" from localStorage and parse (interpret) it into an object array
    const memberList = JSON.parse(window.localStorage.getItem("memberList")) || [];
    // Add the new product to the productList
    memberList.push(member);
    // "stringify" the productList back into a String and write it back to LocalStorage
    window.localStorage.setItem("memberList", JSON.stringify(memberList));
}