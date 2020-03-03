function showMembers() {
    // Returns the named entry in LocalStorage AS A STRING (text)
    const memberListInLocalStorage = window.localStorage.getItem("memberList");
    
    // Interprets ("parses") the string into OBJECTS
    let memberList = JSON.parse(memberListInLocalStorage);
    
    // If there was nothing in LocalStorage, we replace the memberList with an empty list
    if (memberList == undefined) {
        memberList = [];
    }
    
    // Finds the element "<div id='outputDiv'></div>" in the document
    // (because of "id=memberList")
    let outputDiv = document.getElementById("output-div");
    outputDiv.innerHTML = `<b>Navn:</b>`;

    for (const member of memberList) {
        // Creates a new "<div></div>" - this is currently not anywhere in the document
        const memberEl = document.createElement("div");

        // "Destructoring" - this is the same as writing
        //const id = member.id;
        //const name = member.name;
        // etc, for id, name
        const { id, name } = member;
        
        // Update the contents inside the <div></div>
        memberEl.innerHTML = `${name}<br>`;
        
        // Adds the new <div> to the "<div id='memberList'></div>"
        outputDiv.appendChild(memberEl);
    }
}