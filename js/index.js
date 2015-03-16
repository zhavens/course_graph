
$(document).ready(function (){
	$('.filter-menu').css('left', '0px');
	$('.worksheet-menu').css('right', '0px');

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
            }, 600);
        }
    });

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
});

function buildColumns() {

	for(var i = 0; i < courses.length; i++) {
		buildCourse(courses[i].courseName, courses[i].courseName.charAt(5))
	}
};

function buildCourse(name, level) {
	$('#' + level + '000level').append('<div class="course" value="' + name + '"><div class="courseName">' + name + '</div></div>');
};

function getData(name) {
    for(var i = 0; i < courses.length; i++) {
        if(name.substring(0, 9) == courses[i].courseName) {
            return courses[i];
        }
    }

    return -1;
};















