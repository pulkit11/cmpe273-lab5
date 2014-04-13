$(":button").click(function() {
	var isbn = this.id;
	var uri="/library/v1/books/"+isbn+"?status=lost"
	alert('About to report lost on ISBN ' + isbn);
	$.ajax({
		url: uri,
		type: 'PUT',
		contentType: "application/json",
		dataType: 'json',
		success: function(html){
			$("#status"+isbn).text("lost");
			$("#"+isbn).attr('disabled', 'disabled');
		}, 
		error: errorMsg
	});
});

function errorMsg(e, jqxhr)
{
	alert("Your request was not successful: " + jqxhr);
}