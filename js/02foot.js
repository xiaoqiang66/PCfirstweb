$(function(){
	
	
	

var n = 0;
setInterval(function(){
	if(n == 5){
		n=0;
	}
	n++;
	$(".foot-img>img")[0].src = "img/foot-img"+n+".jpg"
},2000)

$(".foot-img>p i:nth-child(1)").hover(function(){
	$(".foot-img>.p5").fadeToggle(1000)
	
})


//表单样式
//失去焦点
$(".content1>div:nth-child(4) input").eq(0).blur(function(){
	var val1 = $(this).val();
	var reg = /^[\u4e00-\u9fa5]{2,6}$/;
    var res = reg.test(val1);
    num(res,0);	
    if(val1==""){
    	$(".content1>div:nth-child(4) p").eq(0).html("")
    }
})
$(".content1>div:nth-child(4) input").eq(1).blur(function(){
	var val2 = $(this).val();
	var reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;
    var res = reg.test(val2);
    num(res,1);	
     if(val2==""){
    	$(".content1>div:nth-child(4) p").eq(1).html("")
    }
})
$(".content1>div:nth-child(4) input").eq(2).blur(function(){
	var val3 = $(this).val();
	var reg = /^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var res = reg.test(val3);
    num(res,2);	
     if(val3==""){
    	$(".content1>div:nth-child(4) p").eq(2).html("")
    }
})


function num(obj, n) {
        if (obj == true) {
            $(".content1>div:nth-child(4) p").eq(n).html("正确");
            $(".content1>div:nth-child(4) p").eq(n)[0].style.color = "green";
        }
        else {
            $(".content1>div:nth-child(4) p").eq(n).html("错误，请重新输入");
            $(".content1>div:nth-child(4) p").eq(n)[0].style.color = "red";
        }
    }

})
