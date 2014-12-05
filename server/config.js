Accounts.onCreateUser(function(options, user) {

  user.books = [];
  user.readBooks = [];
  user.points = 0;
  user.level = 1;
  
  return user;
});
