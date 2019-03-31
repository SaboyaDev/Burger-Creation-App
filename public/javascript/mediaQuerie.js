$(window).resize(() => {
  if($(window).width() < 768) {
    $("#burgerIcon2").addClass("intro hideBurger");
  } else {
    $("#burgerIcon2").removeClass("intro hideBurger");
  }
});