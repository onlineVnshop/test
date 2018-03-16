/*
*@商品组件
*/
(function(){
	// 创建组件对象
	var shopComponents={};
	shopComponents.shop_component_one='<li class="container_one"><div class="shop_img_one"><img src="https://img.yzcdn.cn/upload_files/2018/03/13/0c3606ee96756b5b67dce937a3345023.png"></div><div class="text_message_one"><div><h3>此处显示商品</h3><p style="font-size:12px">此处显示商品描述</p></div><div class="price_one clearfloat"><span>￥999.00</span><i></i></div></div> <div class="icon_one"><i>+</i></div></li>';
	shopComponents.shop_component_two='';
	shopComponents.shop_component_three='';
	shopComponents.shop_component_four='';
	shopComponents.shop_component_five='';
	shopComponents.shop_component_six='';

	//添加组件 
	// var shop_component=document.querySelector(".shop_component");
	// shop_component.innerHTML=shopComponents.shop_component_one;

	function Setting(shopSource,listStyle,fillWay,showSize,showStyle,showContent,btnStyle,userDefined){
	this.shopSource=shopSource;
	this.listStyle=listStyle;
	this.fillWay=fillWay;
	this.showSize=showSize;
	this.showStyle=showStyle;
	this.showContent=showContent;
	this.btnStyle=btnStyle;
	this.userDefined=userDefined;
	this.switch=function(){
		console.log("nishi"+shopSource+listStyle)
	}
}

window.Setting=Setting;
})();

