var _this;

$(".notice_compontent").on("click",".box",function(){
	_this=$(this);
	$(".input_notice").on("keyup","input",function(){
		console.log(1)
		_this.find(".notice_nav_content").html($(this).val())
	})
	// 设置背景颜色
	$(".color_picker_container").on("click",".color",function(){
		$(document).mouseup(function(e){
		_this.find(".notice_container").css("background","#"+$(this).find(".color").eq(0).val())
		console.log($(this).find(".color").eq(0).val())
		})
	})
	// 重置背景颜色
	$(".editor_menu_group_control").on("click",".bg_color_reset",function(){
		
		_this.find(".notice_container").css("background","#FFF8E9");
	})

	// 设置字颜色
	$(".color_picker_container").on("click",".color",function(){
		$(document).mouseup(function(e){
			_this.find(".notice_nav_content").css("color","#"+$(this).find(".color").eq(1).val())
			// console.log($(this).find(".color").eq(1).val())
		})
	})
	// 重置字体颜色
	$(".editor_menu_group_control").on("click",".font_color_reset",function(e){
		_this.find(".notice_nav_content").css("color","#666666");
	})


})
// $(document).ready(function (){
//   $("#marquee").marquee();
// });