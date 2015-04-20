Template.board.onCreated(function() {
  var addNewCardIfNotExists = function(boardId, cell, userId) {
    Meteor.call('isCardExists', boardId, cell, userId, function(error, result){
        if(result) return;

        var card = {
          boardId: boardId,
          body: '',
          belongsTo: userId,
          createdAt: MAX_CREATED_AT,
          cell: cell // string type is important
        };

        Cards.insert(card);
      });
  };

  for(var cellNumber = 1; cellNumber <= 4; cellNumber++)
  {
    addNewCardIfNotExists(Router.current().params._id, cellNumber.toString(), getCurrentUser());
  }
});