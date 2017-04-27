$(function() {
  $(".form-control").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("#height").val());
    if (height == "4") {
      $("#height-4").show();
      $("#height-5").hide();
      $("#height-6").hide();
    } else if (height == "5") {
      $("#height-4").show();
      $("#height-5").show();
      $("#height-6").hide();
    } else if (height == "6") {
      $("#height-4").show();
      $("#height-5").show();
      $("#height-6").show();
    } else {
      $("#height-4").hide();
      $("#height-5").hide();
      $("#height-6").hide();
    }
  });
});
