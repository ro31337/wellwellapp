Template.card.events({
  'focus textarea': function() {
    Session.set('hasFocus', this._id);
  },
  'keydown textarea': function(event) {
    if(event.which === 8 || event.which === 46) {
      var selector = '#' + this._id;
      if($(selector).val() === '') {
        
        Meteor.call('removeEmptyCardIfNotLastEmptyInCell', {
          cardId: this._id,
          boardId: this.boardId,
          belongsTo: getCurrentUser(),
          cell: this.cell
        });
        
        return false;
      }
    }
  }
});