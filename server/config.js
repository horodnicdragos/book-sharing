Accounts.onCreateUser(function(options, user) {

  user.books = [];
  user.readBooks = [];

  return user;
});
