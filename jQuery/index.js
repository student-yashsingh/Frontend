$(document).ready(function(){
    $("h1").css("color","red");
})

console.log($("img").att("src"));
$("h1").attr("class");

$("#id").text("New Text");             // Change text
$("#id").html("<b>Bold</b>");          // Change HTML content
$("#id").val("New Value");             // Change input field value


$("#id").attr("href", "https://example.com"); // Change attribute
$("#id").removeAttr("disabled");              // Remove attribute
$("#id").prop("checked", true);               // Change property

$("#id").css("color", "red");         // Change CSS property
$("#id").addClass("new-class");       // Add class
$("#id").removeClass("old-class");    // Remove class
$("#id").toggleClass("active");       // Toggle class

$("#id").click(() => alert("Clicked!"));   // Click event
$("#id").on("mouseover", () => alert("Hovered!"));  // Mouse over event
$("#id").off("click");                    // Remove event


$("button").on("click",function(){
    $("h1").animate({opacity:0.8})
});