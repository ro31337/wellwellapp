Meteor.startup(function() {

  window.getCurrentUser = function() {
    if(!localStorage.getItem('currentUser')) {
      localStorage.setItem('currentUser', Random.id());
    }

    return localStorage.getItem('currentUser');
  };

  window.textToHtml = function(text) {
    if(!text) return;

    var times = function (string, number) {
      for (var i = 0, r = ''; i < number; i++) r += string;
      return r;
    };

    var html = urlize(text, { autoescape: true, target: '_blank' })
      .replace(/\n /g, '<br/>&nbsp;')
      .replace(/\n$/, '<br/>&nbsp;')
      .replace(/\n/g, '<br/>')
      .replace(/ {2,}/g, function (space) { return times('&nbsp;', space.length - 1) + ' ' });

    return html;
  };

});