$(document).ready(()=>{
    $('#activity-table tr td').not(':first-child').css("cursor","pointer");
    $('#activity-table tr td').not(':first-child').click(function(e) {
      $(this).toggleClass('active');
    })
})