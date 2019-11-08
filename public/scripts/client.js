/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// ================= FAKE DATA =====================
//FAKE DATA taken from initial-tweets.json
const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac"
    },
    content: {
      text:
        "If I have seen further it is by standing on the shoulders of giants"
    },
    created_at: 1461116232227
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd"
    },
    content: {
      text: "Je pense , donc je suis"
    },
    created_at: 1461113959088
  }
];

// ================== FUNCTIONS =====================

// Defining/assigning new tweet structure
const createTweetElement = function(data) {
  return `<article class="tweet">
    <h3 class="profile">
      <img class="tweet-img" src=${data.user.avatars} />
      <p class="tweet-username">${data.user.name}</p>
      <p class="tweet-userid">${data.user.handle}</p>
    </h3>
    <p class="tweet-text">
      ${escape(data.content.text)}
		</p>
		<footer class="footer">
		<p class="tweet-date">${dt(data.created_at)} days ago</p>
		<div class="tweet-icons">
       <i class="fas fa-flag"></i>
       <i class="fas fa-retweet"></i>
       <i class="fas fa-heart"></i>
		 </div>
		 </footer>
  </article>`;
};

// ESCAPE/CROSS-SITE scripting
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//DATE in timgeago format
const dt = date => {
  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const noOfDays = Math.round((Date.now() - date) / millisecondsInDay);
  return noOfDays;
};

// POST tweets on server
const postTweet = function(event) {
  event.preventDefault();
  // HIDE alert message
  $(".alert1").hide();
  $(".alert2").hide();

  // FORM validation function
  let tweetText = $(".tweet-textarea").val();
  if (tweetText.length > 140) {
    // ALERT message >> char > 140
    $(".alert1").slideDown("slow");
  } else if (tweetText === "" || tweetText === null) {
    // ALERT message >> empty textbox
    $(".alert2").slideDown("slow");
  } else {
    // post tweets
    $.ajax({
      url: "/tweets/",
      method: "POST",
      data: $(this).serialize(),
      success: data => {
        loadTweets();
	$(".tweet-textarea").val("");
        $(".counter").text("140");
      }
    });
  }
};

// GET tweets from server
const loadTweets = function() {
  $.ajax({
    url: "/tweets/",
    method: "GET",
    dataType: "json",
    success: renderTweets,
    error: function(err) {
      console.error("Error: ", err);
    }
  });
};

// RENDER tweets on the page
const renderTweets = function(tweets) {
  $(".tweet-container").empty();
  tweets.forEach(el => {
    const tweet = createTweetElement(el);
    $(".tweet-container").prepend(tweet);
  });
};

// ============= JQUERY DOCUMENT READY  ==================

$(document).ready(function() {
  loadTweets();
  $("#tweet-post").submit(postTweet);
  $(".tweet-nav").click(function() {
    $(".new-tweet").toggle("slow", function() {});
  });
});
