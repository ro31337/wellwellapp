Router.map(function(){
  this.route('about');
  this.route('home', { path: '/' });
  this.route('boards', {
    data: function() { return Boards.find() }
  });
  this.route('board', {
    path: '/board/:_id',
    data: function() { return Boards.findOne({_id: this.params._id})},
    template: 'board'
  });
  this.route('boardCsv', {
    path: '/board/:_id/csv',
    where: 'server',
    action: function() {
      var filename = 'board.csv';
      var data = '"Cell", "Body"\r\n';

      var headers = {
        'Content-type': 'text/csv',
        'Content-Disposition': "attachment; filename=" + filename
      };

      var cards = Cards.find({boardId: this.params._id, body: { $ne: '' }}, {sort: [['cell', 'asc'], ['createdAt', 'asc']]});      
      cards.forEach(function(card) {
        data += card.cell + ',"' + card.body.replace(/"/gi, '\\"') + '"\r\n';
      });

      this.response.writeHead(200, headers);
      return this.response.end(data);
    }
  });
});
