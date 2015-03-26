google.load("visualization", "1", {
    packages: ["orgchart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {

    var selectedCourseName = "Empty";
    var selectedCourse = {};
    selectedCourse.prerequisites = "";
    selectedCourse.requiredBy = "";
    for (var i = 0; i < courses.length; i++) {
        if (courses[i].clicked == "true") {
            selectedCourse = courses[i];
        }
    }
    console.log(selectedCourse.courseName);
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('string', 'Manager');
    data.addColumn('string', 'ToolTip');

    //var prerequisitesEmpty = true;
    //console.log(JSON.stringify(selectedCourse.prerequisites));
    var prereqNodes = [];
    for (var i = 0; i < selectedCourse.prerequisites.length; i++) {
        prereqNodes.push(selectedCourse.prerequisites[i].prerequisiteName);
    }

    var requiredNodes = [];
    for (var i = 0; i < selectedCourse.requiredBy.length; i++) {
        requiredNodes.push(selectedCourse.requiredBy[i].requiredName);
    }

    if (prereqNodes.length == 1) {
        if (requiredNodes.length == 0) {
            data.addRows([
                [prereqNodes[0], '', ''],
                [selectedCourse.courseName, prereqNodes[0], 'Full name goes here'],
                ['Nothing requires this course.', selectedCourse.courseName, '']
            ]);

        } else if (requiredNodes.length == 1) {
            data.addRows([
                [prereqNodes[0], '', ''],
                [selectedCourse.courseName, prereqNodes[0], 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, '']
            ]);
        } else if (requiredNodes.length == 2) {
            data.addRows([
                [prereqNodes[0], '', ''],
                [selectedCourse.courseName, prereqNodes[0], 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, ''],
                [requiredNodes[1], selectedCourse.courseName, '']
            ]);
        } else if (requiredNodes.length == 3) {
            data.addRows([
                [prereqNodes[0], '', ''],
                [selectedCourse.courseName, prereqNodes[0], 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, ''],
                [requiredNodes[1], selectedCourse.courseName, ''],
                [requiredNodes[2], selectedCourse.courseName, '']
            ]);
        } else if (requiredNodes.length == 4) {
            data.addRows([
                [prereqNodes[0], '', ''],
                [selectedCourse.courseName, prereqNodes[0], 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, ''],
                [requiredNodes[1], selectedCourse.courseName, ''],
                [requiredNodes[2], selectedCourse.courseName, ''],
                [requiredNodes[3], selectedCourse.courseName, '']
            ]);
        } else if (requiredNodes.length == 5) {
            data.addRows([
                [prereqNodes[0], '', ''],
                [selectedCourse.courseName, prereqNodes[0], 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, ''],
                [requiredNodes[1], selectedCourse.courseName, ''],
                [requiredNodes[2], selectedCourse.courseName, ''],
                [requiredNodes[3], selectedCourse.courseName, ''],
                [requiredNodes[4], selectedCourse.courseName, '']
            ]);
        }
    } else if (prereqNodes.length == 0) {
        if (requiredNodes.length == 0) {
            data.addRows([
                ['There are no prerequisites.', '', ''],
                [selectedCourse.courseName, 'There are no prerequisites.', 'Full name goes here'],
                ['Nothing requires this course.', selectedCourse.courseName, '']
            ]);
        } else if (requiredNodes.length == 1) {
            data.addRows([
                ['There are no prerequisites.', '', ''],
                [selectedCourse.courseName, 'There are no prerequisites.', 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, '']
            ]);
        } else if (requiredNodes.length == 2) {
            data.addRows([
                ['There are no prerequisites.', '', ''],
                [selectedCourse.courseName, 'There are no prerequisites.', 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, ''],
                [requiredNodes[1], selectedCourse.courseName, '']
            ]);
        } else if (requiredNodes.length == 3) {
            data.addRows([
                ['There are no prerequisites.', '', ''],
                [selectedCourse.courseName, 'There are no prerequisites.', 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, ''],
                [requiredNodes[1], selectedCourse.courseName, ''],
                [requiredNodes[2], selectedCourse.courseName, '']
            ]);
        } else if (requiredNodes.length == 4) {
            data.addRows([
                ['There are no prerequisites.', '', ''],
                [selectedCourse.courseName, 'There are no prerequisites.', 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, ''],
                [requiredNodes[1], selectedCourse.courseName, ''],
                [requiredNodes[2], selectedCourse.courseName, ''],
                [requiredNodes[3], selectedCourse.courseName, '']
            ]);
        } else if (requiredNodes.length == 5) {
            data.addRows([
                ['There are no prerequisites.', '', ''],
                [selectedCourse.courseName, 'There are no prerequisites.', 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, ''],
                [requiredNodes[1], selectedCourse.courseName, ''],
                [requiredNodes[2], selectedCourse.courseName, ''],
                [requiredNodes[3], selectedCourse.courseName, ''],
                [requiredNodes[4], selectedCourse.courseName, '']
            ]);
        }
    } else if (prereqNodes.length == 2) {
        if (requiredNodes.length == 0) {
            data.addRows([
                [prereqNodes[0], '', ''],
                [prereqNodes[1], '', ''],
                [selectedCourse.courseName, prereqNodes[0], 'Full name goes here'],
                ['Nothing requires this course.', selectedCourse.courseName, '']
            ]);
        } else if (requiredNodes.length == 1) {
            data.addRows([
                [prereqNodes[0], '', ''],
                [prereqNodes[1], '', ''],
                [selectedCourse.courseName, prereqNodes[0], 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, '']
            ]);
        } else if (requiredNodes.length == 2) {
            data.addRows([
                [prereqNodes[0], '', ''],
                [prereqNodes[1], '', ''],
                [selectedCourse.courseName, prereqNodes[0], 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, ''],
                [requiredNodes[1], selectedCourse.courseName, '']
            ]);
        } else if (requiredNodes.length == 3) {
            data.addRows([
                [prereqNodes[0], '', ''],
                [prereqNodes[1], '', ''],
                [selectedCourse.courseName, prereqNodes[0], 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, ''],
                [requiredNodes[1], selectedCourse.courseName, ''],
                [requiredNodes[2], selectedCourse.courseName, '']
            ]);
        } else if (requiredNodes.length == 4) {
            data.addRows([
                [prereqNodes[0], '', ''],
                [prereqNodes[1], '', ''],
                [selectedCourse.courseName, prereqNodes[0], 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, ''],
                [requiredNodes[1], selectedCourse.courseName, ''],
                [requiredNodes[2], selectedCourse.courseName, ''],
                [requiredNodes[3], selectedCourse.courseName, '']
            ]);
        } else if (requiredNodes.length == 5) {
            data.addRows([
                [prereqNodes[0], '', ''],
                [prereqNodes[1], '', ''],
                [selectedCourse.courseName, prereqNodes[0], 'Full name goes here'],
                [requiredNodes[0], selectedCourse.courseName, ''],
                [requiredNodes[1], selectedCourse.courseName, ''],
                [requiredNodes[2], selectedCourse.courseName, ''],
                [requiredNodes[3], selectedCourse.courseName, ''],
                [requiredNodes[4], selectedCourse.courseName, '']
            ]);
        }
    }

    var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
    chart.draw(data, {
        allowHtml: true
    });

    $('.google-visualization-orgchart-node-medium').on('click', function(e) {
        console.log(e.currentTarget.innerText);
        var courseFound = false;
        clearSelected();

        for (var i = 0; i < courses.length; i++) {
            if (e.currentTarget.innerText.substring(0, 9) == courses[i].courseName) {
                courses[i].clicked = "true";
                courseFound = true;
            }
        }

        if(courseFound) {
            drawChart();
        }
    });

    $('#chart_div').append('<div id="prerequisite_title">Prerequisites:</div><div id="selected_title">Current Selection:</div><div id="required_title">Required By:</div>');
}

function clearSelected() {
    for(var i = 0; i < courses.length; i++) {
        if(courses[i].clicked == "true") {
            courses[i].clicked = "false";
        }
    }
}

function addSection() {
    alert("Course added to worksheet.");
}