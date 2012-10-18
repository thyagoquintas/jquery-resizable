/*!
 * jQuery Resizable plugin v1.0.2
 * 
 * v1.0.2: Change the element to get the mousemove
 * v1.0.1: Fixed math mistake.
 *
 * Copyright 2012, Thyago Quintas (dev@thyagoquintas.com.br)
 * https://github.com/thyagoquintas/jquery-resizable/
 * 
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0 
 */
(function($) {
    $.fn.resizable = function(contents) {
        contents = $.extend({
        	cursor : 'nw-resize',
        	onResizeStart : function() { },
        	onResizing : function() { },
        	onResizeEnd : function() { }
        }, contents);

	    var onResizeStart = contents.onResizeStart;
	    var onResizing = contents.onResizing;
	    var onResizeEnd = contents.onResizeEnd;
        var $element = this;
        
        return $element.css('cursor', contents.cursor).on('mousedown', function(e) {
            onResizeStart($($(this).parents()[0]));
            var $element = $(this);
           
            var $element_parent = $($element.parents()[0]).addClass('resizable');
            	
                $(window).on('mousemove', function(e) {
	                onResizing(e);
	                var pos_y = $element_parent.offset().top,
	                	pos_x = $element_parent.offset().left;

	                $('.resizable').css({
	                    'width' :  e.pageX - pos_x,
	                    'height' : e.pageY - pos_y
	                });
	            }).on('mouseup', function(){
	              	$(window).unbind('mousemove');
	            	$element_parent.removeClass('resizable');
	            });
            e.preventDefault();
        }).on("mouseup", function() {
	        onResizeEnd($($(this).parents()[0]));
        });
    }
})(jQuery);