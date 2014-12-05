Template.bookSubmit.events({
  'click #submitBook': function () {
    var name = $('#bookName').val();
    var isbn = $('#bookIsbn').val();
    var author = $('#bookAuthor').val();
    var description = $('#bookDescription').val();

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
            'bookDesc': description
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
