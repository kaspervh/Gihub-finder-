// init github
const github = new Github;

// init UI
const ui = new UI;

// search input
let searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', e => {

  const userText = e.target.value

  if(userText != ''){
    //make http call
    github.getUser(userText).then(data => {
      if(data.profile.message == 'Not Found'){
        // show alert
        ui.showAlert('user not found', 'alert alert-danger');
      }else{
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    }).catch(error => console.log(error))
  }else{
    ui.clearProfile();
  }

});