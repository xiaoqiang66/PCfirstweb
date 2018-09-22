$(function() {
		$(".one>li").hover(function(){
			$(this).find("dl").slideToggle(500,"elasticOut");
		})

	

	var n = 0

	// 添加无缝效果 把第一张复制一下放在最后一张后面
	$(".one>li:nth-child(3) div ul>li").eq(0).clone().appendTo($(".one>li:nth-child(3) div ul"));
	$(".one>li:nth-child(3) div ul>li").eq(1).clone().appendTo($(".one>li:nth-child(3) div ul"));
	$(".one>li:nth-child(3) div ul>li").eq(2).clone().appendTo($(".one>li:nth-child(3) div ul"));
	$(".one>li:nth-child(3) div ul>li").eq(3).clone().appendTo($(".one>li:nth-child(3) div ul"));
	$(".one>li:nth-child(3) div ul>li").eq(4).clone().appendTo($(".one>li:nth-child(3) div ul"));
	$(".one>li:nth-child(3) div ul>li").eq(5).clone().appendTo($(".one>li:nth-child(3) div ul"));
	//点击右按钮，图片向左移动，点击一次移动一张，循环无缝
	//获取ul距离左边的距离；
	var oldLeft = $(".one>li:nth-child(3) div ul").offset().left;
	var p = 0;
	var flag = true;
	$(".one>li:nth-child(3) div .right").click(function() {
		if(flag) {
		
			p = Math.floor(m/-200)
			if(p >= 17) {
				$(".one>li:nth-child(3) div ul").css("left", "0px")
				p = 0;
			}
			p++;
			$(".one>li:nth-child(3) div ul").animate({
				"left": -p * 200
			}, 500, function() {
				flag = true;
				
			});
			flag = false;

		}
		

	})
	$(".one>li:nth-child(3) div .left").click(function() {
		if(flag) {
			p = Math.ceil(m/-200)
			if(p == 0) {
				$(".one>li:nth-child(3) div ul").css("left", -200 * 17)
				p = 17
			}
			p--;
			$(".one>li:nth-child(3) div ul").animate({
				"left": -p * 200
			}, 500, function() {
				flag = true
			});
			flag = false
		}
	})

var m = 0;
$(".one>li").eq(2).mousedown(function(e) {
		// 清除浏览器 图片 默认行为
		event.preventDafault ? event.preventDafault() : (event.returnValue = false);
		// 获取页面坐标
		var oldX = e.clientX;
		 m = $(this).find("div").find("ul")[0].offsetLeft;
		console.log(m)

		$(window).on({
			"mousemove": function(event) {
				//清除 有字体是 默认选中
				window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
				// 距离差
				var x = event.clientX - oldX;
				m = m + x * 0.05
				if(m < -1200) {
					m = -1200
				}
				if(m > 0) {
					m = 0
				}

				$(".one>li").eq(2).find("ul")[0].style.left = m + "px";

			}
		})

	})
	$(".one>li").eq(2).mouseup(function() {
		$(window).off()
	})

})