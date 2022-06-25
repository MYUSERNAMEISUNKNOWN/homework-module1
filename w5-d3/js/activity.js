// User interaction with tabel cells
$(document).ready(function () {
  $('td').click(function () {
    var content = $(this).text();
    var cliff = $('thead tr th').eq($(this).index()).text();
    
    if (content != "Not Available") {
      $(this).toggleClass('tdhighlight');
      if ($(this).hasClass("tdhighlight")) {
        $('#displaySelected').css("visibility", 'visible');
        $('#displaySelected').css("margin-top", '2em');
        $('#result').append("<p>" + content + " at " + cliff + "</p>")
      } else {
        $('#result p:contains(' + content + " at " + cliff + ')').remove();
        if ($('#result').has('p').length == false) {
          $('#displaySelected').css("visibility", 'hidden');
          $('#displaySelected').css("margin-top", '0');
        }
      }
    }
  });
});