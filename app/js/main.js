$('.menu-icon').bind('click', function(){
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.site-nav').addClass('js-hide');
  } else {
    $(this).addClass('active');
    $('.site-nav').removeClass('js-hide');
  }
});


// Not Finished Yet. Integrate into my lightbox, eventually.
  $( function()
  {
      // ACTIVITY INDICATOR

    var activityIndicatorOn = function()
      {
        $( '<div id="imagelightbox-loading"><div>LOADING</div></div>' ).appendTo( 'body' );
      },
      activityIndicatorOff = function()
      {
        $( '#imagelightbox-loading' ).remove();
      },

      // CAPTION

      captionOn = function()
      {
        var description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"] img' ).attr( 'alt' );
        if( description.length > 0 )
          $( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
      },
      captionOff = function()
      {
        $( '#imagelightbox-caption' ).remove();
      },

    //  WITH CAPTION & ACTIVITY INDICATION

    $( 'a[data-imagelightbox="d"]' ).imageLightbox(
    {
      onLoadStart: function() { captionOff(); activityIndicatorOn(); },
      onLoadEnd:   function() { captionOn(); activityIndicatorOff(); },
      onEnd:     function() { captionOff(); activityIndicatorOff(); }
    });

  });
