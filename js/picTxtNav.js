
// 保存变量
var _this; 
// 克隆模拟添加功能
$(".box").clone().prependTo(".shops_group");
// 点击事件
$(".shops_group").on("click",".box",function(){
    _this=$(this);
    // console.log(_this);
        $(".design_editor_item").hide();
        _this.find(".design_editor_item").show();
// 文本同步
    $(".input_wrapper").on("keyup",".input_value",function(){
            $this=$(this);
            // console.log(_this)
            if($(this).attr("state")==0){
                _this.find(".cap_image_nav_title").eq(0).html($this.val());  
            }else if($(this).attr("state")==1){
                _this.find(".cap_image_nav_title").eq(1).html($this.val());
            }else if($(this).attr("state")==2){
                _this.find(".cap_image_nav_title").eq(2).html($this.val());
            }else if($(this).attr("state")==3){
                _this.find(".cap_image_nav_title").eq(3).html($this.val());
            }
    })
    // 图片同步（待开发）
    $(".has_choose_image").on("click",".thumb_image",function(){
        $that=$(this);
        if($(this).attr("state")==0){
            _this.find(".thumb_image").eq(0).attr("src",that.attr("src"))
        }else if($(this).attr("state")==1){
            _this.find(".thumb_image").eq(1).attr("src",that.attr("src"))
        }else if($(this).attr("state")==2){
            _this.find(".thumb_image").eq(2).attr("src",that.attr("src"))
        }else if($(this).attr("state")==3){
            _this.find(".thumb_image").eq(3).attr("src",that.attr("src"))
        }
    })
})



