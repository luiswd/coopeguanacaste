(function () {
    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true
    // });

    var acc = document.getElementsByClassName("collapse");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    $('.button-menu.open').on('click', function(){
        $('.button-menu.open').addClass('hidden');
        $('.button-menu.close, .menu-container').removeClass('hidden');
        $('body').addClass('no-scroll');
    });

    $('.button-menu.close').on('click', function(){
        $('.button-menu.close, .menu-container').addClass('hidden');
        $('.button-menu.open').removeClass('hidden');
        $('body').removeClass('no-scroll');
    });

    $('.enterpriseTabs li a').on('click', function(event){
        event.preventDefault();
        $('.enterpriseTabs li a').removeClass('active');
        $(this).addClass('active');
        let i = $(this).attr('tab');
        $('.enterpriseTabsBox .content li').addClass('hidden');
        $(`.enterpriseTabsBox .content li[content=${i}]`).removeClass('hidden');
    });
})();
