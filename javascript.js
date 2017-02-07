$(".section1").addClass("closed");
$(".section2").addClass("closed");
$(".section3").addClass("closed");


function click1(){
    $(".section1").removeClass("closed");
    $(".section2").addClass("closed");
    $(".section3").addClass("closed");
  }

$(".header1").on("click",click1);


function click2(){
    $(".section1").addClass("closed");
    $(".section2").removeClass("closed");
    $(".section3").addClass("closed");
  }

$(".header2").on("click",click2);


function click3(){
    $(".section1").addClass("closed");
    $(".section2").addClass("closed");
    $(".section3").removeClass("closed");
  }

  $(".header3").on("click",click3);
