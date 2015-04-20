Template.card.onRendered(function() {
  var el = this.find('textarea');
  var $textarea = $(el);
  if($textarea) {
    // call autogrow only when text area is visible
    var interval = setInterval(function() {
      if(!$textarea.is(':visible')) return;

      $textarea.autogrow();

      if (Session.get('hasFocus')) {
        var selector = '#' + Session.get('hasFocus');
        $(selector).focus();
      }

      clearInterval(interval);
    }, 30);
  }
});