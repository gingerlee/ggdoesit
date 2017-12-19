$(document).ready(function() {
  var options = [
    {selector: '.logo', offset: 10, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '.tagline', offset: 20, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '.social', offset: 90, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '.projects', offset: 100, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '.footer-text', offset: 10, callback: function(el) {
      Materialize.fadeInImage($(el));
    } }
  ];

 Materialize.scrollFire(options);

  $('#social').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('.social')).offset().top}, 800, 'linear');
  });

});
