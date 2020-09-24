// Detecting button press . The following function makes sure that... if a button is pressed on the website, then it checks the innerHTML of the button that got pressed.
// Then that innerHTML is send to makeSound() function in order to play that relevant sound.

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

// Detecting keyboard press. If a key was pressed instead, then key will be detected. And "event.key" will be sent to the func makeSound().
document.addEventListener("keydown", function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});

// function to make sound for the particular key pressed.
function makeSound(key)
{
  switch (key) {
    case "z":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "x":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "u":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "i":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "o":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "p":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:

  }
}

// function to add flash for the particular key pressed while it creates sound
function buttonAnimation(currentKey)
{
   var activeButton = document.querySelector("." + currentKey);  // this is the pressed button where animation has to be applied
   activeButton.classList.add("pressed");  // this inherits the css properties of the class "pressed", which has a shadow and transparency added to it .

   setTimeout( function() {                                      //to remove the pressed class from the classList after 100 milliseconds; so that the button may go back to its original state i.e. without any animation.
     activeButton.classList.remove("pressed"); } , 100);
}
