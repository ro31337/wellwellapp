Template.cards.viewmodel('cards',
  function(data) {
    return {
      cardsForCell: function() {
        return Cards.find({ boardId: Router.current().params._id, cell: data.cell }, {sort: [["createdAt", "asc"]]});
      }
    };
  }, 'cardsForCell');