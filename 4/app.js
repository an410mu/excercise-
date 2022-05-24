$(document).ready(function(){
  jQuery("time.timeago").timeago();

  //select and create elements
  var $app = $('#app');
  var $title = $('<h1>Twiddler</h1>');
  var $update = $('<button id="update-feed">Update Feed</button>');
  var $feed = $('<div id="feed"></div>');
  //var $tweet = $('<div class="tweet"></div>');

  //event handler function
  var renderFeed = function(user) {
    $app.append($title,$update,$feed);

    if(user === undefined) {
      var index = streams.home.length - 1;
      while(index >= 0){
        var tweet = streams.home[index];
        renderTweet(tweet);
        index -= 1;
      };
    }
    if (user) {
      var index = streams.users[user].length - 1;
      console.log(streams.users[user])
      while (index >=0 ) {
        var tweet = streams.users[user][index];
        renderTweet(tweet);
        index -= 1;
      }
    }


    $update.on('click', function(event) {
      if ($('#update-feed').html() === 'Update Feed') {
        event.preventDefault();
        $feed.empty();
        renderFeed();
      }

      if ($('#update-feed').html() === 'back') {
        $('#update-feed').html("Update Feed");
        event.preventDefault();
        $feed.empty();
        renderFeed();
      }

    });



    $('.username').on('click',function(event) {
      event.preventDefault();
      $('#update-feed').html("back");
      var usertext = $(this).text();
      var user = usertext.slice(1);
      //alert(user)
      $feed.empty();
      renderFeed(user);
    })


  };


  var renderTweet = function(tweet) {
    //define tweet elements
    var $tweet = $('<div class="tweet"></div>');
    var $profile = $('<img class="profile-photo">');
    var $name = $('<div class="username"></div>');
    var $message = $('<div class="message"></div>');
    var $time = $('<div class="timestamp"></div>');
    var $icon = $('<div class="icon"></div>');
    var readTime = jQuery.timeago(tweet.created_at);
    //set values for tweet elements
    $profile.attr("src" , tweet.profilePhotoURL);
    $name.html("@"+tweet.user);
    $message.text(tweet.message);
    $time.text(readTime);

    //Icon elements
    var $comment = $('<i class="comment"></i>');
    var $retweet = $('<i class="retweet"></i>');
    var $like = $('<i class="like"></i>');
    var $share = $('<i class="share"></i>');
    $comment.addClass("fa-solid fa-comment-dots");
    $retweet.addClass("fa-solid fa-reply");
    $like.addClass("fa-solid fa-heart");
    $share.addClass("fa-solid fa-share-nodes" );


    $icon.append($comment,$retweet,$like,$share);
    $tweet.append($profile,$name,$message,$time,$icon);
    $tweet.appendTo($feed);

    $('.comment').mouseover(mouseIn);
    $('.comment').mouseout(mouseOut);
    $('.retweet').mouseover(mouseIn);
    $('.retweet').mouseout(mouseOut);
    $('.like').mouseover(mouseIn);
    $('.like').mouseout(mouseOut);
    $('.share').mouseover(mouseIn);
    $('.share').mouseout(mouseOut);


  };

  var mouseIn = function(event) {
    $(this).css('color','red');
  }

  var mouseOut = function(event) {
    $(this).css('color','black')
  }


  renderFeed();


});

window.isItBeautifulYet = true