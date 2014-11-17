var current_window;
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if ( request.method == 'getLocalStorage' ) {
		sendResponse({
			url: localStorage["url"]
		});
	} else if ( request.method == 'open_new_window' ) {
		//alert( request.wordpress_url + 'wp-admin/admin.php?page=trksit-generate&url=' + encodeURIComponent(request.url) );
		chrome.windows.create({ 
			url: request.wordpress_url + '&url=' + encodeURIComponent(request.url) 
		});
	} else {
		sendResponse({}); // Nothing
	}
});