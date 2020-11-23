// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*
 *
 * $.getFiles({dir: '/some/dir', extension: '.jpg'})
 *
 * Returns a $.promise with an array of file locations 
 * for a given type of file from a given folder.
 *
 * Options:
 *   dir: string (required), relative directory, no trailing slash
 *   extension: string, file extension to search, default: '.jpg'
 *
 */
(function($){
  $.fn.getFiles = function(options){
    
    if (typeof options === 'string'){
      options = {dir: options};
    }

    var settings = $.extend({
      dir: null,
      extension: '.jpg'
    }, options);

    if(settings.dir === null) {
      throw new Error('$.getFiles(): missing "dir" option');
    }

    // Make last character a '/'
    if (settings.dir.charAt(settings.dir.length - 1) !== '/') {
      settings.dir = settings.dir + '/';
    }
    
    var $promise = $.Deferred();
    var files = [];
    
    $.ajax({
      //This will retrieve the contents of the folder if the folder is configured as 'browsable'
      url: settings.dir,
      success: function (data) {
        //List all file names in the page
        $(data).find('a:contains(' + settings.extension + ')').each(function () {
          //var filename = this.href.replace(window.location.host, "").replace("http:///","");               
          var filename = this.href;
          files.push(filename);
        });
        $promise.resolve(files);
        // $.each(files, function(i, fileLocation){
        //   $("body").append($("<img src=" +  fileLocation + "></img>"));
        // });
      }
    });

    return $promise;

  };
}(jQuery));


// Shuffles DOM elements
(function($){
 
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };
 
})(jQuery);
// usage: $('ul#list li').shuffle();