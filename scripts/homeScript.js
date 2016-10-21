      $(function () {
            //图片展示滑动
            var mySwiper = new Swiper('.swiper-container', {
            	pagination: '.swiper-pagination',
            	loop: true,
            	autoplay: 5000
            });

            var url=BasicServer.ServerUrl;
            $.post(url+'SSO/Login/IsLogin','',function(data){
            	if(data=='unLogin'){
            		$("#unLogin").show();
            	}
            	else{
            		$("#login").show();
            		$("#userName").html(data);
            	}
            });

            $("#loginOut").click(function(){
            	$("#unLogin").show();
            	$("#login").hide();
            	$.post(url+'SSO/Login/Logout','',function(data)){
            		data=eval(data);
            		if(data){
            			alert('登出成功！');
            		}	
            		else{
            			alert('登出失败！');
            		}
            	}
            });
      });
