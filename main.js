let form = document.getElementById('addForm');
let List = document.getElementById('items');
let delBtns = document.getElementsByClassName('delete');
let filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    
    //Get input value
    let newItem = document.getElementById('itemInput').value;
    
    //Create new li element
    let li = document.createElement('li');
    li.className = 'list-group-item';
    
    //Add Text Node with input value
    li.appendChild(document.createTextNode(newItem))

    //Create delete button element

    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('Delete'));
    delBtn.addEventListener('click', delItem);

    li.appendChild(delBtn);
    List.appendChild(li);
}

//Delete event
for(let i=0; i<delBtns.length; i++){
    delBtns[i].addEventListener('click', delItem);
}

function delItem(e) {
    if(confirm('Delete Item?')){
        let li = e.target.parentElement;
        List.removeChild(li);
    }
}

//Filter event
filter.addEventListener('keyup', filterItems);

function filterItems(e) {
    //Convert lowercase
    let text = e.target.value.toLowerCase();
    let liItems = List.getElementsByTagName('li');
    Array.from(liItems).forEach(function(li) {
        let itemName = li.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    })
}