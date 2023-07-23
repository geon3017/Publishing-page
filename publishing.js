gsap.to('.box1', {
  y: 200,
  scrollTrigger: {
    trigger: '.header-box',
    pin: '.header-box',
    start:"top top",
    end: "+=500",
    scrub: true,
  },
});

gsap.to('.box2', {
  x: -200,
  scrollTrigger: {
    trigger: '.header-box',
    pin: '.header-box',
    start:"top top",
    end: "+=500",
    scrub: true,
  },
});

gsap.to('.box3', {
  y: 200,
  scrollTrigger: {
    trigger: '.header-box',
    pin: '.header-box',
    start:"top top",
    end: "+=500",
    scrub: true,
  },
});

gsap.to('.box4', {
  scale: 2,
  scrollTrigger: {
    trigger: '.header-box',
    pin: '.header-box',
    start:"top top",
    end: "bottom",
    scrub: true,
  },
});
