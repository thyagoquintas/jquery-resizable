/*!
 * jQuery Resizable plugin v1.0.0
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
        	cursor : "nw-resize",
        	onResizeStart : function() { },
        	onResizing : function() { },
        	onResizeEnd : function() { }
        }, contents);

	    var onResizeStart = contents.onResizeStart;
	    var onResizing = contents.onResizing;
	    var onResizeEnd = contents.onResizeEnd;
        var $element = this;
        
        return $element.css('cursor', contents.cursor).on("mousedown", function(e) {
            onResizeStart($($(this).parents()[0]));
            var $element = $(this);
           
            var $element_parent = $($element.parents()[0]).addClass('resizable');
	            var drg_w = $element_parent.outerWidth(),
	                drg_h = $element_parent.outerHeight(),
	                pos_y = $element_parent.offset().top + drg_h - e.pageY,
	                pos_x = $element_parent.offset().left + drg_w - e.pageX;
	                	
	            $element.css('z-index', 9999)
	            $('*').on("mousemove", function(e) {
	                onResizing(e);
	                $('.resizable').css({
	                    'width' :  pos_x + e.pageX,
	                    'height' : pos_y + e.pageY
	                });
	            }).on("mouseup", function(){
	              	$(this).unbind('mousemove');
	            	$(this).removeClass('resizable');
	            });
            e.preventDefault();
        }).on("mouseup", function() {
	        onResizeEnd($($(this).parents()[0]));
        });
    }
})(jQuery);