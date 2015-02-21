(function() {

//////////////MODEL/////////////////



///////////COLLECTION////////////////



/////////////VIEW///////////////////





/////////////ROUTER//////////////////

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': "index",
      'item/:id': 'item'
    },

    index: function(){
      $(".rightside").append("Index route has been called..");

    var template = _.template($('#menutemplate').text());
     $(".app-container").html(template()); //<----returns a string

   },

    item: function(appetizer){
     $(document.body).append("Item route has been called..");
     console.log("routes:item");

     var template = _.template($('#show-item').text());
      $(".app-container").html(template()); //<----returns a string

 },


    });



/////////////////CONFIGURATION//////////




/////////////////GLUE/////////////////

$(document).ready(function(){
approuter = new AppRouter ();
Backbone.history.start();
});


















})();
