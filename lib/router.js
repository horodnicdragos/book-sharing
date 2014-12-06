Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home'
});

Router.route('/profile/horodnicdragos', {
  name: 'profile'
});
Router.route('/profile/andreic', {
  name: 'profile2'
});
Router.route(
  '/book/', {
  name: 'book'
});
Router.route(
  '/submit', {
    name:'bookSubmit'
  }
);
Router.route(
  '/booksRead/:_id', {
  name: 'booksRead',
  data: function(){
  	return Meteor.users.findOne(this.params._id);
  }
});
