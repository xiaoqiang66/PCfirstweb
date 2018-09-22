$(function(){
	
	$(".head").load("01head.html");
	$(".foot").load("02foot2.html");
	
	
	var l = $(".img1").offset().left;
	var t = $(".img1").offset().top;
	$(".img1").on({
		"mousemove":function(e){
			var left = e.pageX;
			var top = e.pageY;
			var x = left - l-50;
			var y = top - t-50;
			//判断区间
			if(x <= 0){
				x=0;
			}
			if(y<=0){
				y=0
			}
			if(x>=200){
				x=200
			}
			if(y>=200){
				y=200
			}
			$(".show1")[0].style.left = x+"px";
			$(".show1")[0].style.top = y+"px";
			var bi = 3/4;
			$(".show2").css({
				"left":-x/bi+"px",
				"top": -y/bi +"px"
			})
		},
		"mouseenter":function(){
			$(".div-box>ul>li").eq(1).show();
		},
		"mouseleave":function(){
			$(".div-box>ul>li").eq(1).hide();
		}
	})
	
	
	//获取地址栏数据
	function getHash(name){
		var data = window.location.search.slice(1);
		console.log(data)
		var reg = new RegExp("(^|&)"+name+"=([a-zA-Z0-9]*)(&|$)");
		var res = reg.exec(data)
		console.log(res)
		if(res){
			return res[2];
		}else{
			return "";
		}
	}
	
	//获取嘻哈值
	if(getHash("type")){
		var a = getHash("type"),
			b = getHash("id");
		loadDetail(a,b)
		console.log(a,b)
	}
	
	
	//请求服务端数据
	function loadDetail(type,id){
		$.ajax({
			type: 'get',
			url: './js/article.php',
			data: {
				'type' : type || "",
				'id' : id || ""	
			},
			dataType: 'text',
			error: function(e){
				console.log(e)
			},
			success: function(data){
				//处理返回结果
		      	data = JSON.parse(data).data;
				console.log(data)
				$(".div-box h1").html(data.title)	
				$(".div-box ul li").eq(0).find("img")[0].src= data.coverImg	
				$(".div-box ul li").eq(1).find("img")[0].src= data.coverImg	
				$(".div-box>div").html(data.content)			
			
			
			


			}
		})
	}
	
	
})