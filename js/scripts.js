$(document).ready(function() {
  var options = [
    {selector: '.logo', offset: 10, callback: function(el) {
       Materialize.fadeInImage($(el));
     } },
    {selector: '.tagline', offset: 20, callback: function(el) {
       Materialize.fadeInImage($(el));
     } },
    {selector: '.social', offset: 225, callback: function(el) {
       Materialize.fadeInImage($(el));
     } },
    {selector: '.projects', offset: 300, callback: function(el) {
       Materialize.fadeInImage($(el));
     } },
    {selector: '.footer-text', offset: 10, callback: function(el) {
       Materialize.fadeInImage($(el));
     } }
 ];

 Materialize.scrollFire(options);

});
