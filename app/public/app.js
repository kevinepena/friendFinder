$(document).ready(function(){
    $("select").formSelect();

    $("#submitInfo").on("click", function(event) {
        event.preventDefault();
        var newFriend = {
          name: $("#name").val().trim(),
          pic: $("#number").val().trim(),
          email: $("#email").val().trim(),
          id: $("#uniqueId").val().trim()
        };
  
        $.post("api/tables", newFriend)
          .then(function(data) {
            console.log("add.html", data);
            alert("Adding character...");
          });
      });
  });
        