
$(document).ready(function () {

    // Add tooltip hover delay
    $('.tooltip-group').tooltip({
        'delay': { show: 1000 }
    });


    // Function for opening the persona panel on click
    $('.persona-open').click(function () {
        $('#persona-container').addClass('persona-open').removeClass('persona-closed');
        $('#persona-container').stop().animate({
            top: 0
        }, 500);

        $('#persona-user-container').stop().delay(100).animate({
            marginTop: 94
        }, 100);
    });

    // Function for closing the persona panel on click
    $('.persona-close').click(function () {
        $('#persona-container').addClass('persona-closed').removeClass('persona-open');
        $('#persona-container').stop().animate({
            top: '100%'
        }, 500);
        $('#persona-user-container').stop().delay(100).animate({
            marginTop: 0
        }, 100);

    });

    // Function for toggling the graphic panel on click
    $('#graphics-panel').click(function () {

        if ($(this).hasClass("graphics-open")) {
            $(this).removeClass("graphics-open").animate({
                width: '300px'
            }, 500);
        } else {
            $(this).addClass('graphics-open').animate({
                width: '100%'
            }, 500);
        }
    });

    // Function for opening the bubble over the star on the map
    $('.ping-emotion-icon').hover(function () {
        $(this).find('.map-bubble').show().stop().animate({
            opacity: 1
        }, 300);
    },
        function () {
            $(this).find('.map-bubble').stop().animate({
                opacity: 0
            }, 300, function () {
                $(this).hide();
            });
        }
    );

    // Function for toggling the graphic panel on click
    $('#create-ping-container').click(function () {

        if ($(this).hasClass('create-ping-open')) {
            $(this).removeClass("create-ping-open");

            $('#create-ping-wheel h2, #create-ping-wheel textarea').animate({
                opacity: 0
            }, 100);

            $('#create-ping-wheel').animate({
                top: '14px',
                height: 150,
                width: 150,
                marginLeft: '-74px',
                marginTop: ''
            }, 400);

            $('#create-ping-page').animate({
                opacity: 0
            }, 800, function () {
                $('#create-ping-page').hide();
                $('#create-ping-wheel h2').css({'margin-top':'-20px'});
            });

        } else {

            $(this).addClass('create-ping-open');
            $('#create-ping-page').show().animate({
                opacity: 1
            }, 800);
            $('#create-ping-wheel').show().animate({
                top: '50%',
                height: 700,
                width: 700,
                marginLeft: '-350px',
                marginTop: '-350px'
            }, 800, function () {
                $('#create-ping-wheel h2').animate({
                    opacity: 1
                }, 400, function () {
                    $('#create-ping-wheel h2').delay(200).animate({
                        marginTop: '-70px'
                    }, 400, function () {
                        $('#create-ping-wheel textarea').delay(100).animate({
                            opacity: 1
                        }, 400)
                    })
                })
            })

        }
    });

    // check to see if SVG graphics are supported if so adds a class to the html which we use in the CSS to assign the SVG instead of PNG
    function supportsSVG() {
        return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
    }
    if (supportsSVG()) {
        document.documentElement.className += ' svg'; // <html class=" svg">
    } else {
        document.documentElement.className += ' no-svg'; // <html class=" no-svg">
    };



});