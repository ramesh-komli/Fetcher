$(document).ready(function(){

	var loadTwitter = function(){
		$.ajax({
			url: 'http://api.twitter.com/1/statuses/user_timeline/codeinfused.json',
			type: 'get',
			dataType: 'jsonp',
			success: function(response){
				$.tmpl("twitter2", response).appendTo('#feed');
			}
		});
	
	};
	
	// creates a template called "twitter2" using the filename
	$.fetcher('templates/twitter2.html').then(loadTwitter);
	
/*	
	Other ways the plugin could be used:
	===========================================
	$.fetcher('templates/twitter.html #twitter-tmpl', 'twitter-tmpl', loadTwitter);
	$.fetcher('templates/twitter.html #twitter-tmpl', 'twitter-tmpl');
	$.fetcher('templates/twitter.html #twitter-tmpl', loadTwitter);
	$.fetcher('templates/twitter.html #twitter-tmpl');
	
	$.fetcher([
		[url, name, cb],
		[url, name],
		[url],
		[url, cb]
	]).then(overallCallback);
*/

});