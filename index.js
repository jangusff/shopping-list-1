$(function() {

  $("button.shopping-item-toggle").on("click", function( event ) {
       $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
   });
 
   $("button.shopping-item-delete").on("click", function( event ) {
       $(this).closest("li").remove();
   });
 
   let li_template = $("ul.shopping-list > li").first().clone(true);
 
   $(".shopping-list").find("li").remove();
  
   $("#js-shopping-list-form").submit(function(event) {
     
     event.preventDefault();
     const newItemToAdd = $(this).find('input[name="shopping-list-entry"]');
 
     if (newItemToAdd.val() !== "") {
       let liToAdd = li_template.clone(true);
       $(liToAdd).find(".shopping-item").text(newItemToAdd.val());
       $(liToAdd).appendTo("ul.shopping-list");
       newItemToAdd.val("");    
     }
    
   });
 
 });
 