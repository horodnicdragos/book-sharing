Template.booksRead.helpers({
  username: function () {
      console.log(this.data);
      var name = this.data.profile.name || this.data.emails[0].address;
      var city = this.data.profile.city;
      var country = this.data.profile.country;
      return {
        'name': name,
        'country': country,
        'city': city
      };
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
  // },

  // booksRead: function () {
  //   if (Meteor.user()) {
  //     consolde.log(this.data);
  //     return Meteor.user().booksRead.find({}).count();
  //     }
  //   else
  // }
});