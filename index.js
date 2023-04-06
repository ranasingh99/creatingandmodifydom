var itemList = document.querySelector('#items');

itemList.children[1].style.backgroundColor = 'red';
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'firstLi1'
// lastchild
itemList.lastChild.textContent='lastchild';
//lastElementChild
itemList.lastElementChild.style.backgroundColor = 'yellow';