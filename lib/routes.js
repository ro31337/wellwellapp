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
});
