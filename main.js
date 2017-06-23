var userData = {
  experience: '',
  demography: '',
  storeID: '101',
  date: ''
};

function updateUserExp (event) {
  // get experience name base on button clicked
  // update userData with experience
  var btnName = event.target.getAttribute('name');
  userData.experience = btnName;
  userData.date = Date.now();
}

function updateUserDemography (event) {
  var btnName = event.target.getAttribute('name');
  userData.demography = btnName;
  userData.date = Date.now();
}

function submitUserFeedback (event) {
  userData.date = new Date();
  console.log(userData);
  userData = {
    experience: '',
    demography: '',
    storeID: '101',
    date: ''
  };
}

// (new Date(Date.now()).toUTCString()
//  This Function converts Javascript Timestamp into UTC format.

