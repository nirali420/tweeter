$(document).ready(function() {
  // --- our code goes here ---
  $(".tweet-textarea").keyup(function() {
    //on typing
    let counterLimit = 140;
    let charCount = $(this).val().length;
    let count = 140;
    //character entered > 140
    if (charCount > counterLimit) {
      // if charcount > change to red
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }
    count = count - charCount;
    $(".counter").text(count);
  });
});
