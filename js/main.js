//闭包、、、
(function(){
	//通用方法的封装，本地存储的封装
	var Util=(function(){
	 	var prefix='html5_reader_';
	 	var StorageGetter=function(key){
	 		return localStorage.getItem(prefix+key);
	 	}
	 	var StorageSetter=function(key,val){
	 		return localStorage.setItem(prefix+key,val);
	 	}        
	 	return{
	 		StorageGetter:StorageGetter,
	 		StorageSetter:StorageSetter
	 	}
	})();
	//声明一些常量
	var Dom={
		top_nav:$('#top-nav'),
		bottom_nav:$('#bottom-nav'),
		bottom_nav_bk:$('#bottom-nav-bk'),
		font_container:$('.font-container'),
		body:$('body'),
		day_button:$('#day-button'),
		night_button:$('#night-button')

	}

	//字体和背景的颜色表
	var colorArr = ['#f7eee5','#e9dfc7','#a4a4a4','#cdefce'];


	var Win=$(window);
	var Doc=$(document);
	var RootContainer=$('#fiction_container')
	var initFontSize=Util.StorageGetter('font-size');
	var initBk=Util.StorageGetter('background-color');
	initFontSize=parseInt(initFontSize);
	if(!initFontSize){
		initFontSize=16;
	}
	RootContainer.css('font-size',initFontSize);
	Dom.body.css('background-color',initBk);

	function main(){
		//整个项目的入口函数
		EventHanlder();

	}

	function EventHanlder(){
		//交互的事件绑定
		$('#action_mid').click(function(){
			if(Dom.top_nav.css('display')=='none'){
				Dom.bottom_nav.show();
				Dom.top_nav.show();
				Dom.bottom_nav_bk.show();
			}else{
				Dom.bottom_nav.hide();
				Dom.bottom_nav_bk.hide();
				Dom.top_nav.hide();
				Dom.font_container.hide();
			}
		})
		Win.scroll(function(){
			Dom.bottom_nav_bk.hide();
			Dom.bottom_nav.hide();
			Dom.top_nav.hide();
			Dom.font_container.hide();
		})





		$('#font-button').click(function(){
			//字体面板的切换
			if(Dom.font_container.css('display')=='none'){
				Dom.font_container.show();
			}else{
				Dom.font_container.hide();
			}
		})
		
		$('#large-font').click(function(){
			if(initFontSize>20){
				return;
			}
			initFontSize+=2;
			RootContainer.css('font-size',initFontSize);
			//把字体存起来，下次刷新不变
			Util.StorageSetter('font-size',initFontSize);
		})
		$('#small-font').click(function(){
			if(initFontSize<12){
				return;
			}
			initFontSize-=2;
			RootContainer.css('font-size',initFontSize);
			//把字体存起来，下次刷新不变
			Util.StorageSetter('font-size',initFontSize);
		})
		$('#bk1').click(function(){
			Dom.body.css('background-color',colorArr[0]);
			Util.StorageSetter('background-color',colorArr[0]);
		})
		$('#bk2').click(function(){
			Dom.body.css('background-color',colorArr[1]);
			Util.StorageSetter('background-color',colorArr[1]);
		})
		$('#bk3').click(function(){
			Dom.body.css('background-color',colorArr[2]);
			Util.StorageSetter('background-color',colorArr[2]);
		})
		$('#bk4').click(function(){
			Dom.body.css('background-color',colorArr[3]);
			Util.StorageSetter('background-color',colorArr[3]);
		})

		$('#day-night-changed').click(function(){
			if(Dom.day_button.css('display')=='none'){
				Dom.day_button.show();
				Dom.night_button.hide();
				Dom.body.css('background-color',colorArr[0]);
				Util.StorageSetter('background-color',colorArr[0]);
			}else{
				Dom.day_button.hide();
				Dom.night_button.show();
				Dom.body.css('background-color',colorArr[2]);
				Util.StorageSetter('background-color',colorArr[2]);
				
			}

		})

	} 

	main();

})();