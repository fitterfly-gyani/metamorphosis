

$(function() {
    $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("active");
        }
    });
});

$(".leaderboard aside-menu ul li").on("click",function(){
  $(".leaderboard aside-menu ul li").removeClass("active");
  $(this).addClass("active");
  console.log($(this).html());
  return;
});


function checkField() {
  const $user = $("#username").val();
  const $pass = $("#password").val();

  if($user.length <4 && $pass.length <2)
  {
    $(".btn.btn-pink").addClass('disabled');

  }
  if($user.length >=4 &&  $pass.length >= 2)
  {
    $(".btn.btn-pink").removeClass('disabled');
  }


}

function verifyUser() {
  $("#username").parent().removeClass('error');
  $("#password").parent().removeClass('error');

  if($("#username").val() == '')
  {
    $("#username").parent().addClass('error');
    return;
  }
  if($("#password").val() == ''){
    $("#password").parent().addClass('error');
    return;
  }
  $(".btn.btn-pink").text('Loading....')
  
    const username = $("#username").val();
    const password = $("#password").val();
    // console.log($username);
    // console.log($password);
    var settings = {
        "url": "https://stage.fitterfly.com/nplus_app/account/request_account_access",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "email": username,
          "password":password
        })
      };

      $.ajax(settings).done(function (response) {
        if(response.status == 'error') {
          $(".btn.btn-pink").text('Submit');
            $("#username").parent().addClass('error');
            $("#username").siblings().text('Invalid Access');
            alert("Invalid Access");
            return;
            // $("#password").parent().addClass('error');
        }
        window.location.href="/dashboard/html/dashboard.html";
      });
}