$(document).ready(function () {
    var swiper1 = new Swiper('.swiper1', {
        speed: 800,
        effect: 'fade',
        allowTouchMove: false,
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
    var controller = new ScrollMagic.Controller();

    var swiper1_triggers = document.querySelectorAll('.swiper1_trigger');
    swiper1_triggers.forEach(function (swiper1_trigger) {
        new ScrollMagic.Scene({
            triggerElement: swiper1_trigger,
            triggerHook: 0.8
        })
            .addTo(controller)
            // .addIndicators()
            .on("enter", function (e) {
                swiper1.slideNext();
            })
            .on("leave", function (e) {
                swiper1.slidePrev();
            })
    })



    // 第2个swiper的处理
    var swiper2 = new Swiper('.swiper2', {
        speed: 800,
        effect: 'fade',
        allowTouchMove: false,
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });


    var swiper2_triggers = document.querySelectorAll('.swiper2_trigger');
    swiper2_triggers.forEach(function (swiper2_trigger) {
        new ScrollMagic.Scene({
            triggerElement: swiper2_trigger,
            triggerHook: 0.8
        })
            .addTo(controller)
            // .addIndicators()
            .on("enter", function (e) {
                swiper2.slideNext();
            })
            .on("leave", function (e) {
                swiper2.slidePrev();
            })
    })


    // 第3个swiper的处理
    var swiper3 = new Swiper('.swiper3', {
        speed: 800,
        effect: 'fade',
        allowTouchMove: false,
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });


    var swiper3_triggers = document.querySelectorAll('.swiper3_trigger');
    swiper3_triggers.forEach(function (swiper3_trigger) {
        new ScrollMagic.Scene({
            triggerElement: swiper3_trigger,
            triggerHook: 0.8
        })
            .addTo(controller)
            // .addIndicators()
            .on("enter", function (e) {
                swiper3.slideNext();
            })
            .on("leave", function (e) {
                swiper3.slidePrev();
            })
    })


     // 第4个swiper的处理
     var swiper4 = new Swiper('.swiper4', {
        speed: 800,
        effect: 'fade',
        allowTouchMove: false,
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });


    var swiper4_triggers = document.querySelectorAll('.swiper4_trigger');
    swiper4_triggers.forEach(function (swiper4_trigger) {
        new ScrollMagic.Scene({
            triggerElement: swiper4_trigger,
            triggerHook: 0.8
        })
            .addTo(controller)
            // .addIndicators()
            .on("enter", function (e) {
                swiper4.slideNext();
            })
            .on("leave", function (e) {
                swiper4.slidePrev();
            })
    })


    // 第5个swiper的处理
    var swiper5 = new Swiper('.swiper5', {
        speed: 800,
        effect: 'fade',
        allowTouchMove: false,
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });


    var swiper5_triggers = document.querySelectorAll('.swiper5_trigger');
    swiper5_triggers.forEach(function (swiper5_trigger) {
        new ScrollMagic.Scene({
            triggerElement: swiper5_trigger,
            triggerHook: 0.8
        })
            .addTo(controller)
            // .addIndicators()
            .on("enter", function (e) {
                swiper5.slideNext();
            })
            .on("leave", function (e) {
                swiper5.slidePrev();
            })
    })

})