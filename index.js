$(function() {

  // event.preventDefault();

$("button.shopping-item-toggle").on("click", function( event ) {
    console.log('here2');
    $(this).closest("span.shopping-item").toggleClass("shopping-item__checked");
});

$("button.shopping-item-delete").on("click", function( event ) {
    console.log('here1');
    $(this).closest("li").remove();
});


/*
$("button").on("click", ".shopping-item-delete", function( event ) {
    console.log('here1');
    $(this).closest("li").remove();
});

  $("button").on("click", ".shopping-item-toggle", function( event ) {
    console.log('here1');
    $(this).closest("button-label").toggleClass("shopping-item__checked");
  });
*/
/*
 $('ul').on('click', 'li', function(event) {
    this.remove();
  });
*/

});
