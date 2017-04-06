
			(function($, doc) {
				$.init();
				$.ready(function() {
					//普通示例
					
							
					var Startpicker = new $.PopPicker();
					Startpicker.setData(StartpickerDate);
					var StartpickerButton = doc.getElementById('Startpicker');
					StartpickerButton.addEventListener('tap', function(event) {
						Startpicker.show(function(items) {
								var str=JSON.stringify(items[0].text); 
							var newstr=str.substring(1,str.length-1);
					
							doc.getElementById('Startpicker').innerHTML= newstr;
						});  
					}, false);
					
			
					var Grabpicker = new $.PopPicker();
					Grabpicker.setData(GrabpickerDate);
					var GrabpickerButton = doc.getElementById('Grabpicker');
					GrabpickerButton.addEventListener('tap', function(event) {
						Grabpicker.show(function(items) {
							var str=JSON.stringify(items[0].text); 
							var newstr=str.substring(1,str.length-1);
							doc.getElementById('Grabpicker').innerHTML= newstr;
						});  
					}, false);
					
					var Liftpicker = new $.PopPicker();
					Liftpicker.setData(LiftpickerDate);
					var LiftpickerButton = doc.getElementById('Liftpicker');
					LiftpickerButton.addEventListener('tap', function(event) {
						Liftpicker.show(function(items) {
								var str=JSON.stringify(items[0].text); 
							var newstr=str.substring(1,str.length-1);
							doc.getElementById('Liftpicker').innerHTML= newstr;
						});  
					}, false);
					
					var Placepicker = new $.PopPicker();
					Placepicker.setData(PlacepickerDate);
					var PlacepickerButton = doc.getElementById('Placepicker');
					PlacepickerButton.addEventListener('tap', function(event) {
						Placepicker.show(function(items) {
								var str=JSON.stringify(items[0].text); 
							var newstr=str.substring(1,str.length-1);
							doc.getElementById('Placepicker').innerHTML= newstr;
						});  
					}, false);
					
					var Endpicker = new $.PopPicker();
					Endpicker.setData(EndpickerDate);
					var EndpickerButton = doc.getElementById('Endpicker');
					EndpickerButton.addEventListener('tap', function(event) {
						Endpicker.show(function(items) {
							var str=JSON.stringify(items[0].text); 
							var newstr=str.substring(1,str.length-1);
							doc.getElementById('Endpicker').innerHTML= newstr;
						});  
					}, false);
					
					
					
					
					
					
		var rangeList = document.querySelectorAll('input[type="range"]');
        for (var i = 0,
        len = rangeList.length; i < len; i++) {
            rangeList[i].addEventListener('input',
            function() {
                document.getElementById(this.id + '-input').value = this.value;
            });
        }
					
		document.getElementById("reset").addEventListener('tap',
            function() {  
            location.reload();
            });
            
            
            
           document.getElementById("save").addEventListener('tap',
            function() {  
            if(document.getElementById("savename_input").value==""){
            	mui.toast("place input the name");

            }
            else if(document.getElementById("savename_input").value!=""){
            	mui.toast("save success");
            }
            
            }); 
            
    
           
            document.getElementById("test_play").addEventListener('tap',
            function() {  
            
            mui.toast("the robot is working now");
            }); 
           
            
        });  
        
        
			})(mui, document);
			
			
