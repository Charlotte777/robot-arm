
        mui.init({
            swipeBack: true //启用右滑关闭功能
        });
        var controls = document.getElementById("segmentedControls");
        var contents = document.getElementById("segmentedControlContents");
        var html = [];
        var TCP_name = new Array("X", "Y", "Z", "Roll", "Pitch", "Yaw");
        var i = 1,
        j = 1,
        m = 20,
        //左侧选项卡数量+1
        n = 7; //Joint卡列表数量+1
        for (; i < m; i++) {
            html.push('<a class="mui-control-item" href="#content' + i + '">pose' + i + '</a>');
        }
        controls.innerHTML = html.join('');
        html = [];
        for (i = 1; i < m; i++) {
            html.push('<div id="content' + i + '" class="mui-control-content"><ul class="mui-table-view">');
            for (j = 1; j < n; j++) {
                html.push('<li class="teach-pose-cell-css"><div class="joint-row">'+i+'Joint' + j + '</div><div class="joint-value-row"> Joint' + j + ' value</div></li>');

            }
            for (var k = 0; k < TCP_name.length; k++) {
                html.push('<li class="teach-pose-cell-css"><div class="joint-row">' + TCP_name[k] + '</div><div class="joint-value-row">' + TCP_name[k] + ' value</div></li>');
            }

            html.push('<li class="teach-pose-cell-css"><div class="joint-row">Speed</div>' + '<div class="joint-value-row"><input value="15" type="text" size="4"></div></li>');

            html.push('<li class="teach-pose-cell-css">' + '<div class="joint-row"><button type="button" style="width:70px;" onclick="">Go to</button></div>' + '<div class="joint-value-row"><button type="button" style="width:70px;" onclick="">Delete</button></div></li>');

            html.push('</ul></div>');
        }
        contents.innerHTML = html.join('');
        //默认选中第一个
        controls.querySelector('.mui-control-item').classList.add('mui-active');
        contents.querySelector('.mui-control-content').classList.add('mui-active');
        
        
        /*pose tcp*/
        var posetcphtml=[];
          var posetcpcontents = document.getElementById("posetcp");
          	posetcphtml.push(' <li class="mui-table-view-divider"><div>    Pose TCP  </div> </li> ');
        	posetcphtml.push(' <li class="mui-table-view-cell"> <div class="pose-row">  Pose    </div> <div class="pose-value-row">    Value          </div>   </li>');
        for (var posetcptemp = 0; posetcptemp < TCP_name.length; posetcptemp++) {
           posetcphtml.push('<li class="mui-table-view-cell"><div class="pose-row">' + TCP_name[posetcptemp] + '</div><div class="pose-value-row">  14   </div></li>');
}
posetcpcontents.innerHTML=posetcphtml.join('');


    var actuatorshtml=[];
          var actuatorscontents = document.getElementById("actuators");
          	actuatorshtml.push('<li class="mui-table-view-divider"><div>Actuators</div> </li>'
                     		 + '<li class="mui-table-view-cell"><div class="pose-row">Position(deg) </div>'
                             + '<div class="pose-value-row">Current(A)</div></li>');
                  
        for (var actuatorstemp = 1; actuatorstemp < 8; actuatorstemp++) {
           actuatorshtml.push('<li class="mui-table-view-cell"><div class="pose-row">'
                           +'<img src="images/guide'+actuatorstemp+'.png">'
                          + '</div><div class="pose-value-row">14</div></li>');
}
actuatorscontents.innerHTML=actuatorshtml.join('');







        mui.init({
            swipeBack: true //启用右滑关闭功能
        });

        var item_list = new Array("x", "y", "z", "roll", "pitch", "yaw", "speed");
        //监听input事件，获取range的value值，也可以直接element.value获取该range的值
        var rangeList = document.querySelectorAll('input[type="range"]');
        for (var i = 0,
        len = rangeList.length; i < len; i++) {
            rangeList[i].addEventListener('input',
            function() {
                document.getElementById(this.id + '-input').value = this.value;
            });
        }

        for (var j = 0; j < item_list.length; j++) {
            document.getElementById(item_list[0] + '-range-input').addEventListener('input',
            function() {
                document.getElementById(item_list[0] + '-range').value = this.value;
            });
        }

        function change_value(a, b) {
            var tempb = parseInt(b);
            document.getElementById(a + '-range').value = parseInt(document.getElementById(a + '-range').value) + b;
            document.getElementById(a + '-range-input').value = parseInt(document.getElementById(a + '-range-input').value) + b;
        }

        document.getElementById('left').addEventListener('tap',
        function() {
            change_value("x", -1);
        });
        document.getElementById('right').addEventListener('tap',
        function() {
            change_value("x", 1);
        });

        document.getElementById('leftup').addEventListener('tap',
        function() {
            change_value("x", -1);
            change_value("y", 1);
        });

        document.getElementById('leftdown').addEventListener('tap',
        function() {
            change_value("x", -1);
            change_value("y", -1);
        });

        document.getElementById('rightup').addEventListener('tap',
        function() {
            change_value("x", 1);
            change_value("y", 1);
        });

        document.getElementById('rightdown').addEventListener('tap',
        function() {
            change_value("x", 1);
            change_value("y", -1);
        });

        document.getElementById('up').addEventListener('tap',
        function() {
            change_value("y", 1);
        });

        document.getElementById('down').addEventListener('tap',
        function() {
            change_value("y", -1);
        });

        document.getElementById('rise').addEventListener('tap',
        function() {
            change_value("z", 1);
        });
        document.getElementById('fall').addEventListener('tap',
        function() {
            change_value("z", -1);
        });
        
        
