$(document).ready(function() {





  $(".item").click(function(){
    var name = this.id;
    console.log(name);
    $(this).toggleClass("border");
    $(this).siblings().removeClass("border");
    console.log("finished the border remove");
      if ($("#question").hasClass("question-active") && $("#fist").hasClass("fist-inactive") && $("#item-punch").children("img." + name).hasClass("img-inactive")){

        $("#question").removeClass("question-active");
        $("#question").addClass("question-inactive");
        $("#fist").removeClass("fist-inactive");
        $("#fist").addClass("fist-active");
        $("img." + name).removeClass("img-inactive");
        $("img." + name).addClass("img-active");
        // $(this).removeClass("border");
        // $(this).addClass("border");

        console.log("finished the if branch");
      } else if ($("#fist").hasClass("fist-active") && $("#item-punch").children("img." + name).hasClass("img-active") && $("#question").hasClass("question-inactive")){
        $("img." + name).toggleClass("img-active");

      }
      else {
          $("#question").removeClass("question-inactive");
          $("#question").addClass("question-active");
          $("#fist").removeClass("fist-active");
          $("#fist").addClass("fist-inactive");
          $("img." + name).siblings().removeClass("img-active");
          $("img." + name).siblings().addClass("img-inactive");
          $("img." + name).removeClass("img-active");
          $("img." + name).addClass("img-inactive");

        }



  });





  });
