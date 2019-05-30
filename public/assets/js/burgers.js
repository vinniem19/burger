$(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");
        var newDevState = {
            devoured: newDevour
        };
        $.ajax("/burger" + id, {
            type: "PUT",
            data: newDevState
        }).then(
            function() {
                console.log("changed type to ", newDevour);
                location.reload();
            }
        );
    });

    $(".add-burger-form").on("submit", function(event) {
        event.preventDefault();
    var newBurger = {
        name: $("#burger").val().trim(),
        devoured: false
    };
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("created new burger");
        location.reload();
    });
    });
});