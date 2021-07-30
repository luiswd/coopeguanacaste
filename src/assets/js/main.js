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

            $(".programTrainingMap-left svg path").removeClass('active');
            var id = $(this).attr('data-provincia');
            $("#" + id).addClass('active');
        });
    }

    $('.button-menu').on('click', function(){
      $(this).toggleClass('open');
      $('.menu-container,.header').toggleClass('open');
    });
    $('.important-links a').on('click', function(){
      $(this).removeClass('open');
      $('.menu-container,.header').removeClass('open');
    });
    $( ".important-links a" ).mouseenter(function() {
      let id = $( this ).attr('data-name');
      $("#" + id).addClass('show');
    }).mouseleave(function() {
      let id = $( this ).attr('data-name');
      $("#" + id).removeClass('show');
    });

    $('.suggestions-card').on('click', function(e){
      e.preventDefault();    
    });
    $('.card-holder').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('is-flipped');      
    });


    $('.enterpriseTabs li a').on('click', function(event){
        event.preventDefault();
        $('.enterpriseTabs li a').removeClass('active');
        $(this).addClass('active');
        let i = $(this).attr('tab');
        $('.enterpriseTabsBox .content li').addClass('hidden');
        $(`.enterpriseTabsBox .content li[content=${i}]`).removeClass('hidden');
    });

    const container_w = window.innerWidth;
    const container_h = window.innerHeight;
    
    $(window).on('mousemove.parallax', function(event) {
        var pos_x = event.pageX,
            pos_y = event.pageY,
            left  = 0,
            top   = 0,
            right = 0;

          left = container_w / 2 - pos_x;
          top  = container_h / 2 - pos_y;
          right  = container_w / 2 - pos_x;
        
        
          TweenMax.to($('.reaction'), 1, { 
            css: { 
              transform: 'translateX(' + left / -40 + 'px) translateY(' + top / -190 + 'px)' 
            }, ease:Expo.easeOut, overwrite: 'all' 
          });

          TweenMax.to($('.like'), 1, { 
            css: { 
              transform: 'translateX(' + left / 40 + 'px) translateY(' + top / 190 + 'px)' 
            }, ease:Expo.easeOut, overwrite: 'all' 
          });

          TweenMax.to($('.star'), 1, { 
            css: { 
              transform: 'translateX(' + right / 40 + 'px) translateY(' + top / 190 + 'px)' 
            }, ease:Expo.easeOut, overwrite: 'all' 
          });
    });

    // Scroll Animations
    gsap.to(".girl-ilu", {
      scrollTrigger: {
        trigger:".television",
        start: "top center",
        toggleActions: "restart play reverse play",
        end: "top 100px",
        scrub:true,
      },
      x: 17,
      opacity: 1,
    });
    gsap.to(".tv-ilu", {
      scrollTrigger: {
        trigger:".television",
        start: "top center",
        toggleActions: "restart play reverse play",
        end: "top 100px",
        scrub:true,
      },
      x: -10,
      opacity: 1,
    });
    gsap.to(".signal-ilu", {
      scrollTrigger: {
        trigger:".internet",
        start: "top center",
        toggleActions: "restart play reverse play",
        end: "top 100px",
        scrub:true,
      },
      x: 70,
      y:50,
      opacity: 1,
    });
    gsap.to(".guy-ilu", {
      scrollTrigger: {
        trigger:".internet",
        start: "top center",
        toggleActions: "restart play reverse play",
        end: "top 100px",
        scrub:true,
      },
      x: -10,
      opacity: 1,
    });
    gsap.to(".bubble-ilu", {
      scrollTrigger: {
        trigger:".telefonia",
        start: "top center",
        toggleActions: "restart play reverse play",
        end: "top 100px",
        scrub:true,
      },
      x: -70,
      y:80,
      opacity: 1,
    });
    gsap.to(".lady-ilu", {
      scrollTrigger: {
        trigger:".telefonia",
        start: "top center",
        toggleActions: "restart play reverse play",
        end: "top 100px",
        scrub:true,
      },
      x: 10,
      opacity: 1,
    });
    // Coverage
    gsap.to(".bubbles", {
      scrollTrigger: {
        trigger:".coverage",
        start: "top center",
        toggleActions: "restart play reverse play",
        end: "top 100px",
        scrub:true,
      },
      opacity: 0.2,
      duration:2
    });
    gsap.to(".coverage-map circle", {
      scrollTrigger: {
        trigger:".coverage",
        start: "top center",
        toggleActions: "restart play reverse play",
        end: "top 100px",
        scrub:true,
      },
      opacity: 1,
      duration:2,
      delay:1
    });
    gsap.to(".coverage-map circle", {
      scrollTrigger: {
        trigger:".coverageZone",
        start: "top center",
        toggleActions: "restart play reverse play",
        end: "top 100px",
        scrub:true,
      },
      opacity: 1,
      duration:2,
      delay:1
    });
    gsap.to(".coverage-content", {
      scrollTrigger: {
        trigger:".coverage",
        start: "top center",
        toggleActions: "restart play reverse play",
        end: "top 100px",
        scrub:true,
      },
      x:-100
    });
    gsap.to(".coverage-ilustration", {
      scrollTrigger: {
        trigger:".coverage",
        start: "top center",
        toggleActions: "restart play reverse play",
        end: "top 100px",
        scrub:true,
      },
      x:100
    });
    // Combos
    gsap.to(".rocket", {
      scrollTrigger: {
        trigger:".combos",
        start: "top center",
        toggleActions: "restart play reverse play",
        end: "100% 100px",
        scrub: 0.2,
      },
      y:-1000,
      x:1800,
      duration:20,
    });
    // Suggestions
    gsap.to(".bubbles", {
      scrollTrigger: {
        trigger:".suggestions",
        start: "top center",
        toggleActions: "restart play reverse play",
        end: "top 100px",
        scrub:true,
      },
      opacity: 1,
      duration:2
    });
    // Services
    gsap.to(".service", {
      scrollTrigger: {
        trigger:".services",
        start: "top center",
        toggleActions: "restart play reverse play",
        end: "top 100px",
        scrub:true,
      },
      opacity: 1,
      y:0,
      duration:6,
      delay:3
    });
  

})();
