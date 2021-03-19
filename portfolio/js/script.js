$("document").ready(function(){
  $(".btn1").tooltip();
  $("#imganimate").tooltip();
  $(".btn1").click(function(e){
    e.preventDefault();
    window.location.href="Files/Resume.pdf";
  });
});