$(document).ready(function() {
  var options = [
    {selector: '.tagline', offset: 10, callback: function(el) {
       Materialize.fadeInImage($(el));
     } },
    {selector: '.social', offset: 150, callback: function(el) {
       Materialize.fadeInImage($(el));
     } },
    {selector: '.projects', offset: 400, callback: function(el) {
       Materialize.fadeInImage($(el));
     } }
 ];

 Materialize.scrollFire(options);

});
