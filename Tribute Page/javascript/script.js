document.addEventListener("DOMContentLoaded", function(event){
  document.getElementById('down-arrow').onclick = function(){
    $("HTML, BODY").animate({ scrollTop: $(window).height() }, 750);
  };
});


console.log();
