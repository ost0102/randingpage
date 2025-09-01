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

// 헤더 스크롤 기능
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return; // 헤더가 없으면 함수 종료
    
    let lastScrollTop = 0;
    const scrollThreshold = 100; // 스크롤 임계값

    function handleScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 스크롤 방향 확인
        if (currentScrollTop > lastScrollTop && currentScrollTop > scrollThreshold) {
            // 스크롤을 내릴 때 (헤더 숨기기)
            header.style.transform = 'translateY(-100%)';
            header.style.transition = 'transform 0.3s ease-in-out';
        } else if (currentScrollTop < lastScrollTop) {
            // 스크롤을 올릴 때 (헤더 보이기)
            header.style.transform = 'translateY(0)';
            header.style.transition = 'transform 0.3s ease-in-out';
        }
        
        lastScrollTop = currentScrollTop;
    }

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);
}

// DOM이 완전히 로드된 후 헤더 스크롤 기능 초기화
document.addEventListener('DOMContentLoaded', initHeaderScroll);

document.fonts.ready.then(() => {
    // page-tit 요소들이 존재하는지 확인 후 애니메이션 실행
    const pageTitH1 = document.querySelector(".page-tit h1");
    const pageTitP = document.querySelector(".page-tit p");
    
    if (pageTitH1 && pageTitP) {
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
    }
});