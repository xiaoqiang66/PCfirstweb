$(function(){
	$(".head").load("01head.html");
	$(".foot").load("02foot.html");
	
	
	var timer1 = null;
	var pc = 0;
	var xh = 0;
	$(".tab2>.box>.tab2-lun-box li:eq(0)").clone().appendTo(".tab2>.box>.tab2-lun-box ul");
	$(".tab2>.box>.tab2-lun-box ol>li")[0].style.background = "red";
	$(".tab2>.box>.tab2-lun-box ol>li").mouseenter(function(){
		$(".tab2>.box>.tab2-lun-box ol>li").css("background","white");
		$(this).css("background","red");
		$(".tab2>.box>.tab2-lun-box ul").animate({"left":-980*$(this).index()},500,"linear");
		pc = $(this).index();
		xh  = $(this).index();
	})
	/*声明阀值*/
	var flag = true;
	$(".tab2>.box>.right").click(function(){
		if(flag){
			play();
			flag = false
		}	
		console.log(pc)
	})
	$(".tab2>.box>.left").click(function(){
		if(flag){
			if(pc==0){
				$(".tab2>.box>.tab2-lun-box ul").css("left","-7840px")
				pc = 8;
			}
			pc--;
			$(".tab2>.box>.tab2-lun-box ul").animate({"left":-980*pc,},500,function(){flag = true});
			if(xh==0){
				xh=8;
			}
			xh--;
			$(".tab2>.box>.tab2-lun-box ol>li").css("background","white");
		    $(".tab2>.box>.tab2-lun-box ol>li").eq(xh).css("background","red");
			flag = false
		}
		
	})
	$(".tab2").on({
		"mouseover":function(){$(".tab2>.box>p").show(),
								clearInterval(timer1)},
		"mouseout":function(){$(".tab2>.box>p").hide(), 
								clearInterval(timer1),
        						timer1 = setInterval(play,3000)}
	})
	timer1 = setInterval(play,3000);
	function play(){
		if(pc>=8){
			$(".tab2>.box>.tab2-lun-box ul").css("left","0")
			pc = 0;
		}
		pc++;
		$(".tab2>.box>.tab2-lun-box ul").animate({"left":-980*pc},500,function(){flag = true});
		if(xh==7){
			xh=-1;
		}
		xh++;
		$(".tab2>.box>.tab2-lun-box ol>li").css("background","white");
		$(".tab2>.box>.tab2-lun-box ol>li").eq(xh).css("background","red");
	}
	
	
	
	//需求：文字向下流
	//获取画布
	var cvs = document.getElementById("cvs");
	//创建画布 的上下文
	var cts = cvs.getContext("2d")
	//创建页面可视区域宽高，并且渲染cvs的宽高
	var W,H;
	cvs.width = W = $(".tab3").width();
	cvs.height = H = 600;
	
	//计算列
	var column = Math.floor(W/15);
	//存储每列的高度  给初始一个高度
	var arrY = Array(column).join(0).split('')
	/*var arrY = [];
	for(var i = 0;i<column;i++){
		arrY.push(0)
	}*/
	
	//设置上屏文字
	var str = ["*","*","*","*","*","*"];
	
	//封装绘画函数
	function draw(){
		//设置样式,渲染canvas的背景，因为多次重叠
		cts.fillStyle = "rgba(3,9,37,.1)";
		cts.fillRect(0,0,W,H);
		//设置文字样式
		cts.font = "15px Microsoft yahei";
		var r = parseInt(Math.random()*255);
		var g = parseInt(Math.random()*255);
		var b = parseInt(Math.random()*255);
		var color = "rgb("+r+","+g+","+b+")";
		cts.fillStyle = color;
		//渲染文字
		for(var i = 0;i<arrY.length;i++){
			//获取渲染字符
			var s = str[parseInt(Math.random()*str.length)]
			/*var s = String.fromCharCode(parseInt(Math.random()*95));*/  /*获取编码*/
			/*计算文字位子*/
			var x = i*15;
			var y = arrY[i]*15;
			cts.fillText(s,x,y);
			//如果当前渲染的位置，回0
			if(y>=H && Math.random()>0.9){
				arrY[i] = 0;
			}
			//渲染完毕，跟新文字的位置y
			arrY[i]++;
		}
		
	}
	draw();
	setInterval(draw,30)
	
	$(".tab4 li").hover(function(){
		$(this).find(".tab4-box").stop().slideToggle(500);
		$(this).find("dl dd").stop().eq(0).slideToggle(500);
		$(this).find("dl button").stop().eq(0).fadeToggle();
		
	})
	
	
	
	
	$(".tab4 li").on({
		"mouseenter":function(){
			$(this).find("dl button").eq(1).animate({"left":"85px"},500);
			$(this).find("dd").eq(1).css({"color":"#08cccc"});
			$(this).find("dd").eq(2).find("div").css({"border-bottom-color":"#08cccc"});
			$(this).find("dd").eq(4).find(".dd-box1").animate({
												"left":"161px",
												"opacity":"1"
											},1000)
			$(this).find("img").css({"transform":"scale(1)"})
			},
		"mouseleave":function(){
			$(this).find("dl button").eq(1).animate({"left":"35px"},500);
			$(this).find("dd").eq(1).css({"color":"black"});
			$(this).find("dd").eq(2).find("div").css({"border-bottom-color":"black"});
			$(this).find("dd").eq(4).find(".dd-box1").animate({
												"left":"33px",
												"opacity":"0"
											},1000)
			$(this).find("img").css({"transform":"scale(0)"})
			}
		
	})
	
$(".tab2>.box>.tab2-lun-box li button").on({
	"click":function(){
		$(".tab2>.box>.tab2-lun-box li .show").show(500);
		clearInterval(timer1);
	}
})
$(".tab2>.box>.tab2-lun-box li .show h3").on({
	"click":function(){
		$(".tab2>.box>.tab2-lun-box li .show").slideUp(500);
	}
})	
	
	
//$(".house").hover(function(){
//	$(".house>dl").slideToggle(500);
//})
	
	
	
	
function sco(n,obj){
	$(".house dd").eq(n).on("click",function(){
		$("html").animate({
		scrollTop: $(obj).offset().top-80
		},2000);
		})
	}
	
											
	sco(0,"#a")
	sco(1,"#b")
	sco(2,"#c")
	sco(3,"#d")
	sco(4,"#e")
	sco(5,"#f")
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})