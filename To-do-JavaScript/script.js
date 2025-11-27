// Selecting the input field where the user types the todo item
const item = document.querySelector("#item");

// Selecting the container (ul/ol) where todo items will be added
const toDoBox = document.querySelector("#to-do-box");

// Adding "keyup" event listener to the input field
// This triggers every time a key is released while typing
item.addEventListener("keyup", function(event) {
    
    // Checking if the pressed key is "Enter" AND input is not empty
    if (event.key == "Enter" && this.value.trim() !== "") {

        // Call the addToDo function and pass the input value
        addToDo(this.value);

        // Clear the input field after adding the item
        this.value = "";
    }
});


// Function to add a new todo item to the list
const addToDo = (item) => {

    // Creating a new <li> element dynamically
    const listItem = document.createElement("li");

    // Adding the text and a delete (X) icon inside the <li>
    listItem.innerHTML = `
        ${item}
        <i class="fas fa-times"></i>
    `;

    // Add click event to the list item itself
    // This will toggle the "done" class for marking as completed
    listItem.addEventListener("click", function() {
        this.classList.toggle("done");
    });

    // Selecting the delete icon inside the current list item
    // and adding a click event to remove the item
    listItem.querySelector("i").addEventListener("click", function() {
        listItem.remove(); // remove the selected todo item
    });

    // Finally append the created listItem into the todo box (ul/ol)
    toDoBox.appendChild(listItem);
};
