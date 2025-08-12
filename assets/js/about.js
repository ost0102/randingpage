const path = document.querySelector(".heart");
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

gsap.to(path, {
        strokeDashoffset: 0,
        scrollTrigger: {
            trigger: ".about-s2",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true
        }
});

const aboutText = new SplitType('.about-s2-txt p', { types: 'chars' });
const aboutS2Tl = gsap.timeline({
    scrollTrigger: {
    trigger: ".about-s2",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    }
});
aboutS2Tl.from(aboutText.chars, {
    opacity: .25,
    duration: 0.1,
    stagger: 0.02,
    ease: "power3.out"
});


const aboutS3Tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-s3",
        start: "top 50%",
        end: "60% bottom",
        scrub: 1,
        toggleActions: "play none none none",
        onEnter: () => {
            document.querySelectorAll('.about-s3-tit .img1').forEach(img => {
                img.classList.add('active');
            });
        }
    }
});
const aboutS3Tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-s3",
        start: "top 40%",
        end: "50% bottom",
        scrub: 1,
        toggleActions: "play none none none",
        onEnter: () => {
            document.querySelectorAll('.about-s3-tit .img2').forEach(img => {
                img.classList.add('active');
            });
        }
    }
});
gsap.set(".about-s3-txt", {
    y: 200,
});
const aboutS3Tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-s3",
        start: "top 20%",
        end: "bottom bottom",
        toggleActions: "play none none none",
    }
});
aboutS3Tl3.to(".about-s3-txt", {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out"
});

const path2 = document.querySelector(".cls-1");
const pathLength2 = path2.getTotalLength();
path2.style.strokeDasharray = pathLength2;
path2.style.strokeDashoffset = pathLength2;
let circleTl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-circle",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onEnter: () => {
                document.querySelectorAll('.about-circle').forEach((el) => el.classList.add('active'));
            },
            onLeaveBack: () => {
                document.querySelectorAll('.about-circle').forEach((el) => el.classList.remove('active'));
            }
        }
    });
    gsap.to(path2, {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: ".about-circle",
                start: "top+=100 top",
                end: "top+=1000 top",
                scrub: 1,
                invalidateOnRefresh: true
            }
    });

let circlesplit = new SplitType(".circle-txt1", { types: "chars", tagName: "span" });
circlechars = circlesplit.chars;
gsap.from(circlechars, {
    y: 50,
    opacity: 0,
    duration: 2.5, // 부드럽게 올라오는 시간
    stagger: 0.08, // 한 글자씩 차례로 등장
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".s4_tl",
        start: "top+=700 top",
        end: "top+=1000 top",
        scrub: true, // 스크롤할 때 부드럽게 조정
    }
});

let circleTl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".s4_tl",
        start: "top+=700 top",
        end: "top+=1000 top",
        scrub: true,
    }
});
circleTl2
    .to('.ct',{opacity:1})

let od01, od02;
// DOM이 로드된 후 Odometer 초기화
document.addEventListener('DOMContentLoaded', () => {
    od01 = new Odometer({
        el: document.querySelector('.odometer01'),
        value: 0
    });
    od02 = new Odometer({
        el: document.querySelector('.odometer02'),
        value: 0
    });
});

let circleTl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".s4_tl",
        start: "top+=1500 top",
        end: "top+=3000 top",
        scrub: true,
    }
});
circleTl3
    .to('.circle-img',{opacity:1})
    .to('.circle-img.to-left',{xPercent:-150},'0')
    .to('.circle-img.to-right',{xPercent:50},'0')
    .to('.circle__inner', { y: 10, opacity: 0, duration: 0.5, ease: "power1.in" })
    .to('.circle-img-txt',{opacity:1})
    .to({}, {
        duration:1,
        onUpdate: function() {
            if (od01) {
                let progress = this.progress();
                let value = Math.round(progress * 10);
                od01.update(value);
            }
            if (od02) {
                let progress = this.progress();
                let value = Math.round(progress * 4);
                od02.update(value);
            }
        }
    })

gsap.to('.about-s5-tit',{
    xPercent: -100,       
    duration: 12,          
    ease: "none",          
    repeat: -1,   
})

const careerTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-s6",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    }
});
careerTl
    .to('.progress-bar--inner', {
        width: '100%',
        duration: 1,
        ease: "power2.out"
    },'a')
    .to('.career-box',{
        xPercent:-100,
        duration: 1,
        ease: "power2.out"
    },'a');