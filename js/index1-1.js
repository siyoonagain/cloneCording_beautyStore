$(document).ready(function(){

  $(".eventBanner dt").click(function(){
    $(".eventBanner dt").removeClass("on");
    $(this).addClass("on");
    $(".eventBanner dd").removeClass("on");
    $(this).next().addClass("on");
  });

  $(".bbs dt").click(function(){
    // $(".bbs dl dt").removeClass("on");
    $(this).parent().children("dt").removeClass("on");
    $(this).addClass("on");
    $(this).parent().children("dd").removeClass("on");
    $(this).next().addClass("on")
  });
  // 위의 표현 하나로 한번에 해결가능하다.
  // $(".bbs dt").click(function(){
  //   $(".bbs dl dt").removeClass("on");
  //   $(".bbs dl dt").removeClass("on");
  //   $(this).addClass("on");
  //   $(".bbs dl dd").removeClass("on");
  //   $(this).next().addClass("on")
  // });
  // $(".bbs2 dl dt").click(function(){
  //   $(".bbs2 dl dt").removeClass("on");
  //   $(this).addClass("on");
  //   $(".bbs2 dl dd").removeClass("on");
  //   $(this).next().addClass("on");
  // });
 $(".quickList img").hover(function(){
   $(this).attr("src",$(this).attr("src").replace(".gif","_ov.gif"));
 },function(){
   $(this).attr("src",$(this).attr("src").replace("_ov.gif",".gif"));
 });




















});
