/************
 * In this demo, we expand on the previous one to make the logic more modular
**********/

/************ Intro ************/
// As you were working with event listeners, you might have found yourself
// re-writing a lot of similar code.

// For example, in this demo, we have 3 of these divs with the class "dot"
// and each one has a button that opens the next "dot"

// One way to handle this is to get each dot by its ID and add an event listener

// var button1 = document.getElementById('button1')
// function handleClick1() {
//   var dot2 = document.getElementById('dot2')
//   dot2.classList.add('enlarged')
// }
// button1.addEventListener('click', handleClick1)

// var button2 = document.getElementById('button2')
// function handleClick2() {
//   var dot3 = document.getElementById('dot3')
//   dot3.classList.add('enlarged')
// }
// button2.addEventListener('click', handleClick2)

// var button3 = document.getElementById('button3')
// function handleClick3() {
//   var dot4 = document.getElementById('dot4')
//   dot4.classList.add('enlarged')
// }
// button3.addEventListener('click', handleClick3)

// and so on...

// This works, but what if you had like 10 elements?
// Coding this would start to get really repetitive.
// But the hint to making this code better is by noticing HOW it's repetitive...
// What do you see?

// It is mostly the same except for the numbers.
// Once you start to see a pattern, you can write code to tell Compy what to do
// with 10, 20, any number of elements.

// We can at least write a function to deal with the repetition...
function handleClick(event) {
  var buttonElement = event.target
  console.log(buttonElement)
  var dotElement = buttonElement.parentElement
  console.log(dotElement)
  var nextDotElement = dotElement.nextElementSibling
  console.log(nextDotElement)
  nextDotElement.classList.add('enlarged')
}

var button1 = document.getElementById('button1')
button1.addEventListener('click', handleClick)

var button2 = document.getElementById('button2')
button2.addEventListener('click', handleClick)

var button3 = document.getElementById('button3')
button3.addEventListener('click', handleClick)

// That's better! But it's still repetitive.
// To get this even better, we have to learn how to get all of these buttons
// and loop through them


/**********  Loops *************/

// Here is an array of colors
var colors = ['blue', 'green', 'red', 'purple']

// And here is a loop
// The first line is called a loop declaration.
// It declares a variable "i" and sets it to 0
// "i" will represent the index.
// we could name it anything, but programmers like "i" because it's short and it stands for "index" or "iteration"
// The loop will go on as long as "i < colors.length"
// And every iteration, we do "i++" which increases i by 1
for (var i = 0; i < colors.length; i++) {
  var color = colors[i]
  var sentence = 'Color ' + i + ' is ' + color
  console.log(sentence)
}


/********** documnet.querySelectorAll() *************/

// Now, how do we loop through elements?

// We talked about querySelector()
// which grabs the first element from the DOM that matches the CSS selector

// Introducing... querySelectorAll()
// which gives you an array of all of the elements in the DOM that match the CSS selector

var dotElements = document.querySelectorAll('.dot')
console.log(dotElements)

// Here's a challenge. How might you loop through all of the dot elements
// and give them a different color?

for (var i = 0; i < dotElements.length; i++) {
  var dot = dotElements[i]
  var color = colors[i]
  console.log(dot)
  console.log(color)
  dot.style['color'] = color
}


/********** Making the logic work *************/

// Finally, this is the most advanced part.
// We want to do all of that event listener stuff in a loop.
// It helps to look at the original, repetitive code, and see how we can convert it into a loop.
// This is the most advanced thing, so don't stress if you don't get it right away.

// for (var i = 0; i < dotElements.length - 1; i++) {
//   // get the current dot element
//   var dotElement = dotElements[i]
//   // get the button inside the dot element
//   var buttonElement = dotElement.querySelector('button')
//   buttonElement.addEventListener('click', handleClick)
// }