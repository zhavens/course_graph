$overlay = $('#modal-overlay');
$modal = $('#modal');
$content = $('#modal-body');
$close = $('#modal-close');

$modal.hide();
$overlay.hide();
$modal.append($content);


$(document).ready(function(){
    $('body').append($overlay, $modal);
});

$("#modal-open").click(function () {
    open_modal("<p> HELLO WORLD! </p>");
});

$close.click( function() {
    close_modal();
});

var open_modal = function (settings) {
    //$content.empty().append(settings.content);

    $modal.css({
        width: settings.width || 'auto', 
        height: settings.height || 'auto'
    })

    center_modal();

    $(window).bind('resize.modal', center_modal());

    $modal.show();
    $overlay.show();
};

var center_modal = function () {
    var top, left;

    top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
    left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

    $modal.css({
        top:top + $(window).scrollTop(), 
        left:left + $(window).scrollLeft()
    });
};

var close_modal = function () {
    $modal.hide();
    $overlay.hide();
    $content.empty();
    $(window).unbind('resize.modal');
};

$("#modal-test").click(function () {
    $modal.css({
        width: 'auto', 
        height: 'auto'
    })

    center_modal();

    $modal.show();
    $overlay.show();
});