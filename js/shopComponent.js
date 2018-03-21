/*
*@商品组件
*/
(function(){
	// 创建组件对象
	var shopComponents={};
	shopComponents.shop_component_one='<div class="compentent_container"><ul class="shop_component_one"><div class="btn_top">+</div><div class="btn_down">+</div><div class="clear">x</div><li class="container_one"><div class="shop_img_one"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"></div><div class="text_message_one"><div><h3>此处显示商品</h3><p style="font-size:12px">此处显示商品描述</p></div><div class="price_one clearfloat"><span>￥999.00</span><i></i></div></div> <div class="icon_one"><i>+</i></div></li></ul></div>';
	shopComponents.shop_component_two='<div class="compentent_container"><div class="shop_component_two"><div class="btn_top">+</div><div class="btn_down">+</div><div class="clear">x</div><ul class="container"><li class="container_two"><a href="#"><div class="shop_img_two"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_two"><i>*</i></div></div><div class="text_message_two"><h3 class="title">此处显示商品</h3><div class="price_two  clearfloat"><span>￥999.00</span ><i class="cart_btn_two">+</i></div></div></a></li><li class="container_two"><a href="#"><div class="shop_img_two"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_two"><i>*</i></div></div><div class="text_message_two"><h3 class="title">此处显示商品</h3><div class="price_two  clearfloat"><span>￥999.00</span ><i class="cart_btn_two">+</i></div></div></a></li></ul></div></div>';
	shopComponents.shop_component_three='<div class="compentent_container"><div class="shop_component_three"><div class="btn_top">+</div><div class="btn_down">+</div><div class="clear">x</div><ul class="container"><li class="container_three_one"><div class="shop_img_three_one"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"></div><div class="text_message_three_one"><div><h3>此处显示商品</h3><p style="font-size:12px">此处显示商品描述</p></div><div class="price_three_one clearfloat"><span>￥999.00</span><i></i></div></div><div class="icon_three_one"><i>+</i></div></li><li class="container_three_two"><a href="#"><div class="shop_img_three_two"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_three_two"><i>*</i></div></div><div class="text_message_three_two"><h3 class="title">此处显示商品</h3><div class="price_three_two  clearfloat"><span>￥999.00</span ><i class="cart_btn_three_two">+</i></div></div></a></li><li class="container_three_two"><a href="#"><div class="shop_img_three_two"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_three_two"><i>*</i></div></div><div class="text_message_three_two"><h3 class="title">此处显示商品</h3><div class="price_three_two  clearfloat"><span>￥999.00</span ><i class="cart_btn_three_two">+</i></div></div></a></li></ul></div></div>';
	shopComponents.shop_component_four='<div class="compentent_container"><div class="shop_component_four"><div class="btn_top">+</div><div class="btn_down">+</div><div class="clear">x</div><ul class="container"><li class="container_four"><a href="#"><div class="shop_img_four"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_four"><i>*</i></div></div><div class="text_message_four"><h3 class="title_four">此处显示商品</h3><p class="sub_title_four">此处显示商品描述</p><p class="price_four"><em>￥999.00</em><span>+</span></p></div></a></li><li class="container_four"><a href="#"><div class="shop_img_four"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_four"><i>*</i></div></div><div class="text_message_four"><h3 class="title_four">此处显示商品</h3><p class="sub_title_four">此处显示商品描述</p><p class="price_four"><em>￥999.00</em><span>+</span></p></div></a></li><li class="container_four"><a href="#"><div class="shop_img_four"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_four"><i>*</i></div></div><div class="text_message_four"><h3 class="title_four">此处显示商品</h3><p class="sub_title_four">此处显示商品描述</p><p class="price_four"><em>￥999.00</em><span>+</span></p></div></a></li></ul></div></div>';
	shopComponents.shop_component_five='<div class="compentent_container"><div class="shop_component_five"><div class="btn_top">+</div><div class="btn_down">+</div><div class="clear">x</div><ul class="container"><li class="container_five"><a href="#"><div class="shop_img_five"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_five"><i>*</i></div></div><div class="text_message_five"><h3 class="title_five">此处显示商品名称</h3><p class="price_five"><em>￥999.00</em><span>+</span></p></div></a></li><li class="container_five"><a href="#"><div class="shop_img_five"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_five"><i>*</i></div></div><div class="text_message_five"><h3 class="title_five">此处显示商品名称</h3><p class="price_five"><em>￥999.00</em><span>+</span></p></div></a></li><li class="container_five"><a href="#"><div class="shop_img_five"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_five"><i>*</i></div></div><div class="text_message_five"><h3 class="title_five">此处显示商品名称</h3><p class="price_five"><em>￥999.00</em><span>+</span></p></div></a></li><li class="container_five"><a href="#"><div class="shop_img_five"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_five"><i>*</i></div></div><div class="text_message_five"><h3 class="title_five">此处显示商品名称</h3><p class="price_five"><em>￥999.00</em><span>+</span></p></div></a></li></ul></div></div>';
	shopComponents.shop_component_six='<div class="compentent_container"><div class="shop_component_six"><div class="btn_top">+</div><div class="btn_down">+</div><div class="clear">x</div><div class="container"><ul class="shop_component_six_container"><li class="container_six"><a href="#"><div class="shop_img_six"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_six"><i>*</i></div></div><div class="text_message_six"><h3 class="title_six">此处显示商品名称</h3><p class="price_six"><em>￥999.00</em><span>+</span></p></div></a></li><li class="container_six"><a href="#"><div class="shop_img_six"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_six"><i>*</i></div></div><div class="text_message_six"><h3 class="title_six">此处显示商品名称</h3><p class="price_six"><em>￥999.00</em><span>+</span></p></div></a></li><li class="container_six"><a href="#"><div class="shop_img_six"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_six"><i>*</i></div></div><div class="text_message_six"><h3 class="title_six">此处显示商品名称</h3><p class="price_six"><em>￥999.00</em><span>+</span></p></div></a></li><li class="container_six"><a href="#"><div class="shop_img_six"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"><div class="surper_script_six"><i>*</i></div></div><div class="text_message_six"><h3 class="title_six">此处显示商品名称</h3><p class="price_six"><em>￥999.00</em><span>+</span></p></div></a></li></ul></div></div></div>';
	
	
	//添加组件 【向父节点添加html，关键字（insertAdjacentHTML，'afterBegin'）】
	// var compentent_container=document.querySelector(".compentent_container");
	// compentent_container.insertAdjacentHTML('afterBegin',shopComponents.shop_component_six);
	
	// 添加组件方法;
	// shopComponents.addNode=function(fatherNodeName,btnType,childNodes){
	// 	var FatherNodeName=document.querySelector(fatherNodeName);
	// 	FatherNodeName.insertAdjacentHTML(btnType,childNodes);

	// }

	// shopComponents.addNode(".compentent_container",'afterBegin',shopComponents.shop_component_six);
    // shopComponents.addNode(".compentent_container",'beforeend',shopComponents.shop_component_two);
	// shopComponents.addNode(".compentent_container",'beforeend',shopComponents.shop_component_two);
	// shopComponents.addNode(".compentent_container",'afterBegin',shopComponents.shop_component_three);
	// shopComponents.addNode(".compentent_container",'afterBegin',shopComponents.shop_component_four);
	// shopComponents.addNode(".compentent_container",'afterBegin',shopComponents.shop_component_five);
// 鼠标移入移出


// 	shopComponents.mouse=function(nodeName,btn1,btn2,clear){
// 		var nodeName=document.querySelector(nodeName);
// 		console.log(nodeName);
// 		var btn1=document.querySelector(btn1);
// 		var btn2=document.querySelector(btn2);
// 		var clear=document.querySelector(clear);
// 		nodeName.onmousemove=function(event){
// 			nodeName.style.borderLeft = '1px dashed blue';
// 			nodeName.style.borderRight = '1px dashed blue';
// 			nodeName.style.borderTop = '1px solid blue';
// 			nodeName.style.borderBottom = '1px solid blue';
// 			btn1.style.display="block";
// 			btn2.style.display="block";
// 			clear.style.display="block";
// 		}
// 		nodeName.onmouseout=function(event){
// 			btn1.style.display="none";
// 			btn2.style.display="none";
// 			clear.style.display="none";
// 			nodeName.style.borderLeft = '1px dashed white';
// 			nodeName.style.borderRight = '1px dashed white';
// 			nodeName.style.borderTop = '1px solid white';
// 			nodeName.style.borderBottom = '1px solid white';
// 			// nodeName.style.zIndex="100";
// 		}
// 	}

// shopComponents.mouse(".shop_component_two",".btn_top",".btn_down",".clear");

// shopComponents.mouse(".shop_component_three",".btn_top",".btn_down",".clear");
// shopComponents.mouse(".shop_component_four",".btn_top",".btn_down",".clear");
// shopComponents.mouse(".shop_component_five",".btn_top",".btn_down",".clear");
// shopComponents.mouse(".shop_component_six",".btn_top",".btn_down",".clear");
//添加和移出功能

window.shopComponents=shopComponents;
})();
