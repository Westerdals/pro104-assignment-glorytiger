function createMember(event) {
    event.preventDefault();
    
    const id = getListLength("memberList");

    // Find an element with attribute "name" as "name". In this case <input name="name" placeholder="Product ..."
    // and retrives the .value - what the user wrote in the <input>
    const name = document.querySelector("[name='member-name']").value;
    
    // Find the element with id "task-feedback-div". This will be used to provide feedback to the user
    let feedbackDiv = document.getElementById("member-feedback-div");

    // Check if the text field is empty. If it is, write a message in the feedback div and return
    if (name === '') {
        feedbackDiv.innerHTML = "Feltet kan ikke være tomt";
        return;
    }

    // Object construction shorthand - this is the same as writing
    //const member = {
    //    id: id,
    //    name: name,
    //};
    // Which again could be written as:
    //const member = {};
    //member.id = id;
    //member.name = name;
    // etc.
    const member = {id, name};
    
    // Get the STRING item with the key "productList" from localStorage and parse (interpret) it into an object array
    const memberList = JSON.parse(window.localStorage.getItem("memberList")) || [];
    // Add the new product to the productList
    memberList.push(member);
    // "stringify" the productList back into a String and write it back to LocalStorage
    window.localStorage.setItem("memberList", JSON.stringify(memberList));
    
    // Display a feedback message to the user
    feedbackDiv.innerHTML = "Teammedlem ble lagt til";
    
    // Clean values from <form>
    event.target.reset();
}