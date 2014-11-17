var current_url = '';
var wordpress_url = '';
window.onload = function() { 
    
    chrome.tabs.query({active:true,currentWindow:true},function(tabArray){
        current_url = tabArray[0].url;
        if ( current_url.indexOf('http') == 0 ) {
            // Get data from local storage by sending a message, since we can't access it via content scripts
            chrome.extension.sendMessage({method: "getLocalStorage"}, function(response) {
                if ( response.url ) {
                    wordpress_url = response.url;
                    url = wordpress_url + '&url=' + encodeURIComponent(current_url);

                    document.getElementById('status').innerHTML = 'Shortening link...';

                    //document.getElementById('status').innerHTML += "WordPress site: " + wordpress_url + "<br><br>URL to shorten: " + current_url + "<br><br>" + '<a href="' + url + '">' + url + "</a>";

                    chrome.extension.sendMessage({
                        method: "open_new_window",
                        url: current_url,
                        wordpress_url: wordpress_url
                    });
                } else {
                    document.getElementById('status').innerHTML = "Please open the options panel and your installation URL.";
                }
            });
        } else {
            document.getElementById('status').innerHTML = 'You cannot shorten this link.';
        }  

    });  
};