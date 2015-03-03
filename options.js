function save_options() {
	var url = document.getElementById('url').value;
	var status = document.getElementById("status");

	if ( url == '' ) {
		localStorage["url"] = url;
		status.className = "alert alert-success";
		status.innerHTML = "Successfully saved!";
	} else if ( url.indexOf('page=trksit-generate') < 0 ) {
		status.className = "alert alert-danger";
		status.innerHTML = "<strong>Please enter a validate Generate URL path.</strong><br>For example: http://yoursite.com/wp-admin/admin.php?page=trksit-generate";
	} else {
		localStorage["url"] = url;
		// Update status to let user know options were saved.
		status.className = "alert alert-success";
		status.innerHTML = "Successfully saved!  You may now use the trks.it quick launch icon in your extension bar to shorten the page you're viewing.";
	}
}

function restore_options() {
	var url = localStorage["url"];
	if ( !url ) return;
	document.getElementById('url').value = url;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);