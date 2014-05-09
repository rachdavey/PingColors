var uiScripts = function () {
    var pingTypeSelected = 1;


    var init = function () {
        supportsSVG();
        tooltipHover();
        toggleGraphicsPanel();
        togglePingBubble();
        toggleCreatePing();
    };




    $('#create-ping-container, .createping-sendping').click(function () {
        toggleCreatePing()
    });

    $('#create-ping-typeofping').click(function () {
        togglePingType()
    });

    // Function for toggling type of pings to be selected
    var togglePingType = function () {
        if (pingTypeSelected == 1) {
            $('#create-ping-typeofping-inner').animate({
                top: '-70px'
            }, 500);
            pingTypeSelected = 2;
        } else {
            $('#create-ping-typeofping-inner').animate({
                top: '0px'
            }, 500);
            pingTypeSelected = 1;
        }
    };


    var createPingSelection = function () {

        // hover and click effects
        $('.createping-wheel-image g').hover(function () {

            $('.createping-wheel-image g').not(this).stop().animate({
                opacity: 0.4
            }, 200
            );
            $(this).animate({
                opacity: 1
            }, 200
           );
        }, function () {
            $('.createping-wheel-image g:not("createping-wheel-notselected")').stop().animate({
                opacity: 1
            }, 800
            );

        }
        );




        $('.createping-wheel-image g').click(function () {
            $('.createping-wheel-image g').attr("class", "createping-wheel-notselected");
            $(this).attr("class", "createping-wheel-selected");
        });
    };

    // Function for toggling the create ping on click
    var toggleCreatePing = function () {

        // CLOSES THE CREATE A PING WHEEL
        if ($('#create-ping-container').hasClass('create-ping-open')) {
            $('#create-ping-container').removeClass("create-ping-open");
            $('#create-ping-question, #create-ping-wheel textarea').animate({
                opacity: 0
            }, 100);

            $('#create-ping-wheel').animate({
                top: 0,
                height: 180,
                width: 180,
                marginLeft: '-90px',
                marginTop: ''
            }, 400);

            $('#create-ping-page').animate({
                opacity: 0
            }, 800, function () {
                $('#create-ping-page').hide();
                $('#create-ping-question').css({ 'margin-top': '-20px' });
            });

            // remove field value and hide ping button
            $('#create-ping-wheel textarea').val("");
            $('.createping-sendping, .createping-wheel-image text').hide();

            $('.createping-wheel-image g').attr("class", "");

        } else {

            // OPENS THE CREATE A PING WHEEL - EMOTIONS DEFAULT
            $('#create-ping-page').show().animate({
                opacity: 1
            }, 800);
            $('#create-ping-container').addClass('create-ping-open');
            $('#create-ping-wheel').show().delay(800).animate({
                top: '50%',
                height: 880,
                width: 1000,
                marginLeft: '-500px',
                marginTop: '-400px'
            }, 800, function () {
                $('#create-ping-question').animate({
                    opacity: 1
                }, 400, function () {
                    $('.createping-wheel-image text').each(function (index, element) {
                        $(element).delay(index * 70).fadeIn(600);
                    });

                    $('#create-ping-question').delay(2000).animate({
                        marginTop: '-165px'
                    }, 400, function () {
                        $('#create-ping-wheel textarea').delay(100).animate({
                            opacity: 1
                        }, 400,
                        function () {
                            $("#create-ping-wheel textarea").focus();

                        })
                    })
                })
            });

            $("#create-ping-wheel textarea").on("input", function () {
                $('.createping-sendping').show();
                if (!$("#create-ping-wheel textarea").val()) {
                    $('.createping-sendping').hide();
                }
            });

        }
        createPingSelection();
    };



    // Function for opening the persona panel on click
    var personaPanelOpen = function () {
        $('.nav-icon').removeClass('active-tab');
        $('#top-nav').addClass('nav-tab-persona');
        $('.nav-persona-icon').addClass('active-tab');
        $('#persona-container').addClass('persona-open').removeClass('persona-closed');
        $('#persona-container').stop().animate({
            top: 0
        }, 500);

        $('#persona-user-container').stop().delay(100).animate({
            marginTop: 94
        }, 100);
    };



    // Function for closing the persona panel on click
    var personaPanelClose = function () {
        $('#top-nav').removeClass('nav-tab-persona');
        $('.nav-icon').removeClass('active-tab');
        $('#persona-container').addClass('persona-closed').removeClass('persona-open');
        $('#persona-container').stop().animate({
            top: '100%'
        }, 500);
        $('#persona-user-container').stop().delay(100).animate({
            marginTop: 0
        }, 100);
    };

    // Function for opening the bubble over the star on the map
    var togglePingBubble = function () {
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
    };

    // Function for toggling the graphic panel on click
    var toggleGraphicsPanel = function () {
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
    };

    // Add tooltip hover delay
    var tooltipHover = function () {
        $('.tooltip-group').tooltip({
            'delay': { show: 1000 }
        });
    };

    // Does this browser/device support SVG? If so add a class to the HTML
    var supportsSVG = function () {
        return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
        if (supportsSVG()) {
            document.documentElement.className += ' svg'; // <html class=" svg">
        } else {
            document.documentElement.className += ' no-svg'; // <html class=" no-svg">
        };
    };

    $('.nav-persona-icon').click(personaPanelOpen);
    $('.persona-open-tab').click(personaPanelOpen);
    $('.persona-close-tab').click(personaPanelClose);


    return {
        init: init
    };
}();


