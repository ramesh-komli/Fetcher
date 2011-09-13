/*
    Fetcher
    Version 1.0
    Copyright: Michael Smotherman (@codeinfused)
    Dual licensed under the MIT or GPL Version 2 licenses.
    http://jquery.org/license
    Dependencies:
     - jQuery 1.5+
     - jQuery tmpl plugin
    =========================
    Goals:
    	Loads a single or multiple external templates, and creates cached versions.
    	Can automatically determine template name.
    	Can specify individual callbacks.
    	Returns deferred object.
*/

;(function($){
    
    $.fetcher = function(url, name, cb){
    	
    	var def = $.Deferred(), defarr = [];
    	
    	if($.isArray(url)){
    	
    		for(var i=0; i<url.length; i++){
    			defarr.push( $.fetcher.f(url[i][0], url[i][1], url[i][2]) );	
    		};
    	
    	}else{
    		defarr.push( $.fetcher.f(url, name, cb) );
    	}
    	
    	$.when.apply($, defarr).then(def.resolve, def.reject);
    	
    	return def;
    };
    
    $.fetcher.f = function(url, name, cb){
    	var selector,
    		matches,
    		cb = (cb ? cb : $.isFunction(name) ? name : function(){}),
    		name = typeof name==="string" ? name : ''
    	;
    	
    	// get the filename without extension, and the url without the selector, and the selector
    	if(name===''){
    		matches = /^([\S]+)((\s[\S]+)*)$/.exec(url); // better way?
    		url = matches[1];
    		if(matches[3]){
    			// remove selector prefixes for template name
    			name = matches[3].replace(/[\#\.\s]/g, "");
    			selector = matches[2].substr(1);
    		}else{
    			matches = /((^[\S]+\/)|^)(([\S]+)\.[\S]+)$/.exec(url); // better way?
    			name = matches[4];
    		}
    	};
    			
    	return $.get(url, function(r){
    		
    		if(selector){
    			$(r).find(selector).template(name);
    		}else{
    			$.template(name, r);
    		};
    		cb();
    	});
    };

})(jQuery);
