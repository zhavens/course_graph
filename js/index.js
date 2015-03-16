
$(document).ready(function (){
	$('.filter-menu').css('left', '0px');
	// $('.worksheet-menu').css('right', '0px');

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
            }, 400);
        }
    });
});

function buildColumns() {

	for(var i=0; i<courses.length; i++){
		buildCourse(courses[i].courseName, courses[i].courseName.charAt(5));
	}
};

function buildCourse(name, level){
	$('#' + level + '000level').append('<div class="course"><div class="courseName">' + name + '</div></div>');
};

function getData(){
    console.log(courses);
};
