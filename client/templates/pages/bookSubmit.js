Template.bookSubmit.events({
  'click #submitBook': function () {
    var name = $('.title').text();
    var isbn = $('#searchBook').val();
    var author = $('.author').text();
    var description = $('.description').text();
    var rating = $('.rating').text();

    Meteor.users.update({
      _id: Meteor.user()._id
    },
    {
      $addToSet:{
        'books':
          {
            'bookName': name,
            'bookIsbn': isbn,
            'bookAuthor': author,
            'bookDesc': description,
            'bookrating': rating
          }
      }
    }
  );

  Books.insert({
    'isbn': isbn,
    'name': name,
    'author': author,
    'description': description,
    'owner': Meteor.user()._id,
    'currentUser': '',
    'daysLeft': ''
  });
}
});
