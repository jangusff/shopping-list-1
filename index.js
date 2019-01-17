$(function() {

  // Initialize 'click' event for the 'check' button.
  $("button.shopping-item-toggle").on("click", function( event ) {
      $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
  });

  // Initialize 'click' event for 'delete' button.
  $("button.shopping-item-delete").on("click", function( event ) {
      $(this).closest("li").remove();
  });

  // Preserve a re-usable copy of on object representing a single list item (li).
  let li_template = $("ul.shopping-list > li").first().clone(true);

  // Clear-out the current shopping list.
  $(".shopping-list").find("li").remove();
 
  // Perform actions needed for 'Add item' button.
  $("#js-shopping-list-form").submit(function(event) {
    
    event.preventDefault();

    // Gather user input (i.e. new item to add to Shopping List).
    const newItemToAdd = $(this).find('input[name="shopping-list-entry"]');

    // Append a new list item to the list.
    if (newItemToAdd.val() !== "") {
      let liToAdd = li_template.clone(true);
      $(liToAdd).find(".shopping-item").text(newItemToAdd.val());
      $(liToAdd).appendTo("ul.shopping-list");
      newItemToAdd.val("");    
    }
   
  });

});
