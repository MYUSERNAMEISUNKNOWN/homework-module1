// User interaction with tabel cells
$(document).ready(function () {
  $('td').click(function () {
    var content = $(this).text();
    var cliff = $('thead tr th').eq($(this).index()).text();
    
    if (content != "Not Available") {
      $(this).toggleClass('tdhighlight');
      if ($(this).hasClass("tdhighlight")) {
        $('#displaySelectedActivity').modal('show');
        $('#result').css("display",'block')
        $('#result').append("<p>" + content + " at " + cliff + "</p>")
      } else {
        $('#result p:contains(' + content + " at " + cliff + ')').remove();
        $('#displaySelectedActivity').modal('show');
        if ($('#result').has('p').length == false) {
          $('#result').css("display",'none')
          // $('#displaySelectedActivity').modal('hide');
        }
      }
    }
  });
});