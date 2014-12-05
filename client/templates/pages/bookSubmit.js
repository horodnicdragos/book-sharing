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
  }
});
