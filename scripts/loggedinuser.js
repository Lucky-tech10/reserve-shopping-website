if( localStorage.getItem('LOGGEDINUSER')) {
  // Item exists
  var GLOBALUSER=JSON.parse(localStorage.getItem('LOGGEDINUSER'));
  console.log(localStorage.getItem('LOGGEDINUSER'));
} else {
  // Item doesn't exist
  window.location.href='login.html';
}
