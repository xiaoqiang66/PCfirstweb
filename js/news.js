$(function(){
	$(".head").load("01head.html");
	$(".foot").load("02foot2.html");
	
	var vid = document.getElementsByTagName("video");
	console.log(vid)
	$(".content2>div").click(function(){
		$(".content2").hide();
		$(".content2 li").removeClass("watch")
		for(var i =0;i<vid.length;i++){
			vid[i].pause()
		}
		
		
	})
	
	$(".content1 li").click(function(){
		$(".content2").show();
	})
	
	$(".last1>.imp2 li").click(function(){

		var n = $(this).index();
		$(".content2 li").eq(n).addClass("watch")
	})
	$(".last2 li").click(function(){
		var n1 = $(this).index();
		$(".content2 li").eq((n1+4)).addClass("watch")
	})
	
	$(".last3 li").click(function(){
		var n2 = $(this).index();
		$(".content2 li").eq((n2+15)).addClass("watch")
	})
	
	
})