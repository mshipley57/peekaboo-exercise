$(document).ready(function() {


  $(".clickable").click(function() {
    $("body").removeClass();
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
    $("body").addClass("pink-background");
  });
  



 $(".clickWorthy").click(function() {
    $("body").removeClass();
    $("#toggleText").toggle();
    $("#otherText").toggle();
    $("body").addClass("green-background");

 });











});
