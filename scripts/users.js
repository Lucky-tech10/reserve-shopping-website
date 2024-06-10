var users = [];
if( localStorage.getItem('USERS')) {
  // Item exists
  console.log(localStorage.getItem('USERS'));
} else {
  // Item doesn't exist
  localStorage.setItem('USERS', JSON.stringify(users));
}
