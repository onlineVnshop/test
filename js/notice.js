var _this;

$(".notice_compontent").on("click",".box",function(){
	_this=$(this);
	$(".input_notice").on("keyup","input",function(){
		console.log(1)
		_this.find(".notice_nav_content").html($(this).val())
	})
	$(document).mousemove(function(){
		console.log(1)
		$(".notice_container").css("background","#"+$(".color").val())		
			
		$(".bg_color_reset").click(function(e){
			$(".bg").val("FFF8E9")
			$(".bg").css("background-color","#FFF8E9");
			$(".notice_container").css("background","#FFF8E9");
			
		})
	})
	$(document).mousemove(function(){
		$(".notice_nav_content").css("color","#"+$(".font").val())		
		$(".font_color_reset").click(function(e){
			$(".font").val("666666")
			$(".font").css("background-color","#666666");
			$(".notice_nav_content").css("color","#666666");
			
		})

	})
})