$(document).ready(function(){

	/*天气hover态*/
	var timer;
	$("#city_weather").on("mouseenter", function(event){
		clearTimeout(timer);
		timer = setTimeout(function(){
			
				$("#s_mod_setweather").show();
			
		}, 1000);
		$("#city_weather").mouseleave(function(){
			clearTimeout(timer);
		});

	});
	$("#s_mod_setweather").on("mouseleave", function(){
		$("#s_mod_setweather").hide();
	});

	/*更多产品-hover态*/
	$("#s_bri").hover(function(){
		$("#more_pro").css({"minHeight": function(){
			var min = $(document).height();
			if(min < "600px") {
				min = "600px";
				return min;
			} 
			return min;
			}
		});
		$("#more_pro").fadeIn(300);
	});
	$("#more_pro").on("mouseleave", function(){
		$("#more_pro").fadeOut(300);
	});

	/*搜索框hover态*/
	$("#kw").on("mouseenter", function(){
		$(this).addClass("nobg_s_fm_hover");
	});
	$("#kw").on("mouseleave", function(){
		$(this).removeClass("nobg_s_fm_hover");
	});
	$("#kw").on("focus", function(){
		$(this).addClass("nobg_s_fm_focus");
	});
	$("#kw").on("focusout", function(){
		$(this).removeClass("nobg_s_fm_focus");
	});


	/*切换-导航*/
	$(".s-menu-item").on("click", function(){
		$(".s-menu-item").removeClass("current");
		$(this).addClass("current");
		var dataId;
		dataId = $(this).attr("data-id");
		$(".s-content").css("display","none");
		switch(dataId){
			case "1":
				$("#s_content_1").css("display","block");
				break;
			case "2":
				$("#s_content_2").css("display","block");
				break;
			case "100":
				$("#s_content_100").css("display","block");
				break;
		}
	});

});