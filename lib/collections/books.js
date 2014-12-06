Books = new Mongo.Collection('books');

Meteor.users.allow({
  update: function(userId, post) {
    return {
      'userId': userId,
      'post': post
    };
  }
});
