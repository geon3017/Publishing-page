// 삼각형
gsap.to('.box1, .box2', {
  y: 300,
  scrollTrigger: {
    trigger: '.container',
    pin: '.main-box',
    pinSpacing: false,
    start: '10',
    end: '0',
    scrub: 3,
  },
});
gsap.to('.nintendo-box scr', {
  y: 300,
  scrollTrigger: {
    trigger: '.container',
    pin: '.main-box',
    display: 'none',
  },
});
// 왕관
gsap.to('.box2', {
  x: -300,
  // y: -300,
  scrollTrigger: {
    trigger: '.container',
    pin: '.main-box',
    pinSpacing: false,
    start: '10',
    end: '0',
    scrub: 3,
  },
});
// 파란원
gsap.to('.box3', {
  x: 550,
  y: 100,
  scrollTrigger: {
    trigger: '.container',
    pin: '.main-box',
    pinSpacing: false,
    start: '10',
    end: '0',
    scrub: 3,
  },
});
// 태양
gsap.to('.box4', {
  scale: 15,
  scrollTrigger: {
    trigger: '.container',
    pin: '.main-box',
    pinSpacing: false,
    start: '10',
    end: '0',
    scrub: 3,
    toggleClass: 'scrollimgzoomin',
  },
});
// 마리오
// gsap.to('.hero-text'){

// }

let t1 = gsap.to('.mario-logo', {
  y: -1250,
  scrollTrigger: {
    trigger: '.container',
    pin: '.container2',
    pinSpacing: false,
    start: '10',
    end: '0',
    scrub: 2,
  },
});
// 초록색 반원
gsap.to('.grsc', {
  y: 500,
  scrollTrigger: {
    trigger: '.container',
    pin: '.container2',
    pinSpacing: false,
    start: '10',
    end: '0',
    scrub: 2,
  }, 
});

// 쿠파아들
gsap.to('.dino', {
  x: -650,
  scrollTrigger: {
    trigger: '.container',
    pin: '.container2',
    pinSpacing: false,
    start: '10',
    end: '0',
    scrub: 1,
  },
});
// 노란 삼각형
gsap.to('.try', {
  x: -650,
  scrollTrigger: {
    trigger: '.container',
    pin: '.container2',
    pinSpacing: false,
    start: '10',
    end: '0',
    scrub: 1.5,
  },
});

// Acast
gsap.to('.c-pink', {
  y: -500,
  scrollTrigger: {
    trigger: '.container2',
    pin: 'container3',
    start: 'top top',
    end: '0',
    scrub: 1.5,
  },
});
