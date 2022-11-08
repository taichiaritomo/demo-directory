/************
 * In this demo, we'll make an invitation that responds to a user's interaction
**********/

/************ Warm-up ************/

// Last week, we talked about computing mostly as storing information...
// With variables, we tell Compy to remember things and then recall them.
// With expressions, we tell Compy to process and combine them.
// With functions, we tell Compy to remember one of those processes, so we can repeat them again.

// Compy can do so much more, and it would be rude to ask it only to do those very basic things.
// because Compy has great potential.
// There are computers out there that are listening to events...
// maybe events in the atmosphere, listening to the air quality and reporting it to us
// they are listening to the news articles and stock trades, and making their own stock trades in response
// they are listening to people in their homes say that their feet are cold so that those computers can serve those people ads for foot-warming slippers

// On a website, we can tell Compy to listen to a person's interactions through EVENTS on ELEMENTS.

// Here's a simple example.
var firstButton = document.querySelector('#yes-button')
function handleClick() {
  console.log('clicked!')
}
firstButton.addEventListener('click', handleClick)

// First we saved the button element to a variable
// Then, we made a simple function that we want to call when the button is clicked
// Finally, we put it all together. We add an event listener to the ELEMENT.
// addEventListener takes the name of the event, and the name of the function to call
// You can add an event to any element.

// Often times you want to change something on the screen in response to a click.
// Here's an example where we get the #dot element and add the class "enlarged"
function enlargeDot() {
  var dot = document.querySelector('#dot')
  dot.classList.add('enlarged')
}

firstButton.addEventListener('click', enlargeDot)

// Let's say... I want to connect with people
// But I don't know how!
// I'm super into grain teas.
// I drink this stuff like water.
// I want to connect with people about grain tea.
// So I'm going to plan this event. A grain tea party.
// I want to make an invitation for the event.
// But you know, invitations are actually very complex art.
// How do you lead it? Do you want to just go for it, like "I'm having a grain tea party!"
// Is that how you want to invite people?
// I want to be more subtle, ok...
// I want to feel out the other person's reaction a little, OK...
// Actually, I feel like a lot of posters aren't very good invitations.
// Communication design, right? We communicate in all sorts of ways...
// How do you want to have a conversation?

function enlargeDot2() {
  var dot = document.querySelector('#dot2')
  dot.classList.add('enlarged')
}