$(function(){
	/*演讲嘉宾详细信息*/
	$(".speakers_name button").click(function(){
		$(this).css({color:'#183249',textDecoration:'underline',border:'none',background:'#fff'});
	})
  	/*演讲嘉宾选项卡*/ 
   jQuery.selectSpeaker = function(speakerTit,speakerBox){
  	$(speakerBox).hide();
  	$(speakerTit+" .speakers-box:frist").addClass("border").show();
  	$(speakerBox+":first").show();
  	$(speakerTit+" li").click(function(){
  		$(speakerTit+" li").removeClass("border");
  		$(this).addClass("border");
  		$(speakerBox).hide();
  		var showBox = $(this).find("a").attr("tab");
  		$("#"+showBox).fadeIn(500);
  		return false;
  	})
  }
  $.selectSpeaker("#speakers_tabs" , ".speakers-box");
  $(".speaker_datebox1").click(function(){
    $(this).addClass("speakerTit_bg")
    $(".speaker_datebox3").removeClass("speakerTit_bg");
    $(".speaker_datebox2").removeClass("speakerTit_bg");
    $(".speaker-content-top").css('display','none');
    $("#speakers-box1").fadeIn();
    $("#speakers-box2").css('display','none');
    $("#speakers-box3").css('display','none');
    $("#speakers-box4").css('display','none');
    $("#speakers-box5").css('display','none');
    $("#speakers-box6").css('display','none');
    $("#speakers-box7").css('display','none');
    $(".speaker-content-top").css('display','none');
  })
  $(".speaker_datebox2").click(function(){
    //alert(1)
    $(this).addClass("speakerTit_bg");
    $(".speaker_datebox1").removeClass("speakerTit_bg");
    $(".speaker_datebox3").removeClass("speakerTit_bg");
    $(".speaker-content-top").fadeIn();
    $("#speakers-box1").css('display','none');
    $("#speakers-box2").fadeIn();
   // $("#speakers-box3").css('display','none');
   // $("#speakers-box4").css('display','none');
    //$("#speakers-box5").css('display','none');
    //$("#speakers-box6").css('display','none');
    $("#speakers-box7").css('display','none');
  })
 $(".speaker_datebox3").click(function(){
    $(this).addClass("speakerTit_bg");
    $(".speaker_datebox2").removeClass("speakerTit_bg");
    $(".speaker_datebox1").removeClass("speakerTit_bg");
    $(".speaker-content-top").css('display','none');
    $("#speakers-box1").css('display','none');
    $("#speakers-box2").css('display','none');
   $("#speakers-box3").css('display','none');
   $("#speakers-box4").css('display','none');
   $("#speakers-box5").css('display','none');
    $("#speakers-box6").css('display','none');
    $("#speakers-box7").fadeIn();
    $(".border_list1").addClass("border");
    $(".border_list2").removeClass("border");
    $(".border_list3").removeClass("border");
    $(".border_list4").removeClass("border");
    $(".border_list5").removeClass("border");
 })
 /*会议日程选项卡*/



 jQuery.angeda = function(agendaTit,agendaBox){
    $(agendaBox).hide();
    $(agendaTit+" .angeda-box:frist").addClass("border").show();
    $(agendaBox+":first").show();
    $(agendaTit+" li").click(function(){
      $(agendaTit+" li").removeClass("border");
      $(this).addClass("border");
      $(agendaBox).hide();
      var showBox = $(this).find("a").attr("tab");
      $("#"+showBox).fadeIn(500);
      return false;
    })
  }
$.angeda("#Agenda_tabs",".angeda-box");
$(".Agenda_datebox1").click(function(){
  
  $(this).addClass("speakerTit_bg");
  $(".Agenda_datebox2").removeClass("speakerTit_bg");
  $(".Agenda-content-top").css('display','none');
  $("#angeda-box").css('display','block');
  $("#angeda-box2").css('display','none');
  $("#angeda-box3").css('display','none');
  $("#angeda-box4").css('display','none');
  $("#angeda-box5").css('display','none');
  $("#angeda-box6").css('display','none');
  
})
$(".Agenda_datebox2").click(function(){
  $(this).addClass("speakerTit_bg"); 
  $(".Agenda_datebox1").removeClass("speakerTit_bg");
  $(".Agenda-content-top").fadeIn();
  $("#angeda-box").css('display','none');
  $("#angeda-box2").fadeIn();
  
  $("#angeda-box2").css('display','block');
  $("#angeda-box3").css('display','none');
  $("#angeda-box4").css('display','none');
  $("#angeda-box5").css('display','none');
  $("#angeda-box6").css('display','none');
  $(".border_list1").addClass("border");
    $(".border_list2").removeClass("border");
    $(".border_list3").removeClass("border");
    $(".border_list4").removeClass("border");
    $(".border_list5").removeClass("border");
})

 
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
      $("html,body").animate({scrollTop: $(id).offset().top+ -62 +"px"},1000);
    });
      /*ph*/
      $(".ph_ticket a").click(function(event){
      event.stopPropagation();
      var index = this.title;
      var id = '#'+'index_'+index;
      $("html,body").animate({scrollTop: $(id).offset().top+ -62 +"px"},1000);
    });
      /*手机购票*/
    $(".header_nav_ph ul li a").click(function(event){
      event.stopPropagation();
      var index = this.title;
      var id = '#'+'index_'+index;
      $("html,body").animate({scrollTop: $(id).offset().top+ -62 +"px"},1000);
    });

    /*banner按钮跳转*/
    $(".banner .ticket-btn a").click(function(event){
        event.stopPropagation();
        var index = this.title;
        var id = '#'+'index_'+index;
        $("html,body").animate({scrollTop: $(id).offset().top+ -62 +"px"},1000);
    })
    /*移动版nav*/
    $('.header_right ul+img').click(function(){
      $(".header_nav_ph").slideToggle();
    })
    $(".header_nav_ph ul li a").click(function(){
      $(".header_nav_ph").slideToggle();
    })
    /*往期回顾ph*/
    var reviewPages = $(".ph_lunbo ul li.ph_lunbo_img");
   // console.log(reviewPages)
    var btn = $(".ph_lunbo .ph_btn ul li");
   // console.log(btn)
    var num = 1;
    function reviewMove(){
      if(num==5){
        num = 0;
      }
      for(var i=0;i<reviewPages.length;i++){
        reviewPages[i].style.zIndex = 4;
        btn[i].style.background="#fff";
      }
      reviewPages[num].style.zIndex = 5;
      btn[num].style.background="#999";
      num++;
    }
    var t = setInterval(reviewMove,2000);

    /*演讲题目*/
    $(".arrow_bottom").click(function(){
        $(".speak_title_text").slideDown()
        $(".arrow_bottom").hide();
        $(".arrow_bottom1").fadeIn();
    })
    $(".arrow_bottom1").click(function(){
        $(".speak_title_text").slideUp()
        $(".arrow_bottom").fadeIn();
        $(".arrow_bottom1").hide();
    })
    /*分享到新浪微博*/
    $(".xinkang").click(function(){
      window.open('http://v.t.sina.com.cn/share/share.php?title='  + 'PMI(中国)2016项目管理大会（PMI会员/PMP） - 2016年10月22日 星期六 至 23日 星期日 - 北京国际会议中心 （分享自 @友付）&url=' + window.location.href);   
    })
     $(".weixin_fenxiang").click(function(){
      window.open('http://common.cnblogs.com/qrcode.html?url'  + 'PMI(中国)2016项目管理大会（PMI会员/PMP） - 2016年10月22日 星期六 至 23日 星期日 - 北京国际会议中心 （分享自 @友付）&url=' + window.location.href);   
    })
});