// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Function to handle the server response when the heart is clicked
function handleHeartClick() {
  const heartIcon = document.querySelector('.like-glyph');
  mimicServerCall() // Simulate making a server request
    .then(() => {
      // On successful response from the server
      heartIcon.classList.add('activated-heart'); // Make the heart red
    })
    .catch(() => {
      // On failure response from the server
      const errorModal = document.querySelector('.error-modal');
      errorModal.classList.remove('hidden'); // Display the error modal
      setTimeout(() => {
        errorModal.classList.add('hidden'); // Hide the error modal after 3 seconds
      }, 3000);
    });
}

// Event listener to handle heart click
document.addEventListener('DOMContentLoaded', () => {
  const heartIcon = document.querySelector('.like-glyph');
  heartIcon.addEventListener('click', handleHeartClick);
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
