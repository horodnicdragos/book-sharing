Template.profile.helpers({
  username: function () {
    if (Meteor.user()) {
      var name = Meteor.user().profile.name || Meteor.user().emails[0].address;
      return name;
    } else {
      return 'You are not logged in!';
    }
  }
});

Template.profile.events({
  'click #ok-button': function () {
    Meteor.users.update({
      _id: Meteor.user()._id
    },
    {
      $set:{
        'profile': {
          'name': $('input#name').val()
        }
      }
    }
  );
  $('input#name').val(' ');
  }
});
