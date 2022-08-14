// Cursor Script
var cursor = document.getElementById("cursor");
document.onmousemove = function(e){
    cursor.style.left = (e.pageX - 25) + "px";
    cursor.style.top = (e.pageY- 25) + "px";
    cursor.style.display = "block";
}

// loader Script
setTimeout(function () {
    $(".loader_bg").fadeToggle();
}, 3900);

// Text Rotation
$(".simple-text-rotate").textrotator({
    animation: "fade",
    speed: 4000,
});

//Navbar
$(window).on("scroll", function () {
    $(window).scrollTop() >= 50
  ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd");
  });

