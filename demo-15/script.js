/************
 * In this demo, we'll work our way to make a simple clock
**********/

/************ Warm-up ************/

// This is a comment!

/*
  You can also write
  multi-line comments like this
*/

// Why are we programming? To communicate with a computer.
// Let's call the computer Compy.
// Compy processes information. But to do that, Compy needs memory. Compy needs to remember information!
// Our language to talk to Compy is JS (JavaScript).
// In Javascript, you tell Compy to remember something by declaring a variable.
// Here's how you declare a variable and assign it a value.
var skyIsBlue = true
// "var" is like "OK, Compy. Remember this"
// "skyIsBlue" is the name of the information
// "true" is the information that you are storing in the variable.

// We can ask Compy to talk back to us through the Console
// In your browser, open the Developer Tools / Inspector, and click the "Console" tab.
console.log("Is the sky blue?")
console.log(skyIsBlue)

// Variables are the simplest way to store data
// Variables can have different types
var leapYear = false // a Boolean value is either true or false
var year = 2020 // a Number value can be an integer or have decimals. It can even be in binary or hexadecimal.
var month = 'November' // a String value is text written inside quotes
var day = "It's Tuesday" // You can use double quotes too, if you need to

// After you declare a variable, you can re-assign it.
year = 2021
// Notice that I didn't write "var".
// That's because the variable has already been declared!
// Compy should know what "year" is.

// You can also write expressions, which are like phrases...
year = 2021 + 1 // You can say a mathematical expression
year = 2 * (2022 - 1) * 36 / 72 // It's kind of like using a calculator
year = year + 1 // And you can use the variable's current value in the expression too

// You can also combine variables into a String.
// Can you see why this works?
var dateSentence = day + ', ' + month + ' 1st, ' + year
console.log(dateSentence)

/*
  Get to know Compy.
  Tell Compy your birthday using different variables.
  Maybe your star sign too.
  Then, ask Compy if it remembers. (Write it to the console)
  Combine the variables into a sentence.
*/

/************ Math ************/

// A computer can do a lot on its own too.
// JS has built-in ways to tell the computer to do stuff.
// One of them is the Math object.
// You can browse everything Math can do here...
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// The Math object has built-in functions
// For example, random() is a function that returns a random number from 0 to 0.999...
var rndm = Math.random()
console.log(rndm)

// Fun fact.. This is not "true" random.
// It is very difficult to generate true random numbers without listening to nature...
// JS just uses a pseudo-random number generator, which is just a very convoluted
// function that uses the current time as an input.
// So actually a motivated person could predict the output.
// Anyway, random is a very vague concept. Random just means you have no way of knowing. It's outside of you.
// That's why "true" randomness is sometimes created from measurements of atmospheric data or outer space.
// They call it a source of entropy.

// If you wanted a random integer from 1 to 6, you could do the following...
rndm = rndm * 6 // this results in a random number from 0-6, like 5.12684
rndm = Math.ceil(rndm) // ceil() is a Math function that always rounds an input number up
// Check out the parentheses! The parentheses looks like a hole. That's where you put inputs.
// It is a bit like wires on an analog synthesizer. That's what computers used to look like,
// and the language is imitating that.

// Let's see the number... This is like rolling a die
console.log(rndm)

/*
  Ask Compy for some Lottery Numbers.
  You'll need 6 random numbers from 1 to 59.
  If it's not too expensive, you can buy a New York Lotto ticket.
*/

/************ Arrays ************/

// So far we've dealt with variables that are single pieces of data.
// But we can also make data structures.
// The simplest data structure is an Array.
var colors = ['green', 'blue', 'orange', 'goldenrodyellow']
// This is an Array of Strings.

// Every array has a built-in property that tells you how long it is.
console.log(colors.length) // This should output "4"

// You can also select a specific element from the array, like so...
// With computers, we always count from 0,
var firstColor = colors[0] // so we say that the first element has an index of 0
var secondColor = colors[1] // and the second element has an index of 1
console.log('The second color is ' + secondColor)

// Finally, Arrays have built-in functions too.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// The most useful one might be push(), which adds an element to the end
colors.push('mistyrose')
console.log(colors)

/*
  Using what we learned about getting a random integer,
  How would you ask Compy for a random color?
  Maybe next time you are stuck on picking colors, you can ask Compy.
*/

/************ The DOM ************/

// Javascript represents the HTML content using "the DOM".
// DOM stands for "Document Object Model".
// We can use Javascript to access and change the initial HTML.
// Those changes don't affect the file.
// They just last as long as the page is open.
console.log(document)
// Let's start with document.
// document is a default variable that basically lets you access the top-most HTML element.
// https://developer.mozilla.org/en-US/docs/Web/API/Document

// We can also get an Element object and declare it in a variable
var messageElement = document.getElementById('message')
// document.getElementByid takes 1 input:
// a String with the ID of the element you want
// and it returns 1 output:
// an Element object that you can use to control that HTML element.
console.log(messageElement)

// By the way, there is another more powerful way to get any element using a CSS selector
// querySelector() returns the first Element that can be selected by the given CSS selector...
messageElement = document.querySelector('#message')

// There are so many ways to control an Element.
// https://developer.mozilla.org/en-US/docs/Web/API/Element

// This is how you change the text inside
// An Element has properties, which you can ask for or change.
console.log(messageElement.innerText)
// Here we asked for the innerText property, which is the text inside the HTML element.
// We can also re-assign the value of that property, and change the text on the page.
messageElement.innerText = 'BLUE'
// We can change the HTML code too...
messageElement.innerHTML = '<p>' + colors[1] + '</p>'

// You can manipulate their CSS classes...
messageElement.classList.add('show')
messageElement.classList.remove('show')
messageElement.classList.toggle('show')

// And their CSS styles...
messageElement.style['color'] = 'blue'

// Okay, I'm going to change the background color to green
document.body.style['background'] = 'green'

/*
  Same as before, how would you assign a random color to the background?
*/

/************ Functions ************/

// We just saw that JS has built-in functions.
// We can also write our own functions.
// That's helpful because then you don't have to keep copy+pasting the same code and fixing all of it everywhere

// Let's say you want an easy way to just make a random integer from 0 to some number x
// So you expect 1 input: x
// And it'll give you an output... the random integer.
// This is basically a dice roll, but more abstracted.

// function tells Compy that we're teaching Compy a new skill.
// randomInteger is the name of the skill
// it'll take one input variable called maximumInteger
// while Compy is doing this skill, it should remember the maximumInteger that was given.
function randomInteger(maximumInteger) {
  // get a random number from 0 to 0.999...
  var rand = Math.random()
  // then turn it into an integer like before
  rand = rand * maximumInteger
  rand = Math.floor(rand)
  // return tells Compy ok this is the final output...
  return rand
}

// You can call the function using its name and the input
console.log( randomInteger(3) )
// anyone notice a problem with this code?
// kudos if you did
// right now, the code would only give you a random integer from 0 to maximumInteger - 1
// why?
// how would you fix it?

// Now we can use that function to get random things out of an array!
var randomIndex = randomInteger( colors.length - 1 )
var randomColor = colors[randomIndex]
console.log(randomColor)

/*
  Rewrite your code for assigning a random color to the background
  using the new function.
  And then put that code into a function!
*/

/************ Intervals ************/

// setInterval()