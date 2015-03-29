var selectedCourseID = "Empty";
var selectedCourseName = "";
var selectedCourseSlot = "";

google.load("visualization", "1", {
    packages: ["orgchart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var selectedCourse = {};
    selectedCourse.prerequisites = "";
    selectedCourse.requiredBy = "";
    for (var i = 0; i < courses.length; i++) {
        if (courses[i].clicked == "true") {
            selectedCourse = courses[i];
            selectedCourseID = courses[i].courseID;
            selectedCourseName = courses[i].courseName;
        }
    }
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
                [selectedCourse.courseID, prereqNodes[0], 'Full name goes here'],
                ['Nothing requires this course.', selectedCourse.courseID, '']
            ]);

        } else {
            data.addRows([
                [prereqNodes[0], '', ''],
                [selectedCourse.courseID, prereqNodes[0], 'Full name goes here']
            ]);

            for(var i = 0; i < requiredNodes.length; i++) {
                data.addRow([requiredNodes[i], selectedCourse.courseID, '']);
            }
        }
    } else if (prereqNodes.length == 0) {
        if (requiredNodes.length == 0) {
            data.addRows([
                ['There are no prerequisites.', '', ''],
                [selectedCourse.courseID, 'There are no prerequisites.', 'Full name goes here'],
                ['Nothing requires this course.', selectedCourse.courseID, '']
            ]);
        } else {
            data.addRows([
                ['There are no prerequisites.', '', ''],
                [selectedCourse.courseID, 'There are no prerequisites.', 'Full name goes here']
            ]);

            for(var i = 0; i < requiredNodes.length; i++) {
                data.addRow([requiredNodes[i], selectedCourse.courseID, '']);
            }
        }
    } else if (prereqNodes.length == 2) {
        if (requiredNodes.length == 0) {
            data.addRows([
                [prereqNodes[0], '', ''],
                [prereqNodes[1], '', ''],
                [selectedCourse.courseID, prereqNodes[0], 'Full name goes here'],
                ['Nothing requires this course.', selectedCourse.courseID, '']
            ]);
        } else {
            data.addRows([
                [prereqNodes[0], '', ''],
                [prereqNodes[1], '', ''],
                [selectedCourse.courseID, prereqNodes[0], 'Full name goes here']
            ]);

            for(var i = 0; i < requiredNodes.length; i++) {
                data.addRow([requiredNodes[i], selectedCourse.courseID, '']);
            }
        }
    }

    var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
    chart.draw(data, {
        allowHtml: true
    });

    $('.google-visualization-orgchart-node-medium').on('click', function(e) {
        var courseFound = false;
        clearSelected();

        for (var i = 0; i < courses.length; i++) {
            if (e.currentTarget.innerText.substring(0, 9) == courses[i].courseID) {
                courses[i].clicked = "true";
                selectedCourseID = courses[i].courseID;
                selectedCourseName = courses[i].courseName;
                courseFound = true;
            }
        }

        if(courseFound) {
            drawChart();
        }
    });

    $('.google-visualization-orgchart-node').each(function(index, element) {
        if(this.innerText.substring(0, 9) == selectedCourseID) {
            $(this).addClass('google-visualization-orgchart-nodesel');
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
    var courseID = selectedCourseID.replace(/\s+/g, "");

    alert(selectedCourseID + " added to worksheet.");
    $('.selectedCourses').append('<tr class="' + courseID + '"><td class="info-text">Course ID:</td><td class="info-value"><span class="course-id">' + selectedCourseID + '</span></td></tr>' +
        '<tr class="' + courseID + '"><td class="info-text">Course Name:</td><td class="info-value"><span class="course-name">' + selectedCourseName + '</span></td></tr>' +
        '<tr class="' + courseID + '"><td class="info-text">Time Slot:</td><td class="info-value"><span class="course-name">' + selectedCourseSlot + '</span></td></tr>');
}
