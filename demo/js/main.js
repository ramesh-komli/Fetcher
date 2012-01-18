$(document).ready(function(){

	var loadTwitter = function(){
		$.ajax({
			url: 'http://api.twitter.com/1/statuses/user_timeline/codeinfused.json',
			type: 'get',
			dataType: 'jsonp',
			success: function(response){
				$('#feed').append( $.render(response, "twitter") );
			}
		});
	
	};
	
	// creates a template called "twitter" using the file's name
	$.fetcher('templates/twitter.html').then(loadTwitter);
	
/*
	$.fetcher([
		['templates/twitter.html'],
		['templates/components.html #template_twitter'],
		['templates/components.html #template_navitem']
	]).then(loadTwitter);
*/
	
/*	
	Other ways the plugin could be used:
	===========================================
	$.fetcher('templates/components.html #template_twitter', 'twitter', loadTwitter);
	$.fetcher('templates/components.html #template_twitter', 'twitter');
	$.fetcher('templates/components.html #template_twitter', loadTwitter);
	$.fetcher('templates/components.html #template_twitter').then(loadTwitter);
	
	$.fetcher([
		[url, name, cb],
		[url, name],
		[url],
		[url, cb]
	]).then(overallCallback);
*/

});