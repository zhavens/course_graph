
      google.load("visualization", "1", {packages:["orgchart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        data.addRows([
          [{v:'COMP1010'},'', 'Introduction to Computer Science 1'],
          [{v:'COMP1020'},'', 'Introduction to Computer Science 2'],
          ['COMP2140', 'COMP1020', 'Data Structures and Algorithms'],
          ['COMP3010', 'COMP2140', 'Distributed Computing'],
          ['COMP3020', 'COMP2140', 'Human-Computer Interaction 1']
        ]);

        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        chart.draw(data, {allowHtml:true});
      }

      function addSection(){
    	  alert("Course added to worksheet.");
      }