$(function(){
	$(".head").load("01head.html");
	$(".foot").load("02foot2.html");
	
	new BaiduMap({
    id: "container2",
    title: {
        text: "南京珠江大厦",
        className: "title" // 选填--样式类名
    },
    content: {
        className: "content", // 选填--样式类名
		text: ["地址：南京玄武区珠江路280号", "电话：(010)65131892"]
    },
    point: {
        lng: "118.7988334688",
        lat: "32.0552612648"
    },
    level: 15, //  选填--地图级别--(默认15)
    type: true, // 选填--是否显示地图类型--(默认false)
    width: 320, // 选填--信息窗口width--(默认自动调整)
    height: 70, // 选填--信息窗口height--(默认自动调整)
    icon: { // 选填--自定义icon图标
        url: "img/icon.png",
        width: 36,
        height: 36
    }
});
	
	
})