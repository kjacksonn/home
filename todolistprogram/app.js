function addToDo() {
    //Step 1 : Get references to the text field and the ul
    //Step 2 : Get the user value from the text field
    //Step 3 : Create a list element and populate it with the value
    //Step 4 : appendChild to the list; adding to the ned of list


    const list = document.querySelector("ul")
    const txtInput = document.querySelector("#txtTodo")


    const todo = txtInput.value
    const listItem = document.createElement("li")
    listItem.textContent = todo


    list.appendChild(listItem)
}
