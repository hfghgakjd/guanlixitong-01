$(document).ready(function(){
	
	$.formValidator.initConfig({
		formID:"form1",
		mode:'AutoTip',
		onError:function(msg){
			alert(msg)
		},
		inIframe:true
	});
	$("#ID").formValidator({
		onShow:"请输入客户账号",
		onFocus:"客户账号至少6个字符,最多8个字符",
		onCorrect:"该账号可以注册"
	}).inputValidator({
		min:6,
		max:8,
		onError:"客户账号至少6个字符,最多8个字符"
	}).regexValidator({
		regExp:"chunShuZi",
		dataType:"enum",
		onError:"账号必须是数字"
	}).ajaxValidator({
		dataType : "html",
		async : true,
		url : "yanzheng.action",
		success : function(data){
			if( data.indexOf("此用户名可以使用!") > 0 ) {
				return true
			};
			return data.msg;
		},
		buttons: $("#button"),
		error: function(jqXHR, textStatus, errorThrown){
			alert("服务器没有返回数据，可能服务器忙，请重试"+errorThrown);
		},
		onError : "该账号不可用，请更换账号",
		onWait : "正在对账号进行合法性校验，请稍候..."
	});
	$("#bianwaiuser").formValidator({
		onShow:"请输入编外人账号",
		onFocus:"请输入编外人账号",
		onCorrect:"该账户可以使用"
	}).inputValidator({
		min:6,
		max:12,
		onError:"你输入的账户非法,请确认"
	}).regexValidator({
		regExp:"username",
		dataType:"enum",
		onError:"必须纯数字"
	}).ajaxValidator({
		dataType : "html",
		async : true,
		url : "bianwaiuser.action",
		success : function(data){
			if( data.indexOf("账户可以使用") > 0 ) {
				return true
			};
			return data.msg;
		},
		buttons: $("#button"),
		error: function(jqXHR, textStatus, errorThrown){
			alert("服务器没有返回数据，可能服务器忙，请重试"+errorThrown);
		},
		onError : "该用户名不可用，请更换用户名",
		onWait : "正在对用户名进行合法性校验，请稍候..."
	});
	
	$("#userNum").formValidator({
		onShow:"请输入该员工工号",
		onFocus:"请输入员工账号",
		onCorrect:"该账户可以使用"
	}).inputValidator({
		min:6,
		max:12,
		onError:"你输入的账户非法,请确认"
	}).regexValidator({
		regExp:"chunShuZi",
		dataType:"enum",
		onError:"必须纯数字"
	}).ajaxValidator({
		dataType : "html",
		async : true,
		url : "zhanghao.action",
		success : function(data){
			if( data.indexOf("账户可以使用") > 0 ) {
				return true
			};
			return data.msg;
		},
		buttons: $("#button"),
		error: function(jqXHR, textStatus, errorThrown){
			alert("服务器没有返回数据，可能服务器忙，请重试"+errorThrown);
		},
		onError : "该用户名不可用，请更换用户名",
		onWait : "正在对用户名进行合法性校验，请稍候..."
	});
	
	
	//验证客户姓名
	$("#KHXM").formValidator({
		onShow:"请输入姓名",
		onFocus:"姓名必须是2-10个中文",
		onCorrect:"姓名输入正确"
	}).inputValidator({
		min:2,
		max:10,
		onError:"姓名输入格式不正确，请重新输入"
	}).regexValidator({
		regExp:"xingmin",
		dataType:"enum",
		onError:"姓名输入格式不正确，请重新输入"
	});
	
	
	//验证手机
	$("#SJHM").formValidator({
		empty:false,
		onShow:"请输入手机号码，可以为空哦",
		onFocus:"你要是输入了，必须输入正确",
		onCorrect:"谢谢你的合作",
		onEmpty:"你真的不想留手机号码啊？"
	}).inputValidator({
		min:11,
		max:11,
		onError:"手机号码必须是11位的,请确认"
	}).regexValidator({
		regExp:"mobile",
		dataType:"enum",
		onError:"你输入的手机号码格式不正确"
	});
	//验证民族
	$("#MZ").formValidator({
		onShow:"请输入姓名",
		onFocus:"最少一个汉字",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:1,
		onError:"必须输入一个汉字"
	}).regexValidator({
		regExp:"chinese",
		dataType:"enum",
		onError:"必须输入中文"
	});
	//验证家庭住址
	$("#JTZZ").formValidator({
		onShow:"请输入家庭住址",
		onFocus:"请输入正确的家庭住址",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:20,
		onError:"请输入完整的家庭住址"
	});
	//验证家庭结构
	$("#JTJG").formValidator({
		onShow:"请输入家庭结构",
		onFocus:"请输入家庭结构",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:5,
		onError:"请输入完整的家庭结构"
	});
	//验证从事行业
	$("#CSHY").formValidator({
		onShow:"请输入客户从事的行业",
		onFocus:"最少5个汉字，或者英文单词",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:10,
		onError:"最少输入5个汉字"
	});
	//验证职位
	$("#ZW").formValidator({
		onShow:"请输入职位名称",
		onFocus:"最少输入2个字",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:2,
		onError:"最少输入2个字"
	}).regexValidator({
		regExp:"zyw",
		dataType:"enum",
		onError:"只能输入中文或英文"
	});
	//家庭年收入
	$("#JTNSR").formValidator({
		onShow:"请输入金额",
		onFocus:"请输入金额",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:1,
		onError:"请输入正确的金额"
	}).regexValidator({
		regExp:"num",
		dataType:"enum",
		onError:"请输入正确的金额"
	});
	
	//预计房款
	$("#YJFK").formValidator({
		onShow:"请输入金额",
		onFocus:"请输入金额",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:1,
		onError:"请输入正确的金额"
	}).regexValidator({
		regExp:"num",
		dataType:"enum",
		onError:"请输入正确的金额"
	});
	//身份证号
	$("#SFZHM").formValidator({
		onShow:"请输入15或18位的身份证",
		onFocus:"输入15或18位的身份证",
		onCorrect:"输入正确"
	}).functionValidator({
		fun:isCardID
	});
	//护照号
//	$("#HZH").formValidator({
//		onShow:"请输入护照号",
//		onFocus:"请输入护照号",
//		onCorrect:"谢谢合作！"
//	}).inputValidator({
//		min:8,
//		onError:"请输入护照号"
//	}).regexValidator({
//		regExp:"hzh",
//		dataType:"enum",
//		onError:"请输入正确的护照号"
//	});
	//银行卡号验证
	$("#SKKH").formValidator({
		onShow:"请输入银行卡号",
		onFocus:"请输入银行卡号",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:16,
		max:19,
		onError:"请输入正确的银行卡号"
	}).regexValidator({
		regExp:"chunShuZi",
		dataType:"enum",
		onError:"银行卡号只能是数字"
	});
	//所属银行
	$("#SSYH").formValidator({
		onShow:"请输入银行",
		onFocus:"请输入银行",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:4,
		onError:"最少输入4个中文"
	}).regexValidator({
		regExp:"chinese",
		dataType:"enum",
		onError:"只能输入中文"
	});
	//推荐机构
	$("#TJJG").formValidator({
		onShow:"请输入机构名称",
		onFocus:"请输入机构名称",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:2,
		onError:"最少输入2个中文"
	}).regexValidator({
		regExp:"chinese",
		dataType:"enum",
		onError:"只能输入中文"
	});
	//推荐联系人方式
	$("#TJRLXFS").formValidator({
		onShow:"请输入你的手机号码，可以为空哦",
		onFocus:"必须是手机号",
		onCorrect:"谢谢你的合作",
		onEmpty:"请留下联系方式"
	}).inputValidator({
		min:11,
		max:11,
		onError:"请输入手机号码"
	}).regexValidator({
		regExp:"mobile",
		dataType:"enum",
		onError:"你输入的手机号码格式不正确"
	});
	//所属单位
	$("#SSDWM").formValidator({
		onShow:"请输入单位名称",
		onFocus:"最少输入4个字",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:4,
		onError:"最少输入4个字"
	}).regexValidator({
		regExp:"zyw",
		dataType:"enum",
		onError:"只能输入中文或英文"
	});
	//客户归属人员
	$("#KHGSRY").formValidator({
		onShow:"请输入此客户归属人员工号",
		onFocus:"请输入此客户归属人员工号",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:4,
		max:19,
		onError:"请输入正确的工号"
	}).regexValidator({
		regExp:"chunShuZi",
		dataType:"enum",
		onError:"工号只能是纯数字"
	});
	//客户归属省市
	$("#KHGSSS").formValidator({
		onShow:"请输入此客户归属省市",
		onFocus:"请输入此客户归属省市",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:6,
		max:19,
		onError:"至少6个中文"
	}).regexValidator({
		regExp:"chinese",
		dataType:"enum",
		onError:"只能输入中文"
	});
	//录入人员
	$("#GYH").formValidator({
		onShow:"请输入此客户归属省市",
		onFocus:"请输入此客户归属省市",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:6,
		max:19,
		onError:"只能输入数字"
	}).regexValidator({
		regExp:"chunShuZi",
		dataType:"enum",
		onError:"只能是纯数字"
	});
	//录入人员姓名
	$("#XM").formValidator({
		onShow:"请输入姓名",
		onFocus:"姓名必须是2-10个中文",
		onCorrect:"姓名输入正确"
	}).inputValidator({
		min:2,
		max:10,
		onError:"姓名输入格式不正确，请重新输入"
	}).regexValidator({
		regExp:"xingmin",
		dataType:"enum",
		onError:"姓名输入格式不正确，请重新输入"
	});
	$("#XMGZD").formValidator({
		onShow:"项目关注点",
		onFocus:"写出你的项目关注点",
		onCorrect:"谢谢配合"
	}).inputValidator({
		min:5,
		onError:"关注点必须在5个字以上"
	}).regexValidator({
		regExp:"chinese",
		dataType:"enum",
		onError:"仅限中文"
	});
	//兴趣爱好
	$("#YQAH").formValidator({
		onShow:"填写你的兴趣爱好",
		onFocus:"最少写一项",
		onCorrect:"谢谢配合"
	}).inputValidator({
		min:2,
		onError:"至少需要2个字"
	}).regexValidator({
		regExp:"zyw",
		dataType:"enum",
		onError:"不允许有特殊字符"
	});
	//生日
	$("#SR").formValidator({
		onShow:"填写生日",
		onFocus:"填写生日",
		onCorrect:"谢谢配合"
	}).inputValidator({
		empty:false,
		onError:"请输入日期"
	}).regexValidator({
		regExp:"date",
		dataType:"enum",
		onError:"日期格式错误"
	});
	//日期
	$("#date1").formValidator({
		onShow:"填写正确的日期",
		onFocus:"填写正确的日期",
		onCorrect:"谢谢配合"
	}).inputValidator({
		empty:false,
		onError:"请输入日期"
	}).regexValidator({
		regExp:"date",
		dataType:"enum",
		onError:"日期格式错误"
	});
	$("#date2").formValidator({
		onShow:"填写正确的日期",
		onFocus:"填写正确的日期",
		onCorrect:"谢谢配合"
	}).inputValidator({
		empty:false,
		onError:"请输入日期"
	}).regexValidator({
		regExp:"date",
		dataType:"enum",
		onError:"日期格式错误"
	});
	//客户性格
	$("#KHXG").formValidator({
		onShow:"客户的性格",
		onFocus:"客户的性格",
		onCorrect:"谢谢配合"
	}).inputValidator({
		min:2,
		onError:"至少需要两个字"
	}).regexValidator({
		regExp:"chinese",
		dataType:"enum",
		onError:"仅限中文"
	});
	//项目名称
	$("#XMMC").formValidator({
		onShow:"填写项目名称",
		onFocus:"填写项目名称",
		onCorrect:"谢谢配合"
	}).inputValidator({
		min:2,
		onError:"至少需要两个汉字"
	}).regexValidator({
		regExp:"zyw",
		dataType:"enum",
		onError:"仅限中英文"
	});
	//关注房号
	$("#GZFH").formValidator({
		onShow:"填写房号",
		onFocus:"填写房号",
		onCorrect:"谢谢配合"
	}).inputValidator({
		min:2,
		onError:"至少需要两个汉字"
	}).regexValidator({
		regExp:"zyw",
		dataType:"enum",
		onError:"仅限中英文"
	});
	//其他海外地产情况
	$("#QTHWDC").formValidator({
		onShow:"填写客户关注的其他海外地产的情况",
		onFocus:"填写客户关注的其他海外地产的情况",
		onCorrect:"谢谢配合"
	}).inputValidator({
		min:5,
		onError:"至少需要5个汉字"
	}).regexValidator({
		regExp:"chinese",
		dataType:"enum",
		onError:"只能输入中文"
	});
	$("#password1").formValidator({
		onShow:"请输入密码",
		onFocus:"至少6个长度",
		onCorrect:"密码合法"
	}).inputValidator({
		min:6,
		empty:{
			leftEmpty:false,
			rightEmpty:false,
			emptyError:"密码两边不能有空符号"
		},
		onError:"密码不能为空,请确认"
	});
	
	$("#password2").formValidator({
		onShow:"输再次输入密码",
		onFocus:"至少6个长度",
		onCorrect:"密码一致"
	}).inputValidator({
		min:6,
		empty:{
			leftEmpty:false,
			rightEmpty:false,
			emptyError:"重复密码两边不能有空符号"
		},
		onError:"重复密码不能为空,请确认"
	}).compareValidator({
		desID:"password1",
		operateor:"=",
		onError:"2次密码不一致,请确认"
	});
	//验证QQ号码
	$("#qqNumber").formValidator({
		onShow:"填写QQ号",
		onFocus:"填写QQ号码",
		onCorrect:"谢谢配合"
	}).inputValidator({
		min:5,
		onError:"至少需要5个长度"
	}).regexValidator({
		regExp:"qq",
		dataType:"enum",
		onError:"仅限qq号码"
	});
	//管理人员归属
	$("#GLRYGS").formValidator({
		onShow:"请输入管理人员归属",
		onFocus:"请输入管理人员归属",
		onCorrect:"谢谢合作！"
	}).inputValidator({
		min:6,
		max:19,
		onError:"此编外人归属员工工号"
	}).regexValidator({
		regExp:"chunShuZi",
		dataType:"enum",
		onError:"仅数字"
	});
	
	//经纪人信息
	$("#JJRXX").formValidator({
		onShow:"填写经纪人信息",
		onFocus:"填写经纪人信息",
		onCorrect:"谢谢配合"
	}).inputValidator({
		min:5,
		onError:"至少需要10个汉字"
	});
	$(":radio[name='xb_one']").formValidator({
		tipID:"sexTip",
		onShow:"请选择你的性别",
		onFocus:"没有第三种性别了，你选一个吧",
		onCorrect:"输入正确",
		defaultValue:["1"]
	}).inputValidator({
		min:1,
		max:1,
		onError:"性别忘记选了,请确认"
	});
	
	$("#nl").formValidator({
		onShow:"请输入的年龄（1-99岁之间）",
		onFocus:"只能输入1-99之间的数字哦",
		onCorrect:"恭喜你,你输对了"
	}).inputValidator({
		min:1,
		max:99,
		type:"value",
		onErrormin:"你输入的值必须大于等于1",
		onError:"年龄必须在1-99之间，请确认"
	}).defaultPassed();
	
	$("#csny").DateTimeMask({
		lawlessmessage:"你输入的出生日期格式错误"
	}).formValidator({
		onShow:"请输入的出生日期",
		onFocus:"请输入的出生日期，不能全部是0哦",
		onCorrect:"你输入的日期合法"
	}).inputValidator({
		min:"1900-01-01",
		max:"2000-01-01",
		type:"value",
		onError:"日期必须在\"1900-01-01\"和\"2000-01-01\"之间"
	}).defaultPassed();
	
	$("#sfzh").formValidator({
		onShow:"请输入15或18位的身份证",
		onFocus:"输入15或18位的身份证",
		onCorrect:"输入正确"
	}).functionValidator({
		fun:isCardID
	});
	
	$("#email").formValidator({
		onShow:"请输入邮箱",
		onFocus:"邮箱至少6个字符,最多100个字符",
		onCorrect:"恭喜你,你输对了",
		defaultValue:""
	}).inputValidator({
		min:6,
		max:100,
		onError:"你输入的邮箱长度非法,请确认"
	}).regexValidator({
		regExp:"youxiang",
		dataType:"enum",
		onError:"你输入的邮箱格式不正确"
	});
	
	$("#xueli").formValidator({
		onShow:"请选择你的学历",
		onFocus:"学历必须选择",
		onCorrect:"谢谢你的配合",
		defaultValue:"a"
	}).inputValidator({
		min:1,
		onError: "你是不是忘记选择学历了!"
	}).defaultPassed();
	
	$("#ewjy").formValidator({
		onShow:"无论你输入什么都会提示你额外校验出错",
		onFocus:"如果你输入\"snowfog\"，额外校验就会成功",
		onCorrect:"额外校验成功"
	}).inputValidator({
		min:1,
		onError:"这里至少要一个字符,请确认"
	}).functionValidator({
	    fun:function(val,elem){
	        if(val=="snowfog"){
			    return true;
		    }else{
			    return "额外校验失败,想额外校验通过，请输入\"snowfog\""
		    }
		}
	});
	
	$("#Tel_country").formValidator({
		tipID:"teltip",
		onShow:"请输入国家区号",
		onFocus:"国家区号2位数字",
		onCorrect:"恭喜你,你输对了",
		defaultValue:"86"
	}).regexValidator({
		regExp:"^\\d{2}$",
		onError:"国家区号不正确"
	});
	
	$("#Tel_area").formValidator({
		tipID:"teltip",
		onShow:"请输入地区区号",
		onFocus:"地区区号3位或4位数字",
		onCorrect:"恭喜你,你输对了"
	}).regexValidator({
		regExp:"^\\d{3,4}$",
		onError:"地区区号不正确"
	});
	
	$("#Tel_number").formValidator({
		tipID:"teltip",
		onShow:"请输入电话号码",
		onFocus:"电话号码7到8位数字",
		onCorrect:"恭喜你,你输对了"
	}).regexValidator({
		regExp:"^\\d{7,8}$",
		onError:"电话号码不正确"
	});
	
	$("#Tel_ext").formValidator({
		tipID:"teltip",
		onShow:"请输入分机号码",
		onFocus:"分机号码1到5位数字",
		onCorrect:"恭喜你,你输对了"
	}).regexValidator({
		regExp:"^\\d{1,5}$",
		onError:"分机号码不正确"
	});
	
	$(":checkbox[name='xqah_one']").formValidator({
		tipID:"test3Tip",
		onShow:"请选择你的兴趣爱好（至少选一个）",
		onFocus:"你至少选择1个",
		onCorrect:"恭喜你,你选对了"
	}).inputValidator({
		min:1,
		onError:"你选的个数不对"
	});
	
	$(":checkbox[name='xqah_more']").formValidator({
		tipID:"test2Tip",
		onShow:"请选择你的兴趣爱好(至少选择2个,最多选择3个)",
		onFocus:"你至少选择2个,最多选择3个",
		onCorrect:"恭喜你,你选对了",
		defaultValue:["7","8"]
	}).inputValidator({
		min:2,
		max:3,
		onError:"你选的个数不对(至少选择2个,最多选择3个)"
	});
	
	$(":radio[name='aiguo']").formValidator({
		tipID:"aiguoTip",
		onShow:"爱国的人一定要选哦",
		onFocus:"你得认真思考哦",
		onCorrect:"不知道你爱不爱，反正你是选了",
		defaultValue:["4"]
	}).inputValidator({
		min:1,
		max:1,
		onError:"难道你不爱国？你给我选！！！！"
	}).defaultPassed();
	
	$("#shouji").formValidator({
		empty:true,
		onShow:"请输入你的手机号码，可以为空哦",
		onFocus:"你要是输入了，必须输入正确",
		onCorrect:"谢谢你的合作",
		onEmpty:"你真的不想留手机号码啊？"
	}).inputValidator({
		min:11,
		max:11,
		onError:"手机号码必须是11位的,请确认"
	}).regexValidator({
		regExp:"mobile",
		dataType:"enum",
		onError:"你输入的手机号码格式不正确"
	});
	
	$("#lxdh").formValidator({
		empty:true,
		onShow:"请输入你的联系电话，可以为空哦",
		onFocus:"格式例如：0577-88888888",
		onCorrect:"谢谢你的合作",
		onEmpty:"你真的不想留联系电话了吗？"
	}).regexValidator({
		regExp:"^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$",
		onError:"你输入的联系电话格式不正确"
	});
	
	$("#sjdh").formValidator({
		empty:true,
		onShow:"请输入你的手机或电话，可以为空哦",
		onFocus:"格式例如：0577-88888888或11位手机号码",
		onCorrect:"谢谢你的合作",
		onEmpty:"你真的不想留手机或电话了吗？"
	}).regexValidator({
		regExp:["tel","mobile"],
		dataType:"enum",
		onError:"你输入的手机或电话格式不正确"
	});
	
	$("#selectmore").formValidator({
		onShow:"按住CTRL可以多选",
		onFocus:"按住CTRL可以多选,至少选择2个",
		onCorrect:"谢谢你的合作",
		defaultValue:["0","1","2"]
	}).inputValidator({
		min:2,
		onError:"至少选择2个"
	});
	
	$("#ms").formValidator({
		onShowText:"这家伙很懒，什么都没有留下。",
		onShow:"请输入你的描述",
		onFocus:"描述至少要输入10个汉字或20个字符",
		onCorrect:"恭喜你,你输对了",
		defaultValue:"这家伙很懒，什么都没有留下。"
	}).inputValidator({
		min:20,
		onError:"你输入的描述长度不正确,请确认"
	});
	
});


function test(obj)
{
	if(obj.value=="不校验身份证")
	{
		$("#sfzh").attr("disabled",true).unFormValidator(true);
		obj.value = "校验身份证";
	}
	else
	{
		$("#sfzh").attr("disabled",false).unFormValidator(false);
		obj.value = "不校验身份证";
	}
}
function test1(obj)
{
	var initConfig = $.formValidator.getInitConfig("1");
	if(obj.value=="全角字符当做1个长度")
	{
		initConfig.wideword = false;
		obj.value = "全角字符当做2个长度";
	}
	else
	{
		initConfig.wideword = true;
		obj.value = "全角字符当做1个长度";
	}
	$('body').data(obj.validatorgroup,initConfig);
}