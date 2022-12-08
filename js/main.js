$(".icon-burger").on("click",function(){
  $(this).toggleClass('active');
  $("body").toggleClass('overflow-hide');
  $(".nav").toggleClass('active');
  $(document).ready(function(){
      $(document).mouseup(function(e){
          var menu = $('.nav');
          if (!menu.is(e.target) // The target of the click isn't the container.
          && menu.has(e.target).length === 0) // Nor a child element of the container
          {
              $(".icon-burger").removeClass('active');
              $("body").removeClass('overflow-hide');
              $(".nav").removeClass('active');
          }
      });
  });    
});

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
$(".icon-burger").on("click",function(){
  $(this).toggleClass('active');
  $("body").toggleClass('overflow-hide');
  $(".nav").toggleClass('active');
  $(document).ready(function(){
      $(document).mouseup(function(e){
          var menu = $('.nav');
          if (!menu.is(e.target) // The target of the click isn't the container.
          && menu.has(e.target).length === 0) // Nor a child element of the container
          {
              $(".icon-burger").removeClass('active');
              $("body").removeClass('overflow-hide');
              $(".nav").removeClass('active');
          }
      });
  });    
});
$(".leaderboard aside-menu ul li").on("click",function(){
  $(".leaderboard aside-menu ul li").removeClass("active");
  $(this).addClass("active");
  console.log($(this).html());
  return;
});


function checkField() {
  const user = $("#username").val();
  const pass = $("#password").val();

  if(user.length <4 && pass.length <2)
  {
    $(".btn.btn-pink.corporate").addClass('disabled');

  }
  if(user.length >=4 &&  pass.length >= 2)
  {
    $(".btn.btn-pink.corporate").removeClass('disabled');
  }


}

function checkOTP() {
  const otp = $("#otp").val();
  if(otp.length >=1) {
    $("#participant-btn").removeClass('disabled');
  }
}

function checkNum(e) {
  console.log(e);
  const num = $("#userNum").val();

  if(num.length >9) {
    $("#otp-btn").removeClass('disabled');
    return;
  }
}

function verifyNumberMob(event) {
  const num = $("#userNum").val();
  let main1 = $("#first-main").val();
  let main2 = $("#second-main").val();
  let main3 =  $("#third-main").val();
  let main4 = $("#fourth-main").val();

  const otp = main1 + main2 + main3 + main4;

  if(otp.length <=3) {
    $(".otp-boxes").addClass('error');
    return;
  }

  if(num == '0000000000' && otp == '1234') {
    $("#numcheckerror").removeClass('error');
    $(".otp-boxes").removeClass('error');
    window.location.href="/dashboard/participants-dashboard.html";
  }
  else {
    $(".intro.otp-info").hide();
    $(".mob-otp-time").show();
    $("#numcheckerror").addClass('error');
    $(".otp-boxes").addClass('error');
  }

  console.log(otp);
  // if($("#userNum").val() == '') {
  //   $("#userNum").parent().addClass('error');
  //   return;
  // }
  // if($("#otp").val() == '') {
  //   $("#otp").parent().addClass('error');
  //   return;
  // }
  // if($("#userNum").val() == '0000000000' && $("#otp").val() == '1234')
  // {
  //   window.location.href="/dashboard/dashboard.html";
  // }
  // else {
  //   $("#otp").parent().addClass('error');
  // }

}

function verifyNumber(event) {
  const num = $("#userNum").val();
  let main1 = $("#first-main").val();
  let main2 = $("#second-main").val();
  let main3 =  $("#third-main").val();
  let main4 = $("#fourth-main").val();

  const otp = main1 + main2 + main3 + main4;

  if(otp.length <=3) {
    $(".otp-boxes").addClass('error');
    return;
  }

  if(num == '0000000000' && otp == '1234') {
    $("#numcheckerror").removeClass('error');
    $(".otp-boxes").removeClass('error');
    window.location.href="/dashboard/participants-dashboard.html";
  }
  else {
    $(".intro.otp-info").hide();
    $(".resend-otp-text").show();
    $("#numcheckerror").addClass('error');
    $(".otp-boxes").addClass('error');
  }

  console.log(otp);
  // if($("#userNum").val() == '') {
  //   $("#userNum").parent().addClass('error');
  //   return;
  // }
  // if($("#otp").val() == '') {
  //   $("#otp").parent().addClass('error');
  //   return;
  // }
  // if($("#userNum").val() == '0000000000' && $("#otp").val() == '1234')
  // {
  //   window.location.href="/dashboard/dashboard.html";
  // }
  // else {
  //   $("#otp").parent().addClass('error');
  // }

}

function getMobOTP(event){
  const num = $("#userNum").val();
  if($("#userNum").val() == '' || num.length != 10) {
    $("#numcheckerror").addClass('error');
    return;
  }
  if(num.length == 10) {
    $("#numcheckerror").removeClass('error');
    $("#otp-form").show();
    $("#resend-otp-mob").show();
    $("#numcheckerror").hide();
    $(".send-otp").hide();
    $("#participant-btn-mob").show();
  }
}

function getOTP(event) {
  const num = $("#userNum").val();
  if($("#userNum").val() == '') {
    $("#numcheckerror").addClass('error');
    return;
  }
  console.log(num.length);
  if(num.length == 10) {
    $("#numcheckerror").removeClass('error');
    $("#otp-form").show();
    $("#participant-btn-desk").show();
  }
  
}

function verifyUser(event) {
  var nameOfButton = event.target.innerHTML;
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
  $(".btn.btn-pink.corporate").text('Loading...')
  
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

          $(".btn.btn-pink.corporate").text(nameOfButton);
            $("#username").parent().addClass('error');
            $("#password").parent().addClass('error');
            // $("#username").siblings().text('Invalid Access');
            // alert("Invalid Access");
            return;
            // $("#password").parent().addClass('error');
        }
        $(".btn.btn-pink").text(nameOfButton);
        // var url = window.location.origin + '/dashboard/dashboard.html';
        // window.open(url,"_blank");
        window.location.href="/dashboard/index.html";
      });
}



// popup

function openPopup() {
  $(".overlay").addClass('overlay-open');
  $(".popup").show();
}
function closePopup() {
  $(".popup").hide();
  $(".overlay").removeClass('overlay-open');

}





$(".checkbox-content").on("click",function(){
  $(".checkbox-content .checkbox").toggleClass('active');
})

$("#corporate-enquiry input").on("keyup",function() {
  const name = $("#fullName").val();
  const email = $("#corporateEmail").val();
  const number = $("#contactNumber").val();
  const company = $("#yourCompany").val();
  if(name.length !=0 && email.length !=0  && number.length != 0 && company.length != 0)  {
      $(".popup-btn .btn").removeClass('disabled');
  }
});
function saveRecord() {
  if($(".popup-btn .btn").hasClass('disabled')) {
      return;
  }
  if($("#fullName").val() == '')
  {
     $("#fullName").parent().addClass('error');
     return;
  }
  if($("#corporateEmail").val() == '') {
      $("#corporateEmail").parent().addClass('error');
      return;
  }
  if($("#contactNumber").val() == '') {
      $("#contactNumber").parent().addClass('error');
      return;
  }
  if($("#yourCompany").val() == '') {
      $("#yourCompany").parent().addClass('error');
      return;
  }
  console.log($("#mark").is(":checked"));
}




