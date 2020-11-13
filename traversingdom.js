//TRAVERSING THE DOM//
let itemList = document.querySelector('#items')

//ParentNode
// parentNode = itemList.parentNode;
// parentNode.style.backgroundColor = 'white'
// console.log(parentNode);

//ParentElement, interchangeable
// parentElement = itemList.parentElement;
// parentElement.style.backgroundColor = 'white'
// console.log(parentNode);

//ChildNode, pain in the ass because line breaks 
// are considered a member of NodeList. Use children instead
// console.log(itemList.childNodes)
// console.log(itemList.children)
// itemList.children[1].style.backgroundColor = 'pink'

//FirstChild (pain), FirstElementChild
// console.log(itemList.firstChild)
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.style.color = 'red'

//LastChild (pain), LastElementChild
// console.log(itemList.lastChild)
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.style.color = 'blue'

//NextSibling (pain), NextElementSibling
// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling)
// itemList.nextElementSibling.style.color = 'pink'

//PreviousSibling (pain), PreviousElementSibling
// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'pink'

//createElement

//create a div
let newDiv = document.createElement('div');

//add class to div: className, classList
newDiv.className = 'hello world';
console.log(newDiv.classList.length);

//add id to div: id
newDiv.id = 'hello1';

//add attribute
newDiv.setAttribute('title', 'Pokemon');

//create text node
let newDivText = document.createTextNode('Hello Dunya');

//add text node to div
newDiv.appendChild(newDivText);

//insert to DOM

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

newDiv.className = newDiv.className.concat(' bg-danger p-4 m-0')

container.insertBefore(newDiv, h1);



console.log(newDiv);