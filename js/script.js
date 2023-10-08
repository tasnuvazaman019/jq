//js
wow = new WOW(
{
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
})
wow.init();
//jq
$(document).ready(function(){
    // counter up
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    })
    // counter up2
     $(".num").numScroll({

    number: 123456

  });

})