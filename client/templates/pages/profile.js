Template.profile.helpers({
  username: function () {
    if (Meteor.user()) {
      var name = Meteor.user().profile.name || Meteor.user().emails[0].address;
      var city = Meteor.user().profile.city;
      var country = Meteor.user().profile.country;
      return {
        'name': name,
        'country': country,
        'city': city
      };
    } else {
      return 'You are not logged in!';
    }


  },

  borrowedBooks: function () {
    return [
      {
        'thumbnail': 'http://placekitten.com/g/200/300/',
        'daysLeft': '4'
      },
      {
        'thumbnail': 'http://placekitten.com/g/200/300/',
        'daysLeft': '28'
      },
      {
        'thumbnail': 'http://placekitten.com/g/200/300/',
        'daysLeft': '11'
      }
    ];
  }
});

Template.profile.events({
  'click #ok-button': function () {

    var name = $('input#name').val().length > 0 ? $('input#name').val() : Meteor.user().profile.name;
    var city = $('input#city').val().length > 0 ? $('input#city').val() : Meteor.user().profile.city;
    var country = $('input#country').val().length > 0 ? $('input#country').val() : Meteor.user().profile.country;

    Meteor.users.update({
      _id: Meteor.user()._id
    },
    {
      $set:{
        'profile': {
          'name': name,
          'city': city,
          'country': country
        }
      }
    }
  );
  $('input#name').val('');
  $('input#city').val('');
  $('input#country').val('');
  }
});
