$(function(){
	$(".head").load("01head.html");
	$(".foot").load("02foot2.html");

	
	
	
	$(window).scroll(function(e){
		var n = $("html").scrollTop()+$(window).innerHeight();
		var m = $(".tab2 .tab2-lis2 .font-bg").offset().top;
		var m2 = $(".tab2 .tab2-lis2 .box1 dd").eq(0).offset().top;
		var m3 = $(".tab2 .tab2-lis2 .box1 dd").eq(2).offset().top;
		var m4 = $(".tab2 .tab2-lis2 .box1 dd").eq(4).offset().top;
		var m5 = $(".tab2 .tab2-lis2 .box1 dd").eq(1).offset().top;
		var m6 = $(".tab2 .tab2-lis2 .box1 dd").eq(3).offset().top;
		var m7 = $(".tab2 .tab2-lis2 .box3").offset().top;
	    if(m<=n){
	    	$(".tab2 .tab2-lis2 .font-bg ul").slideDown(1000)
	    }
	    else{
	    	$(".tab2 .tab2-lis2 .font-bg ul").slideUp(1500)
	    }
	    if(m2<=n){
	    	$(".tab2 .tab2-lis2 .box1 dd").eq(0).find(".box1-see").show().addClass("animated  bounceInRight");
	    }
	    else{
	    	$(".tab2 .tab2-lis2 .box1 dd").eq(0).find(".box1-see").hide().addClass("animated  bounceInLeft");
	    }
	    if(m3<=n){
	    	$(".tab2 .tab2-lis2 .box1 dd").eq(2).find(".box1-see").show().addClass("animated  bounceInRight");
	    }
	    else{
	    	$(".tab2 .tab2-lis2 .box1 dd").eq(2).find(".box1-see").hide().addClass("animated  bounceInLeft");
	    }
	     if(m4<=n){
	    	$(".tab2 .tab2-lis2 .box1 dd").eq(4).find(".box1-see").show().addClass("animated  bounceInRight");
	    }
	    else{
	    	$(".tab2 .tab2-lis2 .box1 dd").eq(4).find(".box1-see").hide().addClass("animated  bounceInLeft");
	    }
	    if(m5<=n){
	    	$(".tab2 .tab2-lis2 .box1 dd").eq(1).find(".box2-see").show().addClass("animated  bounceInLeft");
	    	$(".tab2 .tab2-lis2 .box1 dd").eq(1).find(".box2-see").find(".font ol").show(2500)
	    }
	    else{
	    	$(".tab2 .tab2-lis2 .box1 dd").eq(1).find(".box2-see").hide().addClass("animated  bounceInRight");
	    	$(".tab2 .tab2-lis2 .box1 dd").eq(1).find(".box2-see").find(".font ol").hide(100)
	    }
	    if(m6<=n){
	    	$(".tab2 .tab2-lis2 .box1 dd").eq(3).find(".box2-see").show().addClass("animated  bounceInLeft");
	    	$(".tab2 .tab2-lis2 .box1 dd").eq(3).find(".box2-see").find(".font ol").show(2500)
	    }
	    else{
	    	$(".tab2 .tab2-lis2 .box1 dd").eq(3).find(".box2-see").hide().addClass("animated  bounceInRight");
	    	$(".tab2 .tab2-lis2 .box1 dd").eq(3).find(".box2-see").find(".font ol").hide(100)
	    }
	    if(m7<=n){
	    	$(".tab2 .tab2-lis2 .box3").find("img").slideDown(500)
	    }
	    else{
	    	$(".tab2 .tab2-lis2 .box3").find("img").slideUp(500)
	    }
	   
	    
	    
	    
	    
	    
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

})