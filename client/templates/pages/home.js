Template.home.events({
  'click #searchBookBtn': function () {
    var a = Books.findOne({
      name: $('input#searchBook').val()
    });
    console.log(a);
    $('.bookResult').html();

  }
});

Template.home.helpers({
  books: function() {
    var a = [];
    var x = Books.find({});
    x.forEach( function(elem) {
      a.push(elem);
    });

    return a;
  }
});
