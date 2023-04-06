//creating new Element
//1) creating new div
var newDiv = document.createElement('div');

//Add class
newDiv.className = 'hello';
// Add id
newDiv.id = 'hello1';

// Add Attribute

newDiv.setAttribute('title','hello title');

//createTextNode

var newDivText = document.createTextNode('Namaste');

// add text to div

newDiv.appendChild(newDivText);

//insert into dom

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);
console.log(newDiv);