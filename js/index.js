var courses;

$(document).ready(function (){
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
});

$(function() {
    courses = courseData;
});


function getData() {
    console.log(courses);
};
