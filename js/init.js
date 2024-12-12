// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化 WOW
    new WOW().init();

    // 初始化导航栏
    initNavigation();

    // 初始化滚动按钮
    initScrollButton();

    // 初始化飞行卡片
    initFlyingCards();

    // 初始化微博分布图表
    initWeiboDistCharts();
});

// 导航栏初始化
function initNavigation() {
    var buttons = document.querySelectorAll('.sectionBox');
    var labels = document.querySelectorAll('.label');
    var sections = document.querySelectorAll('.part');

    // 为每个按钮添加点击事件监听器
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // 移除所有按钮和标签的active类
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            labels.forEach(function(lbl) {
                lbl.classList.remove('active');
            });

            // 添加active类到当前点击的按钮和对应的标签
            this.classList.add('active');
            var targetLabel = this.getAttribute('data-target');
            document.querySelector(targetLabel).classList.add('active');

            // 滚动到对应的内容区域
            var targetSection = document.querySelector(this.getAttribute('data-target'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 设置滚动事件监听器
    window.addEventListener('scroll', function() {
        // 遍历所有导航按钮和标签
        buttons.forEach(function(button, index) {
            var section = sections[index];

            // 检查用户是否滚动到了对应的内容部分
            if (section && isScrolledIntoView(section)) {
                // 移除所有按钮和标签的active类
                buttons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                labels.forEach(function(lbl) {
                    lbl.classList.remove('active');
                });

                // 添加active类到当前按钮和标签
                button.classList.add('active');
                labels[index].classList.add('active');
            }
        });
    });
}

// 检查元素是否在视口中
function isScrolledIntoView(elem) {
    var docViewTop = window.pageYOffset || document.documentElement.scrollTop;
    var docViewBottom = docViewTop + window.innerHeight;

    var elemTop = elem.getBoundingClientRect().top + docViewTop;
    var elemBottom = elemTop + elem.getBoundingClientRect().height;

    return elemTop < docViewBottom && elemBottom > docViewTop;
}

// 初始化滚动按钮
function initScrollButton() {
    var scrollButton = document.getElementById("scrollButton");
    if (scrollButton) {
        scrollButton.addEventListener("click", function() {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
}

// 初始化飞行卡片
function initFlyingCards() {
    const lastElement = document.querySelector('.intro-text .line9');
    const scrollDots = document.querySelectorAll('.scroll-dots');

    if (lastElement && scrollDots.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        scrollDots.forEach(dots => dots.classList.add('active'));
                    }, 1000);
                    observer.disconnect();
                }
            });
        });

        observer.observe(lastElement);
    }

    try {
        const flyingCards = new FlyingCards({
            triggerElement: '#trigger-area',
            container: '#cards-container'
        });
    } catch (error) {
        console.error('Error initializing FlyingCards:', error);
    }
}
