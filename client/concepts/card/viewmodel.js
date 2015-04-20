Template.card.viewmodel(function(data) {
  return {
    id: data._id,
    currentBody: data.body,
    belongsTo: data.belongsTo,
    createdAt: data.createdAt,
    timeoutFunction: null,
    cell: data.cell,
    boardId: data.boardId,
    body: function() {
      return this.card().body;
    },
    formattedBody: function() {
      return window.textToHtml(this.body());
    },
    card: function() {
      return Cards.findOne(this.id());
    },
    updateCard: function(event) {
      //console.log('update card with id: ' + this.id() + ', content: ' + this.currentBody());

      if(this.timeoutFunction() == null)
      {
        var _this = this;

        this.timeoutFunction(function() {

          if(_this.createdAt() === MAX_CREATED_AT) {
            
            _this.createdAt(-1);

            Meteor.call('updateCardCreatedAt', _this.id());
          }

          Cards.update(_this.id(), { $set: {body: _this.currentBody()} });
          
          Meteor.call('createNewCardIfNeeded', {
            boardId: _this.boardId(),
            belongsTo: _this.belongsTo(),
            cell: _this.cell() });

          _this.timeoutFunction(null);
        });

        setTimeout(this.timeoutFunction(), 500);
      }
    },
    belongsToMe: function() {
      return getCurrentUser() === this.belongsTo();
    },
    isVisible: function() {
      return !(!this.belongsToMe() && this.isEmptyOrWhiteSpace());
    },
    isEmptyOrWhiteSpace: function() {
      return !/[^\s]/.test(this.body());
    }
  }
}, ['id','isVisible','body','belongsToMe', 'formattedBody']);