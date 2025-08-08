const lenis = new Lenis({
    // 추가된 부분
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);


document.fonts.ready.then(() => {
    // 애니메이션 시작 코드...
    gsap.set([".page-tit h1", ".page-tit p"], { opacity: 1 });

    let splitH1 = new SplitType(".page-tit h1", {
        types: "chars, words",
        tagName: "span"
    });

    let splitP = new SplitType(".page-tit p", {
        types: "chars, words",
        tagName: "span"
    });

    gsap.set([...splitH1.chars, ...splitP.chars], {
        yPercent: "random([-150, 150])",
        xPercent: "random([-150, 150])",
        opacity: 0
    });

    gsap.to([...splitH1.chars, ...splitP.chars], {
        duration: 1.3,
        yPercent: 0,
        xPercent: 0,
        opacity: 1,
        stagger: {
            from: "random",
            amount: 0.6,
        },
        ease: "power3.out"
    });
});