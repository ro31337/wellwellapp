Meteor.startup(function () {
  if (!Boards.findOne()) {
    
    var boards = [
      {title: 'Board 1', body: 'This is board 1'},
      {title: 'Board 2', body: 'This is board 2'},
      {title: 'Board 3', body: 'This is board 3'}
    ];

    boards.forEach(function (board) {
      Boards.insert(board);
    });
  }
});