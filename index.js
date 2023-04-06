var itemList = document.querySelector('#items');

itemList.children[1].style.backgroundColor = 'red';
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'firstLi1'
// lastchild
itemList.lastChild.textContent='lastchild';
//lastElementChild
itemList.lastElementChild.style.backgroundColor = 'yellow';
//nextsibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'blue';