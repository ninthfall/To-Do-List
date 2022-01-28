// JavaScript source code
window.onload = () => {
    const form1 = document.querySelector("#addForm");

    let items = document.getElementById("items");
    let submit = document.getElementById("submit");

    let editItem = null;

    form1.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);
};

//adding item to list
function addItem(e) {
    e.preventDefault();

    if (submit.value != "Submit") {
        let itemName = editItem.target.parentNode.childNodes[0].data;
        let newItemName = document.getElementById("item").value;
        editItem.target.parentNode.childNodes[0].data = newItemName;
        submit.value = "Submit";
        document.getElementById("item").value = "";
        document.getElementById("lblsuccess").innerHTML = `${itemName} successfully changed to ${newItemName}`;
        document.getElementById("lblsuccess").style.display = "block";
        setTimeout(function () {
            document.getElementById("lblsuccess").style.display = "none";
        }, 3000);
        return false;
    }

    let newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null) {
        return false;
    } else {
        document.getElementById("item").value = "";
    }

    let li = document.createElement("li");
    li.className = "list-group-item";

    let deletButton = document.createElement("button");
    deletButton.className = "btn-danger btn btn-sm float-right delete";
    deletButton.appendChild(document.createTextNode("Delete"));

    let editButton = document.createElement("button");
    editButton.className = "btn-success btn btn-sm float-right edit";
    editButton.appendChild(document.createTextNode("Edit"));

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deletButton);
    li.appendChild(editButton);

    items.appendChild(li);
}

//removing and ediitng list items
function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        let itemName = e.target.parentNode.childNodes[0].data;
        if (confirm(`Delete ${itemName} from list?`)) {
            let li = e.target.parentNode;
            items.removeChild(li);
            document.getElementById("lblsuccess").innerHTML = `${itemName} deleted successfully`;
            document.getElementById("lblsuccess").style.display = "block";
            setTimeout(function () {
                document.getElementById("lblsuccess").style.display = "none";
            }, 3000);
        }
    }
    if (e.target.classList.contains("edit")) {
        document.getElementById("item").value = e.target.parentNode.childNodes[0].data;
        submit.value = "EDIT";
        editItem = e;
    }
}

//toggle submit button 
function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
}