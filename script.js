function addListItem() {
    var listItem = document.createElement("li");
    var todo = document.createTextNode(document.getElementById("todos").value);
    listItem.appendChild(todo);
    document.getElementById("list").appendChild(listItem);t
}
