// 保存变量
var _this; 
$(".box").clone().prependTo(".shops_group");
// 显示样式初始化
$(".showState").eq(0).show();
$(".showState").eq(1).show();
$(".showState").eq(2).hide();
$(".showState").eq(3).show();
$(".showState").eq(4).hide();
// 点击事件

$(".compontent_container_container").html(shopComponents.shop_groups_compontent_one)
$(".shops_group").on("click",".box",function(){
    _this=$(this);
    // console.log(_this);
        $(".design_editor").hide();
        _this.find(".design_editor").show();
    // x选择模板
  $(".selectState").on("click",".big_circle",function(e){
        $this=$(this);  
        // console.log($this.parent().siblings().children(".big_circle"));
        $(this).addClass("checked").parent().siblings().children(".big_circle").removeClass("checked");
        if($this.parent().attr("selectState")==0){
            _this.find(".selectFill").hide();
            _this.find(".compontent_container_container").html(shopComponents.shop_groups_compontent_one);
            _this.find(".design_editor_control_group").show();
            _this.find(".design_compontent_goods_style_editor").show();
            $(".title_container").show();
        }else if($this.parent().attr("selectState")==1){
            _this.find(".compontent_container_container").html(shopComponents.shop_groups_compontent_seven);
            _this.find(".design_editor_control_group").hide();
            _this.find(".design_compontent_goods_style_editor").hide();
            _this.find(".selectFill").html(shopComponents.fill)
            _this.find(".selectFill").show();
            _this.find(".title_container").hide();
        }
    }) 
    // 菜单样式
        $(".muneState").on("click",".big_circle",function(){
            // console.log(1);
            $this=$(this);  
            $(this).addClass("checked").parent().siblings().children(".big_circle").removeClass("checked");
            if($this.parent().attr("muneState")==0){
               _this.find(".active").css({
                    "border-bottom":"2px solid #ff4444",
                    "padding":"0 5px",
                    "background":"#fff",
                     "display":"inline-block",
                    "border-radius":"0px",
                    "color":"black",
                    "width":"40px",
                    "height":"30px",
                     "line-height": "44px",
                    "padding-bottom":"14px",
                    "margin":"0"
                  
                })
            }else if($this.parent().attr("muneState")==1){
                _this.find(".active").css({
                    "display":"inline",
                    "border-radius":"20px",
                    "background":"#ff4444",
                    "display":"block",
                    "width":"40px",
                    "height":"36px",
                    "line-height":"34px",
                    "padding":"0 5px",
                    "padding-bottom":"0px",
                    "border-bottom":"0px",
                    "color":"#fff",
                    "margin":"5px 0",
                   
                })
            }else if($this.parent().attr("muneState")==2){
                _this.find(".active").css({
                    "width":"80px",
                    "height":"46px",
                    "background":"#FF4444",
                    "margin":0,
                    "padding":"0 5px",
                    "border-bottom":"0px",
                    "border-radius":"0px",
                })
            }
            
        });
        // 顶部菜单位置设置
        $(".positionState").on("click",".big_circle",function(){
            $this=$(this);
            $(this).addClass("checked").parent().siblings().children(".big_circle").removeClass("checked");
            //功能无参照 
        })
        // 列表样式{liststate=[4,5],极简选中}
        $(".listState").on("click",".big_circle",function(){
            $this=$(this);
            // console.log(_this)
            $(this).addClass("checked").parent().siblings().children(".big_circle").removeClass("checked");
            if($this.parent().attr("listState")==0){
                _this.find(".compontent_container_container").html(shopComponents.shop_groups_compontent_one);
                console.log($(".showState"))
                $(".showState").eq(0).show();
                $(".showState").eq(1).show();
                $(".showState").eq(2).hide();
                $(".showState").eq(3).show();
                $(".showState").eq(4).hide();
                $(".size").show();
                $(".goods_name").show();
                $(".goods_introduction").show();
                $(".shopping_btn_style").show();
                $(".goods_price").show();
                $(".shopping_btn").show();
            }else if($this.parent().attr("listState")==1){
               
                _this.find(".compontent_container_container").html(shopComponents.shop_groups_compontent_two)
                $(".showState").eq(0).show();
                $(".showState").eq(1).show();
                $(".showState").eq(2).show();
                $(".showState").eq(3).show();
                $(".showState").eq(4).show();
                $(".size").hide();
                $(".goods_name").show();
                $(".goods_price").show();
                $(".goods_introduction").hide();
                $(".shopping_btn_style").hide();
                $(".shopping_btn").hide();
            }else if($this.parent().attr("listState")==2){
                _this.find(".compontent_container_container").html(shopComponents.shop_groups_compontent_three)
                $(".size").hide();
                $(".showState").eq(0).show();
                $(".showState").eq(1).show();
                $(".showState").eq(2).hide();
                $(".showState").eq(3).show();
                $(".showState").eq(4).hide();
                $(".goods_name").show();
                $(".goods_introduction").hide();
                $(".goods_price").show();
                $(".shopping_btn").hide();
                $(".shopping_btn_style").hide();
            }else if($this.parent().attr("listState")==3){
                _this.find(".compontent_container_container").html(shopComponents.shop_groups_compontent_four)
                $(".size").hide();
                $(".showState").eq(0).show();
                $(".showState").eq(1).show();
                $(".showState").eq(2).hide();
                $(".showState").eq(3).show();
                $(".showState").eq(4).hide();
                $(".goods_name").hide();
                $(".goods_introduction").hide();
                $(".goods_price").hide();
                $(".shopping_btn").show();
                $(".shopping_btn_style").show();
            }else if($this.parent().attr("listState")==4){
                _this.find(".compontent_container_container").html(shopComponents.shop_groups_compontent_five)
                $(".size").hide();
                $(".showState").eq(0).hide();
                $(".showState").eq(1).hide();
                $(".showState").eq(2).hide();
                $(".showState").eq(3).show();
                $(".showState").eq(4).hide();
                $(".shopping_btn").show();
                $(".goods_name").show();
                $(".goods_introduction").hide();
                $(".shopping_btn_style").show();
                $(".goods_price").show();
                $(".card_style").removeClass("checked").eq(3).addClass("checked");
            }else if($this.parent().attr("listState")==5){
                // console.log( $(".card_style"))
                _this.find(".compontent_container_container").html(shopComponents.shop_groups_compontent_six)
                $(".size").hide();
                $(".showState").eq(0).hide();
                $(".showState").eq(1).hide();
                $(".showState").eq(2).hide();
                $(".showState").eq(3).show();
                $(".showState").eq(4).hide();
                $(".shopping_btn").show();
                $(".goods_name").show();
                $(".goods_introduction").hide();
                $(".shopping_btn_style").show();
                $(".goods_price").show();
                $(".card_style").removeClass("checked").eq(3).addClass("checked");
            }  
        })
         
         // 填充样式设置
         $(".fillState").on("click",".big_circle",function(){
            $this=$(this);
            $(this).addClass("checked").parent().siblings().children(".big_circle").removeClass("checked");
           
        })
        // 显示比例
        $(".siseState").on("click",".big_circle",function(){
            $this=$(this);
            $(this).addClass("checked").parent().siblings().children(".big_circle").removeClass("checked");
           if($this.parent().attr("siseState")==0){
                _this.find(".img_container img").css("height","290px")
           }else if($this.parent().attr("siseState")==1){
            _this.find(".img_container img").css("height","190px")
           }
        })
        // 显示样式
        $(".showState").on("click",".big_circle",function(){
            $this=$(this);
            $(this).addClass("checked").parent().siblings().children(".big_circle").removeClass("checked");
            if($this.parent().attr("showState")==0){
                // _this.find(".content_container_list_small").removeClass("container-fluid");
                // _this.find(".content_container_list_small_list").removeClass("box_fluid");
                // 大图
                _this.find(".content_container_list li a").css({
                    "width":"288px",
                    "border":"1px solid transparent",                   
                })
                _this.find(".title_detail").show();
                _this.find(".sub_title_detail").show();
                _this.find(".title").show();
                _this.find(".sub_title").show();
                _this.find(".shop_btn").show().html("@");
                _this.find(".shop_btn").removeClass("btn_big");
                _this.find(".title").css({
                    "text-align":"left",
                });
                _this.find(".price").css({
                    "position":"absolute",
                    "left":"10px",
                    "bottom":"10px",
                    "float":"",
                    "margin-top":"0px"
                });
                _this.find(".price em").css({
                    "position":"",
                    "left":"0%",
                });
                // 小图
                _this.find(".content_container_list_small_list a").css({
                    "margin":"4px 2px",
                    "border":"1px solid transparent"
                })
                _this.find(".content_container_list_small_and_big_list a").css({
                    "margin":"4px 2px",
                    "border":"1px solid transparent"
                })
                // 详情列表
                _this.find(".content_container_list_detail").css({
                    "padding-left":"0px",
                })
                _this.find(".content_container_list_detail_list").css({
                    "padding":"0",
                    "border-bottom":"0",
                    
                })
                _this.find(".content_container_list_detail_list:last-child").css({
                    "padding":"0",
                    "border-bottom":"0",
                    
                })
                _this.find(".content_container_list_detail_list a").css({
                    "margin":"5px 15px 15px 15px",
                    "border":"1px solid #e5e5e5",
                })
            }else if($this.parent().attr("showState")==1){
                // 大图
                // _this.find(".content_container_list_small").removeClass("container-fluid");
                // _this.find(".content_container_list_small_list").removeClass("box_fluid");
                _this.find(".content_container_list li a").css({
                    "width":"288px",
                    "border":"1px solid #e5e5e5"
                })
                _this.find(".title_detail").show();
                _this.find(".sub_title_detail").hide();
                _this.find(".title").show();
                _this.find(".sub_title").show();
                _this.find(".shop_btn").show().html("@");
                _this.find(".shop_btn").removeClass("btn_big");
                _this.find(".title").css({
                    "text-align":"left",
                });
                _this.find(".price").css({
                    "position":"absolute",
                    "left":"10px",
                    "bottom":"10px",
                    "float":"",
                    "margin-top":"0px"
                });
                _this.find(".price em").css({
                    "position":"",
                    "left":"0%",
                });
                // 小图
                _this.find(".content_container_list_small_list a").css({
                    "margin":"7px 8px 8px 7px",
                    "border":"1px solid #e5e5e5"
                })
                _this.find(".content_container_list_small_and_big_list a").css({
                    "margin":"7px 8px 8px 7px",
                    "border":"1px solid #e5e5e5",
                    "padding":"0"
                })
                // 详情列表
                _this.find(".content_container_list_detail").css({
                    "padding-left":"0px",
                })
                _this.find(".content_container_list_detail_list").css({
                    "padding":"0",
                    "border-bottom":"0",
                    
                })
                _this.find(".content_container_list_detail_list:last-child").css({
                    "padding":"0",
                    "border-bottom":"0",
                    
                })
                _this.find(".content_container_list_detail_list a").css({
                    "margin":"5px 15px 15px 15px",
                    "border":"1px solid #e5e5e5",
                })
            }else if($this.parent().attr("showState")==2){
                // _this.find(".content_container_list_small").addClass("container-fluid");
                // _this.find(".content_container_list_small").attr("id","masonry");
                // _this.find(".content_container_list_small_list").addClass("box_fluid");
                _this.find(".title").show();
                _this.find(".sub_title").hide();
                _this.find(".shop_btn").show().html("@");
                _this.find(".shop_btn").removeClass("btn_big");
                $(function() {
                    var $container = $('#masonry');
                    $container.imagesLoaded(function() {
                        $container.masonry({
                                itemSelector: '.box',
                                gutter: 20,
                                isAnimated: true,
                            });
                     });
                });

            }else if($this.parent().attr("showState")==3){
                _this.find(".title").show();
                _this.find(".sub_title").hide();
                _this.find(".shop_btn").hide()
                _this.find(".shop_btn").removeClass("btn_big");
                _this.find(".title").css({
                    "text-align":"center",
                });
                _this.find(".price").css({
                    "position":"relative",
                    "left":"50%",
                    "float":"left",
                    "margin-top":"5px"
                });
                _this.find(".price em").css({
                    "position":"relative",
                    "left":"-50%",
                });
                // 详情列表
                _this.find(".content_container_list_detail").css({
                    "padding-left":"15px",
                })
                _this.find(".content_container_list_detail_list").css({
                    "padding":"10px 15px 10px 0",
                    "border-bottom":"1px solid #e5e5e5",
                    
                })
                _this.find(".content_container_list_detail_list:last-child").css({
                    "padding":"10px 15px 10px 0",
                    "border-bottom":"none",
                    
                })
                _this.find(".content_container_list_detail_list a").css({
                    "margin":0,
                    "margin-top":"5px",
                    "border":"none",
                })
            }else if($this.parent().attr("showState")==4){
                _this.find(".sub_title").hide();
                _this.find(".title").hide();
                _this.find(".shop_btn").show();
                _this.find(".shop_btn").addClass("btn_big").html("我要抢购");

            } 
        })
        // 购买按钮
        $(".btnStyleState").on("click",".big_circle",function(){
            $this=$(this);
            $(this).addClass("checked").parent().siblings().children(".big_circle").removeClass("checked");
           if($this.parent().attr("btnStyleState")==0){
               _this.find(".shop_btn").html("@")
           }else if($this.parent().attr("btnStyleState")==1){
            _this.find(".shop_btn").html("2")
           }else if($this.parent().attr("btnStyleState")==2){
            _this.find(".shop_btn").html("3")
           }else if($this.parent().attr("btnStyleState")==3){
            _this.find(".shop_btn").html("4")
        }
    })
     /*------------------显示内容------------------ */
        // 显示商品
        _this.find(".sub_title_slide").hide();
        $(".contentState_one").on("click",".square",function(e){
            e.stopPropagation();
            var
            $this=$(this);
            if(!$this.hasClass("cancle")){
                 $(this).addClass("cancle")
                 _this.find(".title").show();
                 _this.find(".title_slide").show();
                 console.log($this)
            }else{
                $(this).removeClass("cancle")
                _this.find(".title").hide();
                _this.find(".title_slide").hide();
                console.log($this)
            }
           ;
           
        })
        // 显示简介
        $(".contentState_two").on("click",".square",function(e){
            e.stopPropagation();
            $this=$(this);
            if(!$this.hasClass("cancle")){
                $(this).addClass("cancle");
                _this.find(".sub_title").show();
               
           }else{
               $(this).removeClass("cancle");
               _this.find(".sub_title").hide();
               
           }
           
        })
        // 价格
        $(".contentState_three").on("click",".square",function(e){
            e.stopPropagation();
            $this=$(this);
            if(!$this.hasClass("cancle")){
                $(this).addClass("cancle");
                _this.find(".price").show();
                _this.find(".price_slide").show();
           }else{
                $(this).removeClass("cancle");
                _this.find(".price").hide();
                _this.find(".price_slide").hide();
           }
        })
         // 购买按钮
         $(".contentState_four").on("click",".square",function(e){
            e.stopPropagation();
            $this=$(this);
            if(!$this.hasClass("cancle")){
                $(this).addClass("cancle");
                _this.find(".shop_btn").show();
                _this.find(".shopping_btn_style").show();
           }else{
                $(this).removeClass("cancle");
                _this.find(".shop_btn").hide();
                _this.find(".shopping_btn_style").hide();
                

           }
        })
       
})

