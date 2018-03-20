$(function(){
    $(".burger-time").on("click", function(event) {
        var id = $(this).data("id");
        var newSleep = $(this).data("newsleep");
    
        var newSleepState = {
          sleepy: newSleep
        };
    
        // Send the PUT request.
        $.ajax("/api/cats/" + id, {
          type: "PUT",
          data: newSleepState
        }).then(
          function() {

            location.reload();
          }
        );
      });
});