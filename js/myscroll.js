//初始化controller
var controller = new ScrollMagic.Controller();

//滚动位置确定
var scene = new ScrollMagic.Scene({
  triggerElement: "#section2",
})
  .setTween("#shangceng", {
    opacity: 0,
  })
  .addTo(controller);


//滚动位置确定
var scene = new ScrollMagic.Scene({
  triggerElement: "#section2",
})
  .setTween("#xiaceng", {
    opacity: 1,
  })

  .addTo(controller);
