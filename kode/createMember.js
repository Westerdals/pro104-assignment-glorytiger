function createMember(event) {
    event.preventDefault();
    
    const id = memberIdCount++;

    // Find an element with attribute "name" as "name". In this case <input name="name" placeholder="Product ..."
    // and retrives the .value - what the user wrote in the <input>
    const name = document.querySelector("[name='member-name']").value;
    
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

    // Clean values from <form>
    event.target.reset();
}