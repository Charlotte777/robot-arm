
			(function($, doc) {
				$.init();
				$.ready(function() {
					//普通示例
					var modelPicker = new $.PopPicker();
					modelPicker.setData(modelPickerDate);
					var modelPickerButton = doc.getElementById('model');

					modelPickerButton.addEventListener('tap', function(event) {
						modelPicker.show(function(items) { 
							var str=JSON.stringify(items[0].text); 
							var newstr=str.substring(1,str.length-1);
							doc.getElementById('model').value= newstr;
						});
					}, false);


		/*-------------------------------------------------------------------------*/
					var robotkindPicker = new $.PopPicker();
					robotkindPicker.setData(robotkindPickerDate);
					var robotkindPickerButton = doc.getElementById('robot_kind');
			
					robotkindPickerButton.addEventListener('tap', function(event) {
						robotkindPicker.show(function(items) { 
							var str=JSON.stringify(items[0].text); 
							var newstr=str.substring(1,str.length-1);
							doc.getElementById('robot_kind').value= newstr;
						});
					}, false);


                   /*---------------------------------------------------*/
					var calibratePicker = new $.PopPicker();
					calibratePicker.setData(calibratePickerDate);
					var calibratePickerButton = doc.getElementById('new_or_existing_calibrate');
				
					calibratePickerButton.addEventListener('tap', function(event) {
						calibratePicker.show(function(items) { 
							var str=JSON.stringify(items[0].text); 
							var newstr=str.substring(1,str.length-1);
							doc.getElementById('new_or_existing_calibrate').value= newstr;
						});
					}, false);





			document.getElementById("calibrateBtn").addEventListener('tap', function() {
				var btnArray = ['CANCEL', 'YES'];
				mui.confirm('In order to Calibrate,the robot will move,proceed?', 'Warning', btnArray, function(e) {
					if (e.index == 1) {
						mui.toast( 'The robot is moving.Please wait for few minutes.');
					} else {
						mui.toast( 'You just cancel calibration.');
					}
				})
			});

	document.getElementById("connectBtn").addEventListener('tap', function() {
				
					mui.toast( 'Connect sucesss!');
				
			});

				});
				
			})(mui, document);
