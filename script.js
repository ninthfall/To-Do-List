// JavaScript source code
window.onload = () => {
    const form1 = document.querySelector("#addForm");

    let items = document.getElementById("items");
    let submit = document.getElementById("submit");
    let clear = document.getElementById("clear-list");

    let editItem = null;

    form1.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);
    clear.addEventListener("click", clearList);
};

//adding item to list
function addItem(e) {
    e.preventDefault();

    if (submit.value != "Submit") {
        let itemName = editItem.target.parentNode.childNodes[0].childNodes[0].data;
        let newItemName = document.getElementById("item").value;
        editItem.target.parentNode.childNodes[0].childNodes[0].data = newItemName;
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
    editButton.className = "btn-primary btn btn-sm float-right edit";
    editButton.appendChild(document.createTextNode("Edit"));

    let checkButton = document.createElement("button");
    checkButton.className = "btn-success btn btn-sm float-right check";
    checkButton.appendChild(document.createTextNode("Check"));

    let listItem = document.createElement("span");
    listItem.style.textDecoration = "none"
    listItem.appendChild(document.createTextNode(newItem));
    

    li.appendChild(listItem);
    li.appendChild(editButton);
    li.appendChild(deletButton);
    li.appendChild(checkButton);

    items.appendChild(li);
}

//removing and ediitng list items
function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        let itemName = e.target.parentNode.childNodes[0].childNodes[0].data;
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
        document.getElementById("item").value = e.target.parentNode.childNodes[0].childNodes[0].data;
        submit.value = "EDIT";
        editItem = e;
    }

    if (e.target.classList.contains("check")) {
        let item = e.target.parentNode.childNodes[0];
        if (item.style.textDecoration == "none") {
            item.style.textDecoration = "line-through"
        } else {
            item.style.textDecoration = "none"
        }
    }
}

//toggle submit button 
function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
}

//clear entire list
function clearList(e) {
    e.preventDefault();
    if (confirm("Delete all items from list?")) {
        let list = document.getElementById("items");
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        document.getElementById("lblsuccess").innerHTML = "All items deleted from list";
        document.getElementById("lblsuccess").style.display = "block";
        setTimeout(function () {
            document.getElementById("lblsuccess").style.display = "none";
        }, 3000);
    }    
}

