$(function () {
    $("#submitButton").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            name: $("#burgerInput").val().trim(),
            devoured: 0,
        }
        location.reload()
    })
})

