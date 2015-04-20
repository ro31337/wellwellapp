Meteor.methods({
  isCardExists: function(boardId, cell, userId) {
    var cnt = Cards.find({ boardId: boardId, cell: cell, belongsTo: userId }).count();
    return cnt > 0;
  },

  updateCardCreatedAt: function(cardId) {
    var t = new Date().getTime();
    Cards.update(cardId, { $set: {createdAt: t} });
  },

  createNewCardIfNeeded: function(options) {
    var cnt = Cards.find({ boardId: options.boardId, cell: options.cell, belongsTo: options.belongsTo, body: '' }).count();

    if(cnt === 0) {
      var card = {
        boardId: options.boardId,
        body: '',
        belongsTo: options.belongsTo,
        createdAt: MAX_CREATED_AT,
        cell: options.cell
      };

      Cards.insert(card);      
    }
  },

  removeEmptyCardIfNotLastEmptyInCell: function(options) {
    var emptyCountWithoutCurrent = Cards.find({ boardId: options.boardId, cell: options.cell, belongsTo: options.belongsTo, body: '', _id: {$ne: options.cardId} }).count();
    if(emptyCountWithoutCurrent >= 1) {
      // yes, we can remove
      Cards.remove(options.cardId);
    }
  }
});