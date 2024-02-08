document.body.onkeydown = function( e ) {
    var keys = {
        65: 'A',
        68: 'D',
        83: 'S',
        87: 'W',
        83: 'S'
    };
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyPress( keys[ e.keyCode ] );
        render();
    }
};

