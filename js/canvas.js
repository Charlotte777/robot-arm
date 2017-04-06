		var main,menu, mask = mui.createMask(_closeMenu);
		var showMenu = false;
		mui.init({
			swipeBack: false,
			beforeback: back
		});

		function back() {
			if (showMenu) {
				closeMenu();
				return false; 
			} else {
				menu.close('none');
				return true;
			}
		}
		//plusReady事件后，自动创建menu窗口；
		mui.plusReady(function() {
			main = plus.webview.currentWebview();
			setTimeout(function () {
				menu = mui.preload({
					id: 'right-menu',
					url: 'right-menu.html',
					styles: {
						left: 0,
						width: '70%',
						zindex: 9997
					}
				});
			},300);
			
		});
		/**
		 * 显示菜单菜单
		 */
		function openMenu() {
			if (!showMenu) {
				//侧滑菜单处于隐藏状态，则立即显示出来；
				//显示完毕后，根据不同动画效果移动窗体；
				menu.show('none', 0, function() {
setTimeout(function() {
							/*main.setStyle({
								left: '70%',
								transition: {
									duration: 150
								}
							});*/
							menu.setStyle({
								left: '0%',
								transition: {
									duration: 150
								}
							});
	}, 200);
				});
				setTimeout(function() {
					mask.show();
				}, 200);
				
				showMenu = true;
			}
		}
		function closeMenu () {
			_closeMenu();
			mask.close();
		}
		function _closeMenu() {
			if (showMenu) {

						main.setStyle({
							left: '0',
							transition: {
								duration: 150
							}
						});
						menu.setStyle({
							left: '-70%',
							transition: {
								duration: 150
							}
						});
		
				setTimeout(function() {
					menu.hide();
				}, 200);
				showMenu = false;
			}
		}
		
		//变换侧滑动画移动效果；
		mui('.mui-input-group').on('change', 'input', function() {
			if (this.checked) {
						slideTogether = true;
						menu.setStyle({
							left: '-70%'
						});
				

			}
		});

		 //点击左上角图标，打开侧滑菜单；
		document.querySelector('.mui-icon-bars').addEventListener('tap', openMenu);
	
		window.addEventListener('dragright', function(e) {
			e.detail.gesture.preventDefault();
		});
		window.addEventListener('dragleft', function(e) {
			e.detail.gesture.preventDefault();
		});
		 //主界面向右滑动，若菜单未显示，则显示菜单；否则不做任何操作；
		window.addEventListener("swiperight", openMenu);
		 //主界面向左滑动，若菜单已显示，则关闭菜单；否则，不做任何操作；
		window.addEventListener("swipeleft", closeMenu);
		 //menu页面向左滑动，关闭菜单；
		window.addEventListener("menu:swipeleft", closeMenu);

		//重写mui.menu方法，Android版本menu按键按下可自动打开、关闭侧滑菜单；
		mui.menu = function() {
			if (showMenu) {
				closeMenu();
			} else {
				openMenu();
			}
		}
