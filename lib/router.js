Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route(
	'/', {
  name: 'home'});
Router.route(
	'/book/:id', {
  name: 'book'});