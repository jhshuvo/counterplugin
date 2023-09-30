
// java Scripts
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
//=============== jQuery==============
$(document).ready(function(){

  $('.count').counterUp({
    delay: 20,
    time: 1000
});


// $(selector).countMe(delay,speed)
$("#counter").countMe(4,10);
$("#counte").countMe(4,10);
$("#count").countMe(4,10);
})


