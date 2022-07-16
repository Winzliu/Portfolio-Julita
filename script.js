// efek paralax
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.header .profile').css({
    'transform' : 'translate(0px, '+ wScroll/50 +'%)'
  })

  $('.header .profile .profile-image').css({
    'transform' : 'translate(0px, '+ wScroll/20 +'%)'
  })

  $('.header .profile .profile-text').css({
    'transform' : 'translate(0px, '+ wScroll/40 +'%)'
  })

  $('.header .profile .profile-text p').css({
    'transform' : 'translate(0px, '+ wScroll/80 +'%)'
  })

  if(wScroll > 700){
    $('.navbar').addClass('muncul')
    $('.about .container .about-text').addClass('see')
    $('.about .container .thankyou').addClass('see')
  }

  if(wScroll < 700){
    $('.navbar').removeClass('muncul')
    $('.about .container .about-text').removeClass('see')
    $('.about .container .thankyou').removeClass('see')
  }

  if(wScroll > 600){
    $('.about .container .about-text').addClass('see')
    $('.about .container .thankyou').addClass('see')
  }
})

      // card1
      const productT = document.querySelector(".product .container button");
      const pro = document.querySelector(".product .container .card");

      productT.addEventListener("click", function () {
        pro.classList.toggle("active");
      });

      // card2
      const producT = document.querySelector(".product .container .button2");
      const pr = document.querySelector(".product .container .card2");

      producT.addEventListener("click", function () {
        pr.classList.toggle("active");
      });

      // card3
      const produT = document.querySelector(".product .container .button3");
      const pra = document.querySelector(".product .container .card3");

      produT.addEventListener("click", function () {
        pra.classList.toggle("active");
      });