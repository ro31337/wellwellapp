Template.card.events({
  'keydown textarea': function(event) {    
    Session.set('hasFocus', this._id);

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