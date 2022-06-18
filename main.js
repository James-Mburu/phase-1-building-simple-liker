// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function handleEmptyHeartClick(event) {
  mimicServerCall()
    .then(() => {
      event.target.innerHTML = FULL_HEART;
      event.target.classList.add("activated-heart");
    }).catch((error) => {
      document.querySelector("#modal").classList.remove("hidden");
      document.querySelector("#modal-message").innerHTML = error;
      setTimeout(() => {
        document.querySelector("#modal").classList.add("hidden");
      }, 3000);
    }
  );
}

// When a user clicks on a full heart, remove the .activated-heart class and change the heart to an empty heart
function handleFullHeartClick(event) {
  event.target.innerHTML = EMPTY_HEART;
  event.target.classList.remove("activated-heart");
}

// Add an event listener for click on a heart
function handleHeartClick(event) {
  if (event.target.innerHTML === EMPTY_HEART) {
    handleEmptyHeartClick(event);
  } else {
    handleFullHeartClick(event);
  }
}

// add an event listener for when the like button is clicked
document.querySelectorAll(".like").forEach(heart=> {
  heart.addEventListener("click", handleHeartClick);
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
