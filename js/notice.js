var _this;
$(".box").clone().prependTo(".notice_compontent");
$(".notice_compontent").on("click",".box",function(){
	_this=$(this);
	$(".editor_menu_item").hide();
	_this.find(".editor_menu_item").show();
	
	
	
	$(".input_notice").on("keyup","input",function(){
		console.log($(".notice_nav_content").width())
		_this.find(".notice_nav_content").html($(this).val())
		var font=_this.find(".notice_nav_content").css("font-size").slice(0,2);
		var len=_this.find(".notice_nav_content").html().length;
		var str=_this.find(".notice_nav_content").html();
		console.log(typeof font);
		console.log(len);
		if(parseInt(font)*len>_this.find(".notice_nav_content_wrap").width()){			
			_this.find(".notice_nav_content").html('<marquee direction="left" scrollamount="2">'+str+'</marquee>')
		}else{
			_this.find(".notice_nav_content").html(str)
			_this.find(".notice_nav_content").html(str)
			
		}
	})
	$(document).mousemove(function(){
		// console.log(1)
		_this.find(".notice_container").css("background","#"+_this.find(".bg").val())		
			
		$(".bg_color_reset").click(function(e){
			$(".bg").val("FFF8E9")
			$(".bg").css("background-color","#FFF8E9");
			$(".notice_container").css("background","#FFF8E9");
			
		})
	})
	$(document).mousemove(function(){
		_this.find(".notice_nav_content").css("color","#"+_this.find(".font").val())		
		$(".font_color_reset").click(function(e){
			$(".font").val("666666")
			$(".font").css("background-color","#666666");
			$(".notice_nav_content").css("color","#666666");
			
		})

	})
	
})


