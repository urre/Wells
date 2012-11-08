/* Author:
  @urre
*/

  jQuery.fn.css2 = jQuery.fn.css;

  jQuery.fn.css = function() {
      if (arguments.length) return jQuery.fn.css2.apply(this, arguments);
      var attr = ['font-family','font-size','font-weight','font-style','color',
          'text-transform','text-decoration','letter-spacing','word-spacing',
          'line-height','text-align','vertical-align','direction','background-color',
          'background-image','background-repeat','background-position',
          'background-attachment','opacity','width','height','top','right','bottom',
          'left','margin-top','margin-right','margin-bottom','margin-left',
          'padding-top','padding-right','padding-bottom','padding-left',
          'border-top-width','border-right-width','border-bottom-width',
          'border-left-width','border-top-color','border-right-color',
          'border-bottom-color','border-left-color','border-top-style',
          'border-right-style','border-bottom-style','border-left-style','position',
          'display','visibility','z-index','overflow-x','overflow-y','white-space',
          'clip','float','clear','cursor','list-style-image','list-style-position',
          'list-style-type','marker-offset'];
      var len = attr.length, obj = {};
      for (var i = 0; i < len; i++)
      obj[attr[i]] = jQuery.fn.css2.call(this, attr[i]);
      return obj;
  }

$(document).ready(function() {



  $('ul.links a').click(function() {

    copycss = $(this);
    thecss = $(this).parent().parent().parent().parent().css();


      $.each(thecss, function(i, val) {

      var notcopy = new Array("opacity", "margin-right", "margin-left", "margin-bottom", "vertical-align",
        "text-align", "word-spacing", "width", "height", "top", "right", "bottom", "left", "background-attachment",
        "direction"
        );

      /*
        if($.inArray(i, notcopy) >=1 ) {
              $("p#desc").append(i + " : " + val + "<br/>");
        }
        */

        $("p#desc").append(i + " : " + val + "<br/>");

     });

      copycss.zclip({
        path:'js/ZeroClipboard.swf',
        copy:$('p#desc').text(),
        afterCopy:function(){
          copycss.css('color','red');


        }
      });



  });



  //var testar = $('.well16').css();



  //console.log(testar);



});