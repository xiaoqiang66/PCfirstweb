$(function(){
	
	$(".caseBox1").height($(window).innerHeight()-50)
	
	
	
	$(".more").on({
		"mouseenter":function(){
			$(this).find("z").eq(0).animate({"width":93},500);
			$(this).find("z").eq(1).delay(500).animate({"width":0},500);
			
		},
		"mouseleave":function(){
			$(this).find("z").eq(0).animate({"width":0},500);
			$(this).find("z").eq(1).animate({"width":40},500);
		}
	})
	
	$(".box111").on({
		"mouseenter":function(){
			$(this).find(".img").animate({"right":0,"top":0},500,"linear");
			$(this).find(".chang1").animate({"width":1005},500,"linear");
			$(this).find(".chang2").animate({"height":360},500,"linear");
			$(this).find(".chang3").animate({"width":1005},500,"linear");
			$(this).find(".chang4").animate({"height":360},500,"linear");
			
		},
		"mouseleave":function(){
			$(this).find(".img").animate({"right":-30,"top":-30},500,"linear");
			$(this).find(".chang1").animate({"width":5},500,"linear");
			$(this).find(".chang2").animate({"height":5},500,"linear");
			$(this).find(".chang3").animate({"width":5},500,"linear");
			$(this).find(".chang4").animate({"height":5},500,"linear");
		}
	})
	
	
	
	
	var n = 0;		
	$(".case-see .left1").click(function(){
		n++;
		if(n%2==1){
			$(".case-see li").eq(0).find(".box111").animate({"left":-1035},500,"linear");
		}
		else{
			$(".case-see li").eq(0).find(".box111").animate({"left":0},500,"linear")
		}
		$(this).css({
			 	"transform": "rotate("+180*n+"deg)"
			})
	})
	
	$(".case-see .left2").click(function(){
		n++;
		if(n%2==1){
			$(".case-see li").eq(1).find(".box111").css({"transform": "rotateX(90deg)",})
			$(".box111").find(".img").animate({"right":0,"top":0},500,"linear");
			$(".box111").find(".chang1").animate({"width":1005},500,"linear");
			$(".box111").find(".chang2").animate({"height":360},500,"linear");
			$(".box111").find(".chang3").animate({"width":1005},500,"linear");
			$(".box111").find(".chang4").animate({"height":360},500,"linear");
		}
		else{
			$(".case-see li").eq(1).find(".box111").css({"transform": "rotateX(0deg)",})
			$(".box111").find(".img").animate({"right":-30,"top":-30},500,"linear");
			$(".box111").find(".chang1").animate({"width":5},500,"linear");
			$(".box111").find(".chang2").animate({"height":5},500,"linear");
			$(".box111").find(".chang3").animate({"width":5},500,"linear");
			$(".box111").find(".chang4").animate({"height":5},500,"linear");
		}
	})
	
	
	
	//滚轮事件
	
	
	// 浏览器兼容
	function MouseWheel(obj, fn) {
	    //如果是火狐，添加事件监听，否则正常绑定
	    var ff = window.navigator.userAgent.indexOf("Firefox");
	    if (ff == -1) {
	        _addEventListener(obj, "mousewheel", wheel)
	    }
	    else {
	        _addEventListener(obj, "DOMMouseScroll", wheel)
	    }
	    // 滚轮滚动时的事件驱动程序
	    function wheel(e) {
	        e = e || obj.event
	        // console.log(e)
	        //声明页面向下为true 向上为false
	        var down = true;
	        //判断往哪个方向滑动  简化版
	        if (e.wheelDelta) {
	            down = e.wheelDelta > 0;
	        }
	        else {
	            down = e.detail < 0;
	        }
	        fn && fn(down)
    	}

	}
	//封装添加事件监听
	function _addEventListener(obj, type, callback) {
	    if (window.addEventListener) {
	        obj.addEventListener(type, callback)
	    }
	    //IE浏览器判断
	    else {
	        obj == window ? document : abj;
	        obj.attachEvent("on" + type, callback)
		    }
	}

	
	
	
	//获取当前页面的地址栏
	var pageHash = window.location.hash.slice(1);
	console.log(window.location)
	//如果存在哈希值，滑动到指定屏幕
	if(pageHash){
		$(".screen>ul").animate({"top":$(".screen").height()*-pageHash},2000,"elasticOut",function(){
			flag = true;
		})
	}
	
	//多次滚动鼠标，算触发事件
	var count = 0;
	//记录当前的屏幕
	var screenIndex = 0;
	//节流阀
	var flag = true;
	MouseWheel($(document)[0],function(res){
		if(count > 5){
			//滚轮向上，页面向下
			if(res){
				console.log(count,screenIndex,flag)
//				如果当前屏数没到第一屏，允许滑动
				if(screenIndex > 0){
//					开关允许，执行滑动
					if(flag == true){
						flag = false;
						screenIndex--;
						var target = $(".screen").height();
						$(".screen>ul").animate({"top":-target*screenIndex},2000,"elasticOut",function(){
							flag = true;
						})
					}
					console.log(count,screenIndex,flag)
				}
				count = 0;
			}else{
				console.log(count,screenIndex,flag)
				
				//如果当前屏数没到最后一屏，允许滑动
				if(screenIndex < $(".screen li").length-1){
//					开关允许，执行滑动
					if(flag == true){
						flag = false;
						screenIndex++;
						var target = $(".screen").height();
						$(".screen>ul").animate({"top":-target*screenIndex},2000,"elasticOut",function(){
							flag = true;
						})
					}
					console.log(count,screenIndex,flag)
				}
				count = 0;
			}
		}
		count++;
	})
	
	
	
	
})
