$(function(){
    $(".burger-time").on("click", function(event) {
        var id = $(this).data("id");
        var status = $(this).data("status");
        var changeState = 
        {
            devourered: status};
            console.log(changeState)
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: changeState
        }).then(function() {
            location.reload();
          }
        );
    });
    $(".delete").on("click", function(event){
        var id = $(this).data("id");
        console.log(id)
        $.ajax("/api/burgers/" + id ,{
            type: "DELETE",
        }).then(function(){
            location.reload()
        })
    })
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
          var name = $("#newBurger").val().trim();
          var newBurger = { name: name}
        console.log(newBurger)
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            location.reload();
          }
        );
      });
});