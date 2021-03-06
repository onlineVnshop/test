﻿<%@page import="cn.quickbusiness.web.systemManage.entity.UserInfo"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../../page/common/includes.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title></title>
		<!--框架必需start-->
	<link href="<%=contextPath %>/libs/css/import_basic.css" rel="stylesheet" type="text/css"/>
<link href="<%=contextPath %>/libs/skins/blue/style.css" rel="stylesheet" type="text/css" id="theme" themeColor="blue"/>
<link href="skin/style.css" rel="stylesheet" type="text/css" id="skin" skinPath="system/layout_html/skin/"/>
<script type="text/javascript" src="<%=contextPath %>/libs/js/jquery.js"></script>
<script type="text/javascript" src="<%=contextPath %>/libs/js/language/cn.js"></script>
<script type="text/javascript" src="<%=contextPath %>/libs/js/main.js"></script>
		<!--框架必需end-->
		<!-- 表单验证start -->
<script src="<%=contextPath%>/libs/js/form/validationRule.js" type="text/javascript"></script>
<script src="<%=contextPath%>/libs/js/form/validation.js" type="text/javascript"></script>
<!-- 表单验证end -->
<style>
.fnred{
    color:#DA3A4C;
    font-style:normal;
}
.fn-fl{
    display:inline;
    float:left;
}
.fn-fl a{
    margin-left: 2px;
}
.fn-fr{
    float:right;
}
/*清除浮动*/
.clearfix {
  zoom: 1;
}
.clearfix:after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0;
  line-height: 0;
}
/* .icon-warn {
    background:url("../../images/member/reg/feiniu-index-icon-01.png?170726") no-repeat scroll -35px -117px;
    content: "";
    display: inline-block;
    font-style: normal;
    height: 17px;
    margin: -3px 5px 0;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
    width: 17px;
} */

.regcon{
   /*  background:#f5f5f5; */
    width:985px;
    margin:0 auto;
    padding-top:25px;
    font-size:13px;
    font-family: 'Microsoft YaHei';
}
.m-fnlogo{
    display:inline-block;
    *
    display:inline;
    *
    zoom:1;
    width:143px;
    height: 67px;
    margin:0px 15px 15px;
    background:url(../../images/member/reg/fn-icon.png?170726) right bottom no-repeat;
}
.m-fntit{
    display:block;
    *display:inline;
    *zoom:1;
    height:40px;
    line-height:40px;
   /*  border-left:1px solid #ddd; */
    color:#F4FAFD;
    padding:0px 15px;
    font-size:33px;
    font-family:'Microsoft YaHei';
    margin:12px 128px;
    text-align:center;
}
.regnav{
    list-style:none;
    margin:-15px 0px 0px;
    padding:0px 0px 0px 175px;
    height:37px;
}
.regnav .uli{
    list-style:none;
    margin:0px;
    padding:0px;
    float:left;
    height:35px;
    line-height:35px;
    text-align:center;
    border:1px solid #d5d5d5;
    border-bottom:0 none;
    background:#fff;
    color:#333;
    font-family: 'Microsoft YaHei';
    font-size:14px;
    margin-right:10px;
    cursor:pointer;
}
.regnav .uli a{
    display:block;
    color:#333;
    text-decoration:none;
    padding:0px 36px;
}
.regnav .active{
    color:#DA3A4C;
    font-weight:bold;
    border-top:2px solid #DA3A4C;
    height:36px;
    margin-bottom:-1px;
}
.regnav .active a{
    color:#DA3A4C;
}
.regnav .loginbtn{
    padding:15px 12px 0px;
    color:#3c3c3c;
}
.regnav .loginbtn a{
    color:#fff /* #0066cc */;
    cursor:pointer;
}
.regnav .loginbtn a:hover{
    /* text-decoration:underline; */
} 
.m-fnbox{
  /*   border:1px solid #d5d5d5; */
    background:.regcon;
    padding:35px;
    clear:both;
}
.fnlogin{
    font-family: 'Microsoft YaHei';
    font-size:15px;
    color:#3c3c3c;
    padding-left:255px;
    /*height:465px;*/
}
/*.fnlogin2{
    height:362px;
}
.fnlogin3{
    height:532px;
}*/
.fnlogin input{
    margin:0px;
    padding:0px;
}
.fnlogin .ltit{
    color:#333;
    padding-bottom:37px;
    font-size:14px;
    font-weight:bold;
}
.fnlogin .inp{
    float:left;
    border:1px solid #ccc;
    padding:8px;
    height:18px;
    line-height:18px;
    margin-right:10px;
    /*color:#333;*/
    font-family: 'Microsoft YaHei';
    outline:0 none;
    font-size:14px;
    vertical-align:middle;
    width:290px;
}
::-webkit-input-placeholder {
    color: #ccc;
}
:-moz-placeholder {
    color:#ccc;
}
::-moz-placeholder {
    color:#ccc;
}
:-ms-input-placeholder {
    color:#ccc;
}



.fnlogin .inp:focus{
    /*border:1px solid #DA3A4C;*/
}
.fnlogin .fcolor{
    color:#3c3c3c;
}
.fnlogin .red{
    padding-left:10px;
}
.fnlogin .nred{
    border:1px solid #DA3A4C;
}
.fnlogin .success{
    background:url(../../images/member/reg/fn-icon.png?170726) 280px -89px no-repeat;
}
.fnlogin .error{
    background:url(../../images/member/reg/fn-icon.png?170726) 126px 10px no-repeat;
}
.fnlogin .success.fcode,.fnlogin .success.imgcode{
   background-position: 125px -89px;
}

.fnlogin .error.fmobile,
.fnlogin .error.femail,
.fnlogin .error.fpass,
.fnlogin .error.fsecpass
{
    background-position:280px 10px;
}
.fnlogin .noticebox{
    width:227px;
    color:#DA3A4C;
    background:#fff8e1;
    border:1px solid #fddbaa;
    height:32px;
    line-height:15px;
    padding:2px 8px 0px 8px;
}
.fnlogin .noticebox2{
    width:227px;
    color:#DA3A4C;
    background:#fff8e1;
    border:1px solid #fddbaa;
    height:32px;
    line-height:32px;
    padding:2px 8px 0px 8px;
}
.fnlogin .errorbox{
    width:300px;
    color:#DA3A4C;
    background:#ffebeb;
    border:1px solid #ffbdbe;
    height:18px;
    line-height:18px;
    padding:8px;
}
.fnlogin .v-captcha{
    display:inline-block;
    *display:inline;
    *zoom:1;
    float:left;
    margin-right:10px;
    height:34px;
    line-height:34px;
}
.fnlogin .v-captcha img{
    display:inline;
    float:left;
    width:85px;
    height:34px;
    margin-right:10px;
}
.fnlogin .v-captcha a{
    color:#0066cc;
    cursor:pointer;
}
.fnlogin .fcode,.regcon .imgcode{
    width:137px;
}
.fnlogin .icode {
        display: block;
        text-align: center;
        line-height: 35px;
       background: #f5f5f5;
        border: 1px solid #ddd;
        border-radius: 1px;
        height: 35px;
        color:#3c3c3c;
        margin: 0 30px 0 5px;
        width: 115px;
        outline:0 none;
        cursor:pointer;
        font-family: 'Microsoft YaHei';
        font-size:12px;
}
.fnlogin .icode:hover{
    text-decoration:underline;
}
.fnlogin .disabled.icode{
    color:#ccc;
    cursor:default;
}
.fnlogin .disabled.icode:hover{
    text-decoration:none;
}
.fnlogin .line{
    height:37px;
    padding-bottom:25px;
}
.fnlogin .liney{
    height:auto;
    padding-bottom:0px;
}
.fnlogin .line .dt{
    display:inline-block;
    *display:inline;
    *zoom:1;
    height:34px;
    line-height:34px;
    padding-left:10px;
    background:url(../../images/member/reg/fn-icon.png?170726) 0px -137px no-repeat;
}
.fnlogin .line .linel{
    float:left;
    text-align:right;
    width:100px;

}
.fnlogin .line .liner{
    float:left;
}
.show-voice {
    width: 700px;
    line-height: 20px;
    font-size: 12px;
    color: #999;
    padding-left: 85px;
    float: left;
    display: none;
}
.fnlogin .v-txt,
.regcon .ui_panel,
.fnlogin .v-txt2
{
    display:none;
}
.fnlogin .safeline{
    clear:both;
    padding-top:4px;
    padding-left:49px;
    color:#666;
}
.fnlogin .safeline .sz{
    display:inline-block;
    *display:inline;
    *zoom:1;
    color:#fff;
    background:#d5d5d5;
    width:65px;
    height:15px;
    text-align:center;
    line-height:15px;
    margin-left:1px;
}
.fnlogin .safeline .son{
    background:#DA3A4C;
}
.fnlogin .iyes{
    margin-right: 5px;
    margin-top:2px;
    *+margin-top:-5px;
}
.fnlogin .checkcon{
    height:34px;
}
.fnlogin .checkcon .checktxt{
    height:18px;
    padding-right:106px;
    padding-top: 10px;
}
.fnlogin .itxt{
    color:#0066cc;
    text-decoration:none;
}
.fnlogin .itxt:hover{
    text-decoration:underline;
}
.fnlogin .regbtn{
    display:block;
    clear:both;
    cursor:pointer;
    margin:20px 0px 10px 0;
    width:250px;
    height:40px;
    color:#fff;
    font-family:'Microsoft YaHei';
    font-size:18px;
    text-align:center;
    line-height:40px;
    background:#DA3A4C;
    text-decoration:none;
}
.fnlogin .regbtn:hover{
    background:#ce0c22;
}

.suctxt{
    width:700px;
    margin-left:140px;
    padding:30px 0px;
}
.suctxt .stit{
    font-size:18px;
    font-weight:400;
    font-family:'Microsoft YaHei';
    color:#3c3c3c;
}
.suctxt .adc{
    padding: 30px 20px 30px 57px;
}
.suctxt .adctop{
   padding-top:20px;
   padding-bottom:0px;
}
.suctxt .adcbot{
    margin-top: 30px;
    background: #fffef2;
    border: 1px dashed #ddd;
}
.btn {
    -moz-user-select: none;
    background: #eee none repeat scroll 0 0;
    border: 1px solid #ddd;
    cursor: pointer;
    display: inline-block;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857;
    margin-bottom: 9px;
    padding: 6px 12px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
}
.btn:hover {
    background: #fff4d8 none repeat scroll 0 0;
}
.btn-danger {
    background-color: #f22e00;
    border: 0 none;
    color: #fff;
}
.btn-danger:hover {
    background: #e61c37 none repeat scroll 0 0;
}

.suctxt .adc p{
    margin-bottom:5px;
}
.suctxt .adc .fp{
    font-size:14px;
    font-weight:bold;
}
.suctxt .adc .sp{
    color:#999;
}
.suctxt .adc .btn {
    border: 1px solid #ddd;
    font-size: 16px;
    height: 36px;
    width: 115px;
}
.suctxt .adc .btn-danger {
    margin-right: 19px;
    width: 160px;
}

.suctxt .adc .shop_recharge {
    margin-left: 10px;
    line-height: 36px;
    padding: 0;
    color:#3c3c3c;
}
.suctxt .adc .success{
    background:#fff url("../../images/member/reg/fn-icon.png?170726") no-repeat scroll 175px -92px;
}
.suctxt .adc .send_email {
    margin-left: 10px;
    margin-bottom:0px;
    height:32px;
    line-height: 32px;
    padding: 0;
    color:#3c3c3c;
}
.suctxt .adc .v-tips {
    color: #999;
    font-size: 12px;
    margin-left: 65px;
}
.fn-form input[type="password"], .fn-form input[type="text"] {
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    height: 18px;
    line-height: 18px;
    padding: 6px 12px;
    transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
    vertical-align: middle;
    width: 176px;
}
.fn-form input[type="password"]:focus, .fn-form input[type="text"]:focus {
    border-color: #6c6c6c;
    outline: 0 none;
}
.fn-form .error input[type="password"], .fn-form .error input[type="password"]:focus, .fn-form .error input[type="text"], .fn-form .error input[type="text"]:focus {
    border-color: #f22e00;
}





/*底部样式*/
.wrapper {
    margin: 0 auto;
    width: 1220px;
}

#ft-service-infr {
    padding: 30px 0px;
    text-align: center;
    border-bottom:1px solid #fff;
}
#ft-service-infr dl {
    display: inline-block;
    vertical-align: top;
}
#ft-service-infr dt {
    font-family: Simsun;
    font-size: 1.33em;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 3px;
}
#ft-service-infr dd {
    text-align: left;
}
#ft-service-infr .contact-infr {
    color: #3c3c3c;
    margin: 0 20px 0 10px;
}
#ft-service-infr .phone-num {
    color: #3c3c3c;
    font-size: 1.92em;
    font-weight: 700;
    margin-bottom: 10px;
}
#ft-service-infr .nav-service {
    margin: 0 20px;
}
#ft-service-infr .sns-qrcode {
    margin-left: 30px;
}
#ft-service-infr .sns-qrcode dd {
    color: #666;
    display: inline-block;
    height: 100px;
    margin: 0 10px;
    text-align: center;
    width: 88px;
}
#ft-service-infr .sns-qrcode p {
    margin-top: 90px;
}
#ft-service-infr .sns-qrcode .wechat {
    background: #fff url("../../images/member/reg/feiniu_footer_icon.png?170726") no-repeat scroll 0 -350px;
}
#ft-service-infr .sns-qrcode .weibo {
    background: #fff url("../../images/member/reg/feiniu_footer_icon.png?170726") no-repeat scroll 0 -450px;
}
#float-nav {
    bottom: 20px;
    display: none;
    position: fixed;
    right: 10px;
    text-align: center;
    z-index: 99;
}
#float-nav dl {
    background: #fefefe none repeat scroll 0 0;
    margin-bottom: 10px;
}
#float-nav dd {
    border: 1px solid #f1f1f1;
    cursor: pointer;
    display: block;
    height: 25px;
    margin-top: -1px;
    overflow: hidden;
    padding-top: 30px;
    text-indent: 110%;
    white-space: nowrap;
    width: 50px;
}
#float-nav a {
    display: block;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
}
#float-nav .float-function dd {
    background: url("../../images/member/reg/feiniu-index-icon-01.png?170726") 0px 0px no-repeat;
    height: 40px;
    padding: 0;
}
#float-nav .go-feedback {
    background-position: 0 -56px;
}
#float-nav .go-feedback:hover {
    background-color: #666;
    background-position: -50px -56px;
}
#float-nav .go-top {
    background-position: 0 -95px;
}
#float-nav .go-top:hover {
    background-position: -50px -95px;
    border-color: #f22e00;
}
#global-footer {
    padding-bottom: 40px;
}
#global-footer .copyright {
    font-family: 'Microsoft YaHei';
    font-size:12px;
    border-top: 1px solid #f1f1f1;
    color: #444;
    line-height: 25px;
    padding: 25px 0 25px;
    text-align: center;
}
#global-footer .authentic {
    text-align: center;
}
#global-footer .authentic dd {
    display:inline-block;
    *display:inline;
    *zoom:1;
    background: #fff url("../../images/member/reg/feiniu_footer_icon.png?170726") 0px 0px no-repeat;
    height: 40px;
    margin: 0 3px;
}
#global-footer .authentic  a {
     display:inline-block;
    *display:inline;
    *zoom:1;
}
#global-footer .authentic .icbc {
    width: 96px;
}
#global-footer .authentic .alipay {
    background-position: 0 -50px;
    width: 112px;
}
#global-footer .authentic .unionpay {
    background-position: 0 -100px;
    width: 96px;
}
#global-footer .authentic .tenpay {
    background-position: 0 -150px;
    width: 112px;
}
#global-footer .authentic .sgs {
    background-position: 0 -200px;
    width: 96px;
}
#global-footer .authentic .zx110 {
    background-position: 0 -250px;
    width: 112px;
}
#global-footer .authentic .szfw {
    background-position: 0 -300px;
    width: 112px;
}
#global-footer .authentic .kxwz {
    width:109px;
    background:url(../../images/member/reg/time_cnnic.jpg?170726) 0px 0px no-repeat;
}
#global-footer .authentic .aqlm {
  width: 96px;
  background: url(../../product/images/aqlm.jpg?170726) no-repeat;
}


/*全站换色*/
.fnred ,
.regnav .active a ,
.regnav .active ,
.fnlogin .noticebox ,
.fnlogin .noticebox2 ,
.fnlogin .errorbox {
    color: #d7063b;
}
.regnav .active {
    border-top-color: #d7063b;
}
.fnlogin .nred {
    border-color: #d7063b;
}
.fnlogin .regbtn {
    background: #66D354;
}
.fnlogin .regbtn:hover {
    background: #66D354;
}

body{
 background:#1D8BD8 url(@media4/bg.jpg) no-repeat center center;
}


</style>
<%
UserInfo info = (UserInfo) request.getSession().getAttribute("user_info");
if (info == null) {
	info = new UserInfo();
}

 %>
	</head>
	<body style="text-align:left;">
	<div class="regcon">
        <a class="m-fnlogo fn-fl" href="">
         <!--  <img src="../../libs/images/demo/tmlogo.png" width=110 height=110,alt="筷赚" style="margin-top: -21px;margin-left: 38px;" /> -->
        </a><span class="m-fntit">手机找回密码</span>
        <div class="ui_tab">
            <ul class="ui_tab_nav regnav">
                <li class="no fn-fr loginbtn">我已注册，马上<a href="<%=contextPath%>">登录></a></li>
            </ul> 
	 <div class="ui_tab_content">
               <div class="m-fnbox ui_panel" style="display: block;">
                    <div class="fnlogin fnlogin3 clearfix">
                      <form id="myFormId" method="post" action="">
                      <!--   <div class="line">
                            <label class="linel"><span class="dt"> <span class="star">*</span>登录名：</span></label>
                            <div class="liner">
                                <input type="text" class="inp femail J_email validate[required,custom[noSpecialCaracters]]" name="loginName" placeholder="请输入登录名" /><p class="fn-fl errorbox v-txt" id="emailBox">邮箱格式输入不正确</p>
                            </div>
                        </div>
                       -->
                        <div class="line">
                            <label class="linel"><span class="dt"><span class="star">*</span>登录名：</span></label>
                            <div class="liner">
                                <input type="text" class="inp fmobile J_cellphone validate[required,custom[mobilephone]]" name="userPhone"  placeholder="请输入手机号码" /><p class="fn-fl errorbox v-txt" id="mobileBox">手机号码输入不正确</p>
                            </div>
                        </div>
                          <div class="line">
                            <label class="linel"><span class="dt"><span class="star">*</span>验证码：</span></label>
                            <div class="liner">
                                <input type="text" class="inp fcode J_code" placeholder="" />
                                <a class="fn-fl icode" id="sendSms" onClick="sendMsg()" href="javascript:;">获取验证码</a>
                                <p class="fn-fl errorbox v-txt" id="mbmsgBox">验证码输入不正确</p>
                                </div>
                            <div id="show-voice" class="show-voice"></div>
                        </div> 
  						<div class="line">
                            <label class="linel"><span class="dt"><span class="star">*</span>新密码：</span></label>
                            <div class="liner">
                                <input type="password" id="pwd" class="inp fpass J_password validate[required,length[6,30],custom[letterandnum]]" name="userPassword" placeholder="请输入密码" autocomplete="off" />
                            </div>
                        </div>
                        <div class="line">
                            <label class="linel"><span class="dt"><span class="star">*</span>确认密码：</span></label>
                            <div class="liner">
                                <input type="password" class="inp fsecpass J_password2 validate[required,confirm[pwd]]" placeholder="请再次输入密码"  autocomplete="off" />
                                <p class="fn-fl errorbox v-txt" id="pwBox2">两次输入密码不一致</p>
                            </div>
                        </div>
                        <div class="line liney clearfix">
                            <label class="linel">&nbsp;</label>
                            <div class="liner">
                                <a class="regbtn J_btn_agree" id="regbtn" href="javascript:;" onClick="resetpwd('#myFormId')">重置密码</a>
                            </div>
                    </div>
 </form> 
                    </div>
                    </div>

            </div>
	</div>
	</div>
<script type="text/javascript">
var code="0";
//正则
var validateRegExp = {
    email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件
    mobile: "^0?(13|15|18|14|17)[0-9]{9}$", //手机
    password: "^.*[A-Za-z0-9\\w_-]+.*$", //密码
    username: "^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$", //户名
    incode: "/^[a-zA-Z0-9]{1,20}$/"//邀请码
};
//验证规则
var validateRules = {
    isNull: function(str) {
        return (str == "" || typeof str != "string");
    },
    betweenLength: function(str, _min, _max) {
        return (str.length >= _min && str.length <= _max);
    },
    isPwd: function(str) {
        return /^.*([\W_a-zA-z0-9-])+.*$/i.test(str);
    },
    isPwdRepeat: function(str1, str2) {
        return (str1 == str2);
    },
    isMobile: function(str) {
        return new RegExp(validateRegExp.mobile).test(str);
    },
    isEmail: function (str) {
        return new RegExp(validateRegExp.email).test(str);
    },
    isIncode: function (str) {
        return /^[a-zA-Z0-9]{1,20}$/.test(str);
    }
};

//发送验证码
function daojishi(seconds){
		
		$('#sendSms').prop("disabled",true).addClass('disabled');
        $('#sendSms').text(seconds + '秒后重新获取');
		if(--seconds >= 0){
	    	setTimeout("daojishi("+seconds+")",1000);//定时器     
	    }else{
	    	  $('#sendSms').text('获取验证码');
	          $('#sendSms').prop("disabled",false).removeClass('disabled');
	    }     
	};

//发送手机验证码
function sendMsg(){
	  
    var phoneNum = $.trim($('.J_cellphone').val());
    var reg = /^1\d{10}$/;
    var isPhone = false;
    if (reg.test(phoneNum)) {
        isPhone = true;
    }
   
if(isPhone){       
    	var formUrl="<%=contextPath%>/register/findpwd.do";
    	
        $.ajax({
    		type:"post", //请求方式
    		url:formUrl, //发送请求地址
    		data:{"mobilePhone":phoneNum},
    		//请求成功后的回调函数有两个参数
    		success:function(data){
    			
    			try { 
        			var data =eval('(' + data + ')');// data.parseJSON();
    			}catch (e) {
    				console.log("========"+e.message);
    				} 
    			 if(data.result == 1){
                 	//默认60秒倒计时
 					var seconds = 60;
 					daojishi(seconds);
 					code=data.code;
                 }else if(data.result == 99){
                	 alert('该用户不存在，无法发送');
                 }else{
                	 alert('发送短信失败');
                 }
    		}
    	});  
}
  
};
//重置密码	
function resetpwd(containerId){
	
	 var valid = $(containerId).validationEngine({returnIsValid: true});
	 
 if(valid == true){
	
	var  loginName= $(".J_email").val();
	var  userPassword= $(".J_password").val();
	var  userPhone= $(".J_cellphone").val();
	var       jcode=$(".J_code").val();

	 if(code!=jcode){
		alert("验证码不正确");
		return;
	} 
	var formUrl="<%=contextPath%>/register/resetpwd.do";
	$.ajax({
		type:"post", //请求方式
		url:formUrl, //发送请求地址
		data:{"loginName":loginName,"userPassword":userPassword,"userPhone":userPhone},
		//请求成功后的回调函数有两个参数
		success:function(data){
			
			if(data == 1){
				alert("重置密码成功");
				 window.location="<%=contextPath%>" ;
			}else if(data == 3){
				alert("重置密码失败");
			}else if(data == 2){
				alert("该用户不存在");
			}
		}
	});
	
	}else{
		 alert('表单填写不正确，请按要求填写！');
		 return;
	 }
	};

function mySetTime() {
    if (mysec > 0) {
            $('#sendSms').prop("disabled",true).addClass('disabled');
            $('#sendSms').text(mysec + '秒后重新获得');
            mysec--;

    } else {
         clearInterval(myHandler);
        $('#sendSms').text('获取验证码');
        $('#sendSms').prop("disabled",false).removeClass('disabled');
        canSend = true;
    }

};

</script>
	</body>
</html>