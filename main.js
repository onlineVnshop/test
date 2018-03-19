
(function(){
		// 右侧弹框
		$("section").on("click",".shop",function(){
			// console.log($(".model"));
			$("#model").css("display","block");
		})
		//切换商品和商品分组 
		$(".shop_and_groups").on("click",".big_circle",function(){
			$(this).addClass("checked").siblings().removeClass("checked");
			if($(this).attr("state")=="0"){
				$(".shop_groups_one").css("display","block");
				$(".shop_groups_two").css("display","none");
			}else {
				
				$(".shop_groups_two").css("display","block");
				$(".shop_groups_one").css("display","none");
			}
		});
		// 列表样式转化
		$(".compentent_container").html(shopComponents.shop_component_one);		
		$(".list_style_content").on("click",".big_circle",function(){
			$(this).addClass("checked").siblings().removeClass("checked");
			console.log($(this).attr("state"));
			if($(this).attr("state")=="0") {				
				$(".compentent_container").html(shopComponents.shop_component_one);	
				}else if($(this).attr("state")=="1"){
					$(".compentent_container").html(shopComponents.shop_component_two);		
				}else if($(this).attr("state")=="2"){
					$(".compentent_container").html(shopComponents.shop_component_three);
				}else if($(this).attr("state")=="3"){
					$(".compentent_container").html(shopComponents.shop_component_four);
				}else if($(this).attr("state")=="4"){
					$(".compentent_container").html(shopComponents.shop_component_five);
				}else if($(this).attr("state")=="5"){
					$(".compentent_container").html(shopComponents.shop_component_six);
				}
		})
		// 图片内容填充
		$(".control_card_fill").on("click",".big_circle",function(){
			$(this).addClass("checked").siblings().removeClass("checked");
		})

		// 显示比例
		$(".size_show").on("click",".big_circle",function(){
			$(this).addClass("checked").siblings().removeClass("checked");
		
		})
		// 显示样式
		$(".style_show").on("click",".big_circle",function(){
			$(this).addClass("checked").siblings().removeClass("checked");
		
		})
		// 显示内容
		$(".content_show_list").on("click",".square",function(){
			$(this).addClass("cancle").siblings().removeClass("cancle");
		
		})
})()
	
		
	

