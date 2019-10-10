// init github
const github = new Github;
// init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');


// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    // Make http call
    github.getUser(userText)
    .then(data => {
        if(data.profile.message === 'NotFound') {
            // show alert


        } else {
            // show profile
            ui.showProfile(data.profile);
        }
    });
  } else {
    // clear profile
  }
});