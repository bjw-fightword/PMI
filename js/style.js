$(function(){
	/*演讲嘉宾详细信息*/
	$(".speakers_name button").click(function(){
		$(this).css({background:'none',color:'#183249',textDecoration:'underline',border:'none'});
	})
  	/*演讲嘉宾选项卡*/ 
   jQuery.selectSpeaker = function(speakerTit,speakerBox){
  	$(speakerBox).hide();
  	$(speakerTit+" .speakers-box:frist").addClass("speakerTit_bg").show();
  	$(speakerBox+":first").show();
  	$(speakerTit+" li").click(function(){
  		$(speakerTit+" li").removeClass("speakerTit_bg");
  		$(this).addClass("speakerTit_bg");
  		$(speakerBox).hide();
  		var showBox = $(this).find("a").attr("tab");
  		$("#"+showBox).fadeIn(500);
  		return false;
  	})
  }
  $.selectSpeaker("#speakers_tabs" , ".speakers-box");





  /*会议日程选项卡*/
 $('#myTab li:eq(0) a').tab('show');






  /*往期回顾轮播*/
    $('#dg-container').gallery({
        autoplay  : true
    });
    /*返回顶部*/ 
    $(window).scroll(function(){
      if($(window).scrollTop()>100){
        $(".return-top").fadeIn();
      }else{
        $(".return-top").fadeOut();
      }
    })
    $(".return-top").click(function(){
      $("body").animate({scrollTop:0});
      $(document.documengElement).animate({scrollTop:0});
    })
    /*点击logo返回顶部*/
     $(".header_left").click(function(){
      $("body").animate({scrollTop:0});
      $(document.documengElement).animate({scrollTop:0});
    })
     /*微信扫码*/
    $("#weixin").hover(function(){
        $(".erweima").stop();
        $(".erweima").fadeIn();
    },function(){
        $(".erweima").stop();
        $(".erweima").fadeOut();
    })
    /*楼层跳转*/
    $(".header_nav ul li a").click(function(event){
      event.stopPropagation();
      var index = this.title;
      var id = '#'+'index_'+index;
      $("html,body").animate({scrollTop: $(id).offset().top+"px"},1000);
    });
    /*banner按钮跳转*/
    $(".banner .ticket-btn a").click(function(event){
        event.stopPropagation();
        var index = this.title;
        var id = '#'+'index_'+index;
        $("html,body").animate({scrollTop: $(id).offset().top+"px"},1000);
    })
});