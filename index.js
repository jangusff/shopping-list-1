$(function() {


  const li_template = $("ul.shopping-list").first();
console.log(li_template);

  //$(".shopping-list").find("li").remove();
  //console.log(li_template);
  //console.log($(".shopping-list"));

$("ul.shopping-list").append($(li_template));

  $("#js-shopping-list-form").submit(function(event) {
    console.log("here3");
    event.preventDefault();
    const newItemToAdd = $(this).find('input[name="shopping-list-entry"]');
    
    let liToAdd = li_template;
    
    $(liToAdd).find(".shopping-item").text(newItemToAdd.val());
    console.log(liToAdd);

    $("ul.shopping-list").append($(liToAdd));
    newItemToAdd.val("");    
    // <span class="shopping-item">apples</span>


  });

/*
  $("button").click(function(event) {
    $("ul").append(
      "<li>" +
      ["cat", "dog", "rock"][Math.floor(Math.random()*3)] + "</li>"
    );
  });
*/
  $("button.shopping-item-toggle").on("click", function( event ) {
      $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
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
