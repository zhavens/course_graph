var departmentFiltersOn = false;
var departmentFilters = [false, false, false, false, false, false, false, false, false, false];
var levelFiltersOn = false;
var levelFilters = [false, false, false, false];
var termFiltersOn = false;
var termFilters = [false, false, false];

$(document).ready(function (){
    $('.filter-menu').css('left', '0px');

    buildColumns();

    $('.filter-menu-toggle').on('click', function(event){
        event.preventDefault();
        // create menu variables
        var filterMenu = $('.filter-menu');
        var filterMenuWidth = $('.filter-menu').width();
        
        // toggle open class
        filterMenu.toggleClass("open");
        
        // slide menu
        if(filterMenu.hasClass("open")){
            filterMenu.animate({
                left: "0px"
            });
        }else{
            filterMenu.animate({
                left: -filterMenuWidth
            }, 200);
        }
    });

    $("#clear-filters").click(function(){
        $(".filterbox").each(function(){
            this.checked = false;
        });
        clearFilters();
        $(".search").each(function(){
            this.value == "";
        });
    });


    $('.worksheet-menu-toggle').on('click', function(event){
        event.preventDefault();
        // create menu variables
        var worksheetMenu = $('.worksheet-menu');
        var worksheetMenuWidth = $('.worksheet-menu').width();
        
        // toggle open class
        worksheetMenu.toggleClass("open");
        
        // slide menu
        if(worksheetMenu.hasClass("open")){
            worksheetMenu.animate({
                right: "0px"
            });
        }else{
            worksheetMenu.animate({
                right: -worksheetMenuWidth
            }, 400);
        }
    });

    addColorEffects();
});

function checkDepartmentFilters(value){
    if(value == "BIOL"){
        departmentFilters[0] = !departmentFilters[0];
    }else if(value == "COMP"){
        departmentFilters[1] = !departmentFilters[1];
    }else if(value == "DENT"){
        departmentFilters[2] = !departmentFilters[2];
    }else if(value == "DEPC"){
        departmentFilters[3] = !departmentFilters[3];
    }else if(value == "DEPM"){
        departmentFilters[4] = !departmentFilters[4];
    }else if(value == "ENVR"){
        departmentFilters[5] = !departmentFilters[5];
    }else if(value == "GEOG"){
        departmentFilters[6] = !departmentFilters[6];
    }else if(value == "HIST"){
        departmentFilters[7] = !departmentFilters[7];
    }else if(value == "MATH"){
        departmentFilters[8] = !departmentFilters[8];
    }else if(value == "PSYC"){
        departmentFilters[9] = !departmentFilters[9];
    }
    departmentFiltersOn = (departmentFilters[0] || departmentFilters[1] || departmentFilters[2] || departmentFilters[3] || departmentFilters[4] || departmentFilters[5] || departmentFilters[6] || departmentFilters[7] || departmentFilters[8] || departmentFilters[9]);
    buildColumns();
}

function checkLevelFilters(value){
    if(value == "CL1"){
        levelFilters[0] = !levelFilters[0];
    }else if(value == "CL2"){
        levelFilters[1] = !levelFilters[1];
    }else if(value == "CL3"){
        levelFilters[2] = !levelFilters[2];
    }else if(value == "CL4"){
        levelFilters[3] = !levelFilters[3];
    }
    levelFiltersOn = (levelFilters[0] || levelFilters[1] || levelFilters[2] || levelFilters[3]);
    buildColumns();
}

function checkTermFilters(value){
    if(value == "Fall"){
        termFilters[0] = !termFilters[0];
    }else if(value == "Winter"){
        termFilters[1] = !termFilters[1];
    }else if(value == "Summer"){
        termFilters[2] = !termFilters[2];
    }
    termFiltersOn = false; //(termFilters[0] || termFilters[1] || termFilters[2]);
    buildColumns();
}

function clearFilters(){
    departmentFiltersOn = false;
    departmentFilters = [false, false, false, false, false, false, false, false, false, false];
    levelFiltersOn = false;
    levelFilters = [false, false, false, false];
    termFiltersOn = false;
    termFilters = [false, false, false];
    buildColumns();
}

function buildColumns(){
    // Clear Columns
    $("#1000level").html('<h3 class="column-title">1000</h3>');
    $("#2000level").html('<h3 class="column-title">2000</h3>');
    $("#3000level").html('<h3 class="column-title">3000</h3>');
    $("#4000level").html('<h3 class="column-title">4000</h3>');

    for(var i=0; i<courses.length; i++){
        buildCourse(courses[i].courseName, courses[i].courseName.charAt(5));
    }
}

function buildCourse(name, level){
    var courseDepartment = name.substring(0,4);
    var courseLevel = level + "000";

    if(!departmentFiltersOn && !levelFiltersOn && !termFiltersOn){ // All filters are off
        $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
    }else if(departmentFiltersOn && !levelFiltersOn && !termFiltersOn){ // Only department filters are on
        if(courseDepartment == "BIOL" && departmentFilters[0]){
            $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
        }else if(courseDepartment == "COMP" && departmentFilters[1]){
            $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
        }else if(courseDepartment == "DENT" && departmentFilters[2]){
            $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
        }else if(courseDepartment == "DEPC" && departmentFilters[3]){
            $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
        }else if(courseDepartment == "DEPM" && departmentFilters[4]){
            $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
        }else if(courseDepartment == "ENVR" && departmentFilters[5]){
            $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
        }else if(courseDepartment == "GEOG" && departmentFilters[6]){
            $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
        }else if(courseDepartment == "HIST" && departmentFilters[7]){
            $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
        }else if(courseDepartment == "MATH" && departmentFilters[8]){
            $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
        }else if(courseDepartment == "PSYC" && departmentFilters[9]){
            $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
        }
    }else if(!departmentFiltersOn && levelFiltersOn && !termFiltersOn){ // Only level filters are on
        if(courseLevel == "1000" && levelFilters[0]){
            $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
        }else if(courseLevel == "2000" && levelFilters[1]){
            $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
        }else if(courseLevel == "3000" && levelFilters[2]){
            $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
        }else if(courseLevel == "4000" && levelFilters[3]){
            $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
        }
    }else if(departmentFiltersOn && levelFiltersOn && !termFiltersOn){ // Department filters and level filters are on
        if(courseDepartment == "BIOL" && departmentFilters[0]){
            if(courseLevel == "1000" && levelFilters[0]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "2000" && levelFilters[1]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "3000" && levelFilters[2]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "4000" && levelFilters[3]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }
        }else if(courseDepartment == "COMP" && departmentFilters[1]){
            if(courseLevel == "1000" && levelFilters[0]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "2000" && levelFilters[1]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "3000" && levelFilters[2]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "4000" && levelFilters[3]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }
        }else if(courseDepartment == "DENT" && departmentFilters[2]){
            if(courseLevel == "1000" && levelFilters[0]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "2000" && levelFilters[1]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "3000" && levelFilters[2]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "4000" && levelFilters[3]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }
        }else if(courseDepartment == "DEPC" && departmentFilters[3]){
            if(courseLevel == "1000" && levelFilters[0]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "2000" && levelFilters[1]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "3000" && levelFilters[2]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "4000" && levelFilters[3]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }
        }else if(courseDepartment == "DEPM" && departmentFilters[4]){
            if(courseLevel == "1000" && levelFilters[0]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "2000" && levelFilters[1]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "3000" && levelFilters[2]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "4000" && levelFilters[3]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }
        }else if(courseDepartment == "ENVR" && departmentFilters[5]){
            if(courseLevel == "1000" && levelFilters[0]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "2000" && levelFilters[1]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "3000" && levelFilters[2]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "4000" && levelFilters[3]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }
        }else if(courseDepartment == "GEOG" && departmentFilters[6]){
            if(courseLevel == "1000" && levelFilters[0]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "2000" && levelFilters[1]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "3000" && levelFilters[2]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "4000" && levelFilters[3]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }
        }else if(courseDepartment == "HIST" && departmentFilters[7]){
            if(courseLevel == "1000" && levelFilters[0]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "2000" && levelFilters[1]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "3000" && levelFilters[2]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "4000" && levelFilters[3]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }
        }else if(courseDepartment == "MATH" && departmentFilters[8]){
            if(courseLevel == "1000" && levelFilters[0]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "2000" && levelFilters[1]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "3000" && levelFilters[2]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "4000" && levelFilters[3]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }
        }else if(courseDepartment == "PSYC" && departmentFilters[9]){
            if(courseLevel == "1000" && levelFilters[0]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "2000" && levelFilters[1]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "3000" && levelFilters[2]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }else if(courseLevel == "4000" && levelFilters[3]){
                $('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName"><a href="#openModal">' + name + '</a></div></div>');
            }
        }
    }
    addColorEffects();
}

function addColorEffects(){
    $('.course').hover(function(e){
        //mouse on
        var courseData = getData(e.currentTarget.innerText);
        
        if(courseData.taken == 'false')
            $(e.target).css('border-color', 'orange');
        else
            $(e.target).css('border-color', 'green');
    }, function(e) {
        //mouse off
        $(e.target).css('border-color', 'black');
    });
}

function getData(name){
    for(var i = 0; i < courses.length; i++){
        if(name.substring(0, 9) == courses[i].courseName){
            return courses[i];
        }
    }
    return -1;
}

function toggleDisplay(id){
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
}

function registerForCourse(){
    alert("You are now registered for " + $(".course-id").html() + ".");
}
