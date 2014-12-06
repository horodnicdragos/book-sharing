Template.home.events({
  'click #searchBookBtn': function () {
    var a = Books.findOne({
      name: $('input#searchBook').val()
    });
    console.log(a);
    $('.bookResult').html();
  },

  'click .borrow': function () {
    Books.update ({'_id':this._id}, {$set: {'currentUser': Meteor.user()._id }});
    Meteor.users.update ({'_id': Meteor.user()._id}, {$addToSet: {'borrowedBooks': this._id}});
  }
});

Template.home.helpers({
  books: function() {
    var a = [];
    var x = Books.find({});
    x.forEach( function(elem) {
      a.push(elem);
    });
    console.log(a);
    return a;
  }
});
