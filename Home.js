$(document).ready(function(){
  flag=0;
  $(".icon").click(function(){
    if(flag==0)
    {
      $(".main").css('box-shadow','inset 0px 0px 0px 30px white,inset 0px -70px 0px 30px white ');
      $(".main").css('background-color','rgba(0,0,0,0.2)');
      $(".line").css('background-color','black');
      $(".m1").animate({top:'40%'},200);
      $(".m2").animate({top:'40%'},200);
      $(".m3").animate({top:'40%'},200);
      $(".m4").animate({top:'40%'},200);
      flag=1;
    }

    else{
      $(".main").css('box-shadow','inset 0px 0px 0px 0px black,inset 0px 0px 0px 0px black');
      $(".main").css('background-color','rgba(0,0,0,0)');
      $(".line").css('background-color','white');

      $(".m1").animate({top:'100%'},200);
      $(".m2").animate({top:'100%'},200);
      $(".m3").animate({top:'100%'},200);
      $(".m4").animate({top:'100%'},200);
      flag=0;
    }
  })
})
