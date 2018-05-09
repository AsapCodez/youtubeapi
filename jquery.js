// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('enable', false);
}

// Search for a specified string.
function search(q) {
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}
$('#search-button').click(function() {
    var request = $('.form-control').val();
    search(request)
});

