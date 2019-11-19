let wavesReviews=["... avoids coming-of-age clichés while probing familiar themes in fresh and authentic ways. Bolstered by stylish visual flourishes, it's a harrowing and provocative plea for compassion.", "The film is too long, but I was impressed and riveted throughout.", "Provocatively examines black masculinity and the burden of living up to a societal standard, as well as a parental one."];
let bombReviews=["... as a former Fox victim, I can say I was totally caught up in [Bombshell]. And you will be too. My only question is, how do we feel about these actors playing really awful people? Because the women — despite being sexually harassed — were not forced to deliver, day after day, crazy right wing opinions, Fake News, and so on. That’s something that will be debated."];
let clemReviews=["A mature star-driven vehicle elevated by a brilliant performance that deserves all the awards it can get.","Chukwu's film is further proof that great moviemaking is key to bringing audiences into profound, somber head spaces.","If Chukwu just wants the audience to witness Bernadine's burden, the script overplays its hand by questioning Anthony's guilty conviction."];

$(".wavesImg").dblclick(function(){
    $(".headerWaves").show();
    $(".headerBomb").hide();
    $(".headerClem").hide();
    $(".reviews").html("");
    $(".wavesImg").css({"animation-play-state": "paused", "border":"solid 20px #DAA520","border-radius":"40px"});
    $(".bombImg").css({"animation-play-state": "running", "border":"solid 20px red","border-radius":"40px"});
    $(".clemImg").css({"animation-play-state": "running", "border":"solid 20px red","border-radius":"40px"});
     $(".buyTickets").show();
for (let element of wavesReviews){
    $(".reviews").append(`<blockquote><p class="waves"><em>"${element}"</p></blockquote>`);}
});


$(".bombImg").dblclick(function(){
    $(".headerBomb").show();
     $(".headerWaves").hide();
     $(".headerClem").hide();
     $(".reviews").html("");
     $(".bombImg").css({"animation-play-state": "paused", "border":"solid 20px #DAA520","border-radius":"40px"});
     $(".wavesImg").css({"animation-play-state": "running", "border":"solid 20px red","border-radius":"40px"});
     $(".clemImg").css({"animation-play-state": "running", "border":"solid 20px red","border-radius":"40px"});
      $(".buyTickets").show();
for (let element of bombReviews){
    $(".reviews").append(`<blockquote><p class="waves"><em>"${element}"</p></blockquote>`);
    }
});

$(".clemImg").dblclick(function(){
    $(".headerClem").show();
     $(".headerBomb").hide();
     $(".headerWaves").hide();
     $(".reviews").html("");
     $(".clemImg").css({"animation-play-state": "paused", "border":"solid 20px #DAA520","border-radius":"40px"});
     $(".wavesImg").css({"animation-play-state": "running", "border":"solid 20px red","border-radius":"40px"});
     $(".bombImg").css({"animation-play-state": "running", "border":"solid 20px red","border-radius":"40px"});
     $(".buyTickets").show();
for (let element of clemReviews){
    $(".reviews").append(`<blockquote><p class="waves"><em>"${element}"</p></blockquote>`);}
});

$(".buyTickets").dblclick(function(){
   $(".ticketNumber").show();
   $(".ticketQuestion").show();
   $(".confirmTickets").show();
   $(".ticketType").show();
 });


    
    