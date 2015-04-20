Template.home.events({
  'click button': function() {
    
    var board = {
      title: 'New board',
      body: 'Newly created board'
    };

    var id = Boards.insert(board);
    Router.go('board', { _id: id });
  }
});