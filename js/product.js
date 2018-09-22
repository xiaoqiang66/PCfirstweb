$(function(){
	
	$(".head").load("01head.html");
	$(".foot").load("02foot2.html");
	
	

	var mm = 0
	$(".product ul>li>.big").click(function(){
		var that = this;
		$(this).parent().animate({
			"margin-left": "-250px"
		},1000,"linear");
		$(this).parent().siblings().animate({
			"margin-left": "0px"
		},1000,"linear");
		$(this).parent().find("dl").slideToggle();
		$(this).parent().siblings().find("dl").slideUp();
		
		console.log($(".product ul>li").eq(0)[0].offsetHeight)
		console.log($(".product ul>li").eq(1)[0].offsetHeight)
		console.log($(".product ul>li").eq(2)[0].offsetHeight)
		
		var h = $(this).parent()[0].offsetHeight;
		console.log(h)
		if(h==1206||h==474||h==108){
			$(this).parent().animate({
				"margin-left": "0px"
			},1000,"linear");
		}
		mm++;
		if(mm%2==1){
			$(this).find(".p1").css({"transform":"rotate(360deg)"})
		}
			
		else{
			$(this).find(".p1").css({"transform":"rotate(720deg)"})
		}
	
		var n = $(this).parent().index()
			$.ajax({
				type:"get",
				url:"./js/list.php",
				data:{'id':n},
				dataType: "text",
				success:function(res){
					$(".product ul>li>.big").eq(n).next("dl").html("");
					res = JSON.parse(res.slice(1))
					$.each(res.data.list,function(k,v) {
						var temp = $("#muban").clone().removeAttr("style");
						temp.find("img").attr('src',v.coverImg);
						temp.find(".p-one").html("　"+v.title+'<a href="productShow.html?type=xiaoniaoNews&id='+v.sysId+'">MORE</a>');
						temp.find(".p-two").html(v.describe);

						$(".product ul>li>.big").eq(n).next("dl").append(temp)	
						
						
					})
				}
			})	
			
			
			
	})

	$(".new-main>ul").on("click","li",function(){
		window.location.href = "detail.html?type=xiaoniaoNews&id="+$(this).attr("sysId")
	})
		
		
		
		
		
		
		
		
		
	
	$(".product ul>li dl").on("mouseenter","dd",function(){
			$(this).css({"box-shadow": "0 0 3px 3px red"});
			$(this).find("a").animate({"margin-left": 35},500,);
			$(this).find("a").css({"opacity":1})
			$(this).find("div").animate({"left":10,"top":-10},500,"linear");
			$(this).find("div").css({"box-shadow": "0 0 3px 3px red"});
	})
	$(".product ul>li dl").on("mouseleave","dd",function(){
			$(this).css({"box-shadow": "none"});
			$(this).find("a").css({"opacity":0})
			$(this).find("a").animate({"margin-left": 0},500,);
			$(this).find("div").css({"box-shadow": "none"});
			$(this).find("div").animate({"left":0,"top":0},500,"linear");
	})
	
	
//				
	

	
	
})