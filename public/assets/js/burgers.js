// Make sure we wait to attach our handlers until the DOM is fully loaded.

// $('.selected').each(function() {
//     $(this).css({ left: $(this).position().left - 15 });
// });


$(function () {
    $(".devour").on("submit", function (event) {
        var id = $(this).data("id");


        var newDevourState = {
            devour: true
        };
        $(document).ready(function () {

            // Send the PUT request.
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newDevourState
            }).then(
                function () {
                    console.log("Devoured it!", newDevourState);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });
    });
});

$(".addBurger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger = {
        burger_name: $("#bu").val(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
    }).then(
        function () {
            $(".newburger").append('<div>' + newburger + "</div>")

            console.log("yummy burger!");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(".delete").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(
        function () {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});