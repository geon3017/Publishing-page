// 삼각형
gsap.registerPlugin(ScrollToPlugin);
gsap.to('.box1, .box2', {
  y: 300,
  scrollTrigger: {
    trigger: '.container',
    pin: '.main-box',
    pinSpacing: true,
    start: '200',
    end: '0',
    scrub: 3,
    smooth: 3,
  },
});

// 왕관
gsap.to('.box2', {
  x: -300,
  // y: -300,
  scrollTrigger: {
    trigger: '.container',
    pin: '.main-box',
    pinSpacing: true,
    start: '200',
    end: '0',
    scrub: 3,
    smooth: 3,
  },
});

// 파란원
gsap.to('.box3', {
  x: 680,
  y: 100,
  scrollTrigger: {
    trigger: '.container',
    pin: '.main-box',
    pinSpacing: true,
    start: '200',
    end: '0',
    scrub: 3,
    smooth: 3,
  },
});

// 태양
gsap.to('.box4', {
  scale: 12,
  x: -580,
  scrollTrigger: {
    trigger: '.container',
    pin: '.main-box',
    pinSpacing: true,
    start: '200',
    end: '0',
    scrub: 3,
    smooth: 3,
  },
});

// 마리오
let t1 = gsap.to('.mario-logo', {
  y: -1250,
  scrollTrigger: {
    trigger: '.container',
    pin: '.container2',
    pinSpacing: true,
    start: '200',
    end: '0',
    scrub: 2,
  },
});
// 3번째 모션
gsap.to('.mario-logo', {
  x: -800,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container2',
    start: '400',
    end: '0',
    scrub: 1.5,
  },
});
// 초록색 반원
let t2 = gsap.to('.grsc', {
  y: 400,
  scrollTrigger: {
    trigger: '.container',
    pin: '.container2',
    pinSpacing: true,
    start: '200',
    end: '0',
    scrub: 2,
  },
});
// 3번째 모션
gsap.to('.grsc', {
  scale: 15,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container2',
    start: '400',
    end: '0',
    scrub: 1.5,
  },
});

// 쿠파아들
gsap.to('.dino', {
  x: -630,
  scrollTrigger: {
    trigger: '.container',
    pin: '.container2',
    pinSpacing: true,
    start: '200',
    end: '0',
    scrub: 2,
  },
});
// 두번째 모션
gsap.to('.dino', {
  y: 500,
  scrollTrigger: {
    trigger: '.container',
    pin: '.container2',
    pinSpacing: true,
    start: '400',
    end: '0',
    scrub: 2,
  },
});

// 노란 삼각형
gsap.to('.try', {
  x: -650,
  scrollTrigger: {
    trigger: '.container',
    pin: '.container2',
    pinSpacing: true,
    start: '200',
    end: '0',
    scrub: 2,
  },
});
// 두번째 모션
gsap.to('.try', {
  y: 500,
  scrollTrigger: {
    trigger: '.container',
    pin: '.container2',
    pinSpacing: true,
    start: '400',
    end: '0',
    scrub: 2,
    toggleActions: 'restart none none reverse',
  },
});

// // Acast
gsap.to('.c-pink', {
  y: 510,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container3',
    start: '400',
    end: '0',
    scrub: 1.5,
  },
});
gsap.to('.c-pink', {
  x: 1270,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container3',
    start: '800',
    end: '0',
    scrub: 1.5,
  },
});

gsap.to('.man, .tr-yell', {
  x: 500,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container3',
    start: '400',
    end: '0',
    scrub: 2,
  },
});
gsap.to('.man', {
  y: 550,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container3',
    start: '800',
    end: '0',
    scrub: 1.5,
  },
});
gsap.to('.tr-yell', {
  scale: 15,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container4',
    start: '800',
    end: '0',
    scrub: 1.5,
  },
});
gsap.to('.woman', {
  x: -630,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container3',
    start: '400',
    end: '0',
    scrub: 1.5,
  },
});
gsap.to('.woman', {
  y: 800,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container4',
    start: '800',
    end: '0',
    scrub: 1.5,
  },
});

// // lego
gsap.to('.red-c', {
  x: 600,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container4',
    start: '800',
    end: '0',
    scrub: 2,
  },
});
gsap.to('.lego-red', {
  x: 750,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container4',
    start: '800',
    end: '0',
    scrub: 2,
  },
});
gsap.to('.lego-blue', {
  x: -1450,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container4',
    start: '800',
    end: '0',
    scrub: 2,
  },
});
gsap.to('.tr-bl', {
  y: -400,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container4',
    start: '800',
    end: '0',
    scrub: 2,
  },
});
// 두번째 모션
gsap.to('.tr-bl', {
  scale: 15,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container5',
    start: '1000',
    end: '0',
    scrub: 2,
  },
});
// assst
gsap.to('.green-1', {
  x: 580,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container5',
    start: '1000',
    end: '0',
    scrub: 2,
  },
});
// 두번째 모션
gsap.to('.green-1', {
  y: -650,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container5',
    start: '1300',
    end: '0',
    scrub: 3,
  },
});
gsap.to('.asset', {
  x: 1350,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container5',
    start: '1000',
    end: '0',
    scrub: 2,
  },
});
// 두번째 모션
gsap.to('.asset', {
  y: 1350,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container5',
    start: '1300',
    end: '0',
    scrub: 2,
  },
});
gsap.to('.pink-1', {
  x: -1020,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container5',
    start: '1000',
    end: '0',
    scrub: 2,
  },
});
// 두번째 모션
gsap.to('.pink-1', {
  y: -760,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container5',
    start: '1300',
    end: '0',
    scrub: 2,
  },
});
gsap.to('.red-car', {
  x: -1800,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container5',
    start: '1000',
    end: '0',
    scrub: 2,
  },
});
// 두번 째 모션
gsap.to('.red-car', {
  y: 500,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container5',
    start: '1300',
    end: '0',
    scrub: 2,
  },
});
gsap.to('.vespa', {
  x: -1380,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container5',
    start: '1000',
    end: '0',
    scrub: 4,
  },
});
// 두번째 모션
gsap.to('.vespa', {
  y: 500,
  scrollTrigger: {
    trigger: '.container',
    pin: 'container5',
    start: '1300',
    end: '0',
    scrub: 4,
  },
});
// text

$(document).ready(function () {
  $('span').click(function () {
    var submenu = $(this).next('.text-box');
    // 부드럽게
    if (submenu.is(':visible')) {
      submenu.slideUp();
    } else {
      submenu.slideDown();
    }
  });
});
