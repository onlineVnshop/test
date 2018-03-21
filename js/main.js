  	
	  // 保存操作变量
		  var _this;
		  var id;
  
      $(".shop").on("click",".box",function(e){
		//   console.log(e);
		  _this=$(this);
		//   console.log(_this.find(".box"))
		  _this.find(".compentent_container").addClass("state");	
	});
	 if(!$(".compentent_container").hasClass("state")){
		$(".shop").on("click",".box",function(e){
			$(".shop_and_groups>div").eq(0).addClass("checked").siblings().removeClass("checked");
			$(".list_style_content>div").eq(0).addClass("checked").siblings().removeClass("checked");
			$(".control_card_fill>div").eq(0).addClass("checked").siblings().removeClass("checked");
			$(".size_show>div").eq(0).addClass("checked").siblings().removeClass("checked")
			$(".style_show_select>div>div").eq(0).addClass("checked").parent().parent().siblings().children().children().removeClass("checked")
			$(".shop_superscript_type>div>div").eq(0).addClass("checked").siblings().removeClass("checked")
			$(".shop_groups_one").css("display","block");
			$(".shop_groups_two").css("display","none");
			
			$(".card").eq(0).show();
			$(".card").eq(1).show();
			$(".card").eq(2).hide();
			$(".card").eq(3).show();
			$(".card").eq(4).hide();
			$(".buy_btn").show();
			$(".buy_btn_style").show();
		
		
		});  
	}
	
	
(function(){
		
		// console.log(str);
		// 右侧弹框
		$("section").on("click",".shop",function(){
			// console.log($(".model"));
			$("#model").css("display","block");
		})
		//切换商品和商品分组 
		$(".shop_and_groups").on("click",".big_circle",function(){
			// _this.find(".price_one span").css("color","green");
			
			$(this).addClass("checked").siblings().removeClass("checked");
			if($(this).attr("state")=="0"){
				$(".shop_groups_one").css("display","block");
				$(".shop_groups_two").css("display","none");
			}else {
				
				$(".shop_groups_two").css("display","block");
				$(".shop_groups_one").css("display","none");
			}
		});
		// 列表样式转化默认样式
		
		
		$(".card").eq(0).show();
		$(".card").eq(1).show();
		$(".card").eq(2).hide();
		$(".card").eq(3).show();
		$(".card").eq(4).hide();
		$(".buy_btn").show();
		$(".buy_btn_style").show();
		$(".box").html(shopComponents.shop_component_one);	
		$(".box").clone().prependTo(".shop");
			
		$(".list_style_content").on("click",".big_circle",function(){
			$(this).addClass("checked").siblings().removeClass("checked");
			console.log($(this).attr("state"));
			if($(this).attr("state")=="0") {				
				_this.find(".compentent_container").html(shopComponents.shop_component_one);	
				$(".card").eq(0).show();
				$(".card").eq(1).show();
				$(".card").eq(2).hide();
				$(".card").eq(3).show();
				$(".card").eq(4).hide();
				$(".size_show").show();
				$(".style_show").show();
				$(".shop_introduction_container").show();
				$(".shop_introduction").show();
				$(".shop_price_container").show();
				$(".buy_btn").show();
				$(".buy_btn_style").show();
				$(".shop_superscript_container").show();
				}else if($(this).attr("state")=="1"){
					_this.find(".compentent_container").html(shopComponents.shop_component_two);		
					$(".card").eq(0).show();
					$(".card").eq(1).show();
					$(".card").eq(2).show();
					$(".card").eq(3).show();
					$(".card").eq(4).show();
					$(".size_show").hide();
					$(".style_show").show();
					$(".shop_introduction_container").show();
					$(".shop_price_container").show();
					$(".shop_introduction").show();
					$(".buy_btn").show();	
					$(".shop_superscript_container").show();
				}else if($(this).attr("state")=="2"){
					_this.find(".compentent_container").html(shopComponents.shop_component_three);
					$(".card").eq(0).show();
					$(".card").eq(1).show();
					$(".card").eq(2).hide();
					$(".card").eq(3).show();
					$(".card").eq(4).hide();
					$(".size_show").hide();
					$(".buy_btn").show();
					$(".shop_introduction_container").show();
					$(".shop_introduction").show();
					$(".shop_price_container").show();
					$(".shop_superscript_container").show();
				}else if($(this).attr("state")=="3"){
					_this.find(".compentent_container").html(shopComponents.shop_component_four);
					$(".card").eq(0).show();
					$(".card").eq(1).show();
					$(".card").eq(2).hide();
					$(".card").eq(3).show();
					$(".card").eq(4).hide();
					$(".size_show").hide();
					$(".buy_btn").show();
					$(".buy_btn_style").show();
					$(".shop_introduction_container").hide();
					$(".shop_price_container").hide();
					$(".shop_superscript_container").show();
				}else if($(this).attr("state")=="4"){
					_this.find(".compentent_container").html(shopComponents.shop_component_five);
					$(".card").eq(0).hide();
					$(".card").eq(1).hide();
					$(".card").eq(2).hide();
					$(".card").eq(3).show();
					$(".card").eq(4).hide();
					$(".size_show").hide();
					$(".shop_introduction_container").show();
					$(".shop_introduction").hide();
					$(".shop_price_container").show();
					$(".buy_btn").show();
					$(".buy_btn_style").hide();
					$(".shop_superscript_container").show();
				}else if($(this).attr("state")=="5"){
					_this.find(".compentent_container").html(shopComponents.shop_component_six);
					$(".card").eq(0).hide();
					$(".card").eq(1).hide();
					$(".card").eq(2).hide();
					$(".card").eq(3).show();
					$(".card").eq(4).hide();
					$(".size_show").hide();
					$(".shop_introduction_container").show();
					$(".shop_introduction").hide();
					$(".shop_price_container").show();
					$(".buy_btn").show();
					$(".buy_btn_style").hide();
					$(".shop_superscript_container").show();
				}
		})
		// 图片内容填充
		$(".control_card_fill").on("click",".big_circle",function(){
			$(this).addClass("checked").siblings().removeClass("checked");
		})

		// 显示比例
		$(".size_show").on("click",".big_circle",function(){
			$(this).addClass("checked").siblings().removeClass("checked");
			if($(this).attr("state")=="0"){
				_this.find(".shop_img_one img").css("height","190px");
			}else{
				_this.find(".shop_img_one img").css("height","290px");
			}
			
		})

		// 显示样式
		$(".style_show_select div").on("click",".big_circle",function(){

			$(this).addClass("checked").parent().siblings().children().removeClass("checked");
			console.log($(".little_picture").hasClass("checked"));
			console.log(($(".little_picture").hasClass("checked")&&$(this).attr("card")==0));
			if($(".big_circle").attr("state")==0&&$(this).attr("card")==0){
				
				_this.find(".container_one").css({
					"width":"288px",
					"border":"1px solid #fff"
				});
				$(".buy_btn").show();
				$(".buy_btn_style").show();
			}else if($(".big_circle").attr("state")==0&&$(this).attr("card")==1){
				
				_this.find(".container_one").css({
					"width":"288px",
					"border":"1px solid #e5e5e5"
				});
				$(".buy_btn").show();
				$(".buy_btn_style").show();
			}else if($(".big_circle").attr("state")==0&&$(this).attr("card")==3){
				$(".buy_btn").hide();
				$(".buy_btn_style").hide();
			}
			
		})
		$(".style_show_select div").on("click",".big_circle",function(){
			if($(".little_picture").hasClass("checked")){
				if($(this).attr("card")==0){
					_this.find(".container_two a").css({
						"border":"1px solid #fff",
						"width":"151px",
						"height":"173px"
					});
				}else if($(this).attr("card")==1){
					_this.find(".container_two a").css({
						"width":"143px",
						"height":"165px",
						"margin":"4px 4px",
						"border":"1px solid #e5e5e5"
					});
				}else if($(this).attr("card")==2){
					_this.find(".container_two ").css({
						"width":"140px"
					})
					$(function() {
				    var $container = $('.container');
				    $container.imagesLoaded(function() {
				        $container.masonry({
				                itemSelector: '.container_two',
				                gutter: 20,
				                isAnimated: true,
				            });
				     });
				})
				}else if($(this).attr("card")==3){
					$(".shop_introduction_container").show();
					$(".shop_introduction").hide();
					$(".shop_price_container").show();
					$(".shop_superscript_container").show();
				}else if($(this).attr("card")==4){
					$(".shop_superscript_container").show();
					$(".shop_introduction_container").hide();
					$(".shop_introduction").hide();
					$(".shop_price_container").hide();
				}
			}
		});
		$(".style_show_select div").on("click",".big_circle",function(){
			if($(".big_little_picture").hasClass("checked")){
				if($(this).attr("card")==0){
					_this.find(".container_three_one").css({
						"border":"1px solid #fff",
						"width":"302px"
					});
					_this.find(" .container_three_two a").css({
						"border":"1px solid #fff",
						"width":"145px",
						
					});
				}else if($(this).attr("card")==1){
					_this.find(".container_three_one").css({
						"border":"1px solid #e5e5e5",
						"width":"300px",
						"margin":"3px 2px"
					});
					_this.find(" .container_three_two a").css({
						"border":"1px solid #e5e5e5",
						"width":"141px",
						"margin":"3px 2px"
						
					});
				}else if($(this).attr("card")==3){
					$(".shop_introduction").hide();
					_this.find(".text_message_three_one div h3 , .text_message_three_one div p").css({
						"text-align":"center"
					});
					_this.find(".price_three_one i").css({
						"display":"none"
					});
					_this.find(".price_three_one span").css({
						"float":"none",
						"display":"block",
						"text-align":"center"
					});
					_this.find(".text_message_three_two h3").css("text-align","center");
					_this.find(".price_three_two i").css("display","none");
					_this.find(".price_three_two").css("text-align","center")
				}
			}
		})
		
		$(".style_show_select div").on("click",".big_circle",function(){
			if($(".detail_list").hasClass("checked")){
				if($(this).attr("card")==0){
					$(".sub_title_four").css("display","none");
					$(".container_four a").css({
						"width":"288px",
						"height":"118px",
						"display":"block",
						"border":"1px solid ##e5e5e5",
						"margin":"5px 15px 15px 15px"
					});
					
				}else if($(this).attr("card")==1){
					$(".sub_title_four").css("display","block");
					
				}else if($(this).attr("card")==3){
				
					$("sub_title_four").css("display","none");
					_this.find(".container_four a").css({
						"width":"318px",
						"height":"100px",
						"padding":"4px 4px",
						"border":"1px solid #fff"
					});
					_this.find(".container_four").css({
						"borderBottom":"1px solid #fff"
					})
				}
			}		

		})
		
		// 显示内容
		$(".content_show_list").on("click",".square",function(){
			// console.log($(this));
			if(!$(this).hasClass("cancle")){
				$(this).addClass("cancle");
			}else{
				$(this).removeClass("cancle");
			};
			if($(".shop_introduction_container>div").hasClass("cancle")){
				$(".shop_introduction").css("display","block");
				
				_this.find(".text_message_one div h3").show();
				// $(".text_message_one div p").show();
				if($(".shop_introduction div").hasClass("cancle")){
					_this.find(".text_message_one div p").show();
				}else{
					_this.find(".text_message_one div p").hide();
				}
				_this.find(".text_message_two h3").show();
				_this.find(".text_message_three_one h3").show();
				if($(".shop_introduction div").hasClass("cancle")){
					_this.find(".text_message_three_one div p").show();
				}else{
					_this.find(".text_message_three_one div p").hide();
				}
				_this.find(".text_message_three_two h3").show();
				_this.find(".text_message_five h3").show();
				_this.find(".text_message_six h3").show();

			}else{
				$(".shop_introduction").css("display","none");
				_this.find(".text_message_one div h3").hide();
				_this.find(".text_message_one div p").hide();
				_this.find(".text_message_two h3").hide();
				_this.find(".text_message_three_one h3").hide();
				_this.find(".text_message_three_one p").hide();
				_this.find(".text_message_three_two h3").hide();
				_this.find(".text_message_six h3").hide();
			};
			if($(".shop_price_container div").hasClass("cancle")){
				_this.find(".price_one span").show();
				_this.find(".price_two span").show();
				_this.find(".price_three_one span").show();
				_this.find(".price_three_two span").show();
				_this.find(".price_five em").show();
				_this.find(".price_six em").show();
			}else{
				_this.find(".price_one span").hide();
				_this.find(".price_two span").hide();
				_this.find(".price_three_one span").hide();
				_this.find(".price_three_two span").hide();
				_this.find(".price_five em").hide();
				_this.find(".price_six em").hide();
				
			};
			if(!$(".buy_btn>div").hasClass("cancle")){
				_this.find(".price_one span").show();
				_this.find(".text_message_one div h3").css("text-align","center");
				_this.find(".text_message_two h3").css("text-align","center");
				_this.find(".text_message_three_one h3").css("text-align","center");
				_this.find(".text_message_three_two h3").css("text-align","center");
				_this.find(".price_one span").css({
					"text-align":"center",
					"display":"block",
					"margin-left":"32%"

				});
				_this.find(".price_two span").css({
					"text-align":"center",
					"display":"block",
					// "margin":"0 auto",
					"margin-left":"-7%"
				});
				_this.find(".price_three_one span").css({
					"text-align":"center",
					"display":"block",
					"margin-left":"32%"
				});
				_this.find(".price_three_two span").css({
					"text-align":"center",
					"display":"block",
					"margin-left":"32%"
				});

				_this.find(".text_message_one div p").css("text-align","center");
				_this.find(".text_message_two p").css("text-align","center");
				_this.find(".text_message_three_one p").css("text-align","center");
				_this.find(".text_message_three_two p").css("text-align","center");
			}

			if($(".buy_btn>div").hasClass("cancle")){
				$(".buy_btn_style").show();
				_this.find(".price_one i").show();
				_this.find(".price_two i").show();
				_this.find(".price_three_one i").show();
				_this.find(".price_three_two i").show();
				_this.find(".price_five span").show();
				_this.find(".price_six span").show();
			}else{
				$(".buy_btn_style").hide();
				$(".buy_btn_style").hide();
				_this.find(".price_one i").hide();
				_this.find(".price_two i").hide();
				_this.find(".price_three_one i").hide();
				_this.find(".price_three_two i").hide();
				_this.find(".price_five span").hide();
				_this.find(".price_six span").hide();
			};
			if($(".shop_superscript_container>div").hasClass("cancle")){
				$(".shop_superscript_type").show();
			}else{
				$(".shop_superscript_type").hide();
			}
		
		})
		// 购买按钮样式
		$(".buy_btn_style div").on("click",".big_circle",function(){
			$(this).addClass("checked").parent().siblings().children().removeClass("checked");
			if($(this).attr("btn")==0){
				console.log(1)
				_this.find(".price_one i").html("1");
				_this.find(".price_two i").html("1");
				_this.find(".price_three_one i").html("1");
				_this.find(".price_three_two i").html("1");
				_this.find(".price_four span").html("1");
				_this.find(".price_five i").html("1");
				_this.find(".price_six i").html("1");
			}else if($(this).attr("btn")==1){
				console.log(2)
				_this.find(".price_one i").html("2");
				_this.find(".price_two i").html("2");
				_this.find(".price_three_one i").html("2");
				_this.find(".price_three_two i").html("2");
				_this.find(".price_four span").html("2");
				_this.find(".price_five i").html("2");
				_this.find(".price_six i").html("2");
			}else if($(this).attr("btn")==2){
				console.log(3)
				_this.find(".price_one i").html("3");
				_this.find(".price_two i").html("3");
				_this.find(".price_three_one i").html("3");
				_this.find(".price_three_two i").html("3");
				_this.find(".price_four span").html("3");
				_this.find(".price_five i").html("3");
				_this.find(".price_six i").html("3");
			}else if($(this).attr("btn")==3){
				console.log(4)
				_this.find(".price_one i").html("4");
				_this.find(".price_two i").html("4");
				_this.find(".price_three_one i").html("4");
				_this.find(".price_three_two i").html("4");
				_this.find(".price_four span").html("4");
				_this.find(".price_five i").html("1");
				_this.find(".price_six i").html("4");
			}
		})
		// 商品角标选择
		$(".shop_superscript_type div").on("click",".big_circle",function(){
			$(this).addClass("checked").parent().siblings().children().removeClass("checked");
			if($(this).attr("state")==0){
				_this.find(".icon_one").html("1");
				_this.find(".super_script_two i").html("1");
				_this.find(".icon_three_one i").html("1");
				_this.find(".super_script_three_two i").html("1");
				_this.find(".super_script_four i").html("1");
				_this.find(".super_script_five i").html("1");
				_this.find(".super_script_six i").html("1");
			}else if($(this).attr("state")==1){
				_this.find(".icon_one").html("2");
				_this.find(".super_script_two i").html("2");
				_this.find(".icon_three_one i").html("2");
				_this.find(".super_script_three_two i").html("2");
				_this.find(".super_script_four i").html("2");
				_this.find(".super_script_five i").html("2");
				_this.find(".super_script_six i").html("2");
			}else if($(this).attr("state")==2){
				_this.find(".icon_one").html("3");
				_this.find(".super_script_two i").html("3");
				_this.find(".icon_three_one i").html("3");
				_this.find(".super_script_three_two i").html("3");
				_this.find(".super_script_four i").html("3");
				_this.find(".super_script_five i").html("3");
				_this.find(".super_script_six i").html("3");
			}else if($(this).attr("state")==3){
				_this.find(".icon_one").html("4");
				_this.find(".super_script_two i").html("4");
				_this.find(".icon_three_one i").html("4");
				_this.find(".super_script_three_two i").html("4");
				_this.find(".super_script_four i").html("4");
				_this.find(".super_script_five i").html("4");
				_this.find(".super_script_six i").html("4");
			};
			if($(this).attr("state")=="4"){
				
				$(".files_show_container").show();
			}else{
				$(".files_show_container").hide();
			}
		});
		
})()

		
	

