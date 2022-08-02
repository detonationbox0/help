$(() => {
    console.log("Document loaded.")
});

/**
 * Side-nav hover
 */
$(".menu").hover(
    function() {
        $( this ).find(".expand").css("display", "flex");
    }, function() {
        $( this ).find(".expand").css("display", "none");
    }
);

// Show message when help things are clicked
$(".help-button").on("click", () => {
    $("#overlay").css('display', 'flex').hide().fadeIn("fast");
    $("#no-rep-content").show();
    $("#rep-content").hide();
});

// Show message when help things are clicked
$("#rep-help-button").on("click", () => {
    $("#overlay").css('display', 'flex').hide().fadeIn("fast");
    $("#rep-content").show();
    $("#no-rep-content").hide();
})


$(".message-button").on("click", () => {
    console.log("Fade out .overlay")
    $("#overlay").fadeOut("fast");
})