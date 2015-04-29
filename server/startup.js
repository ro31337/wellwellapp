Meteor.startup(function () {
  Cards._ensureIndex({ 'boardId': 1 }, { background: true });
});