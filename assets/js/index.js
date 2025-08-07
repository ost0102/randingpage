import { gsap } from "../../node_modules/gsap/index.js";
import { TextPlugin } from "../../node_modules/gsap/TextPlugin.js";
import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger.js";
import SplitType from "../../node_modules/split-type/dist/index.js";
import Swiper from "../../node_modules/swiper/swiper-bundle.mjs";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(ScrollTrigger);

// lenis.stop();

// 폰트 로드 완료 후 애니메이션 실행
document.fonts.ready.then(() => {
    // 초기 상태 설정
    gsap.set([".s1_top-tit h2", ".s1_bottom-tit h2"], { opacity: 1 });
    
    // SplitType 생성
    let splitTop = new SplitType(".s1_top-tit h2", {
        types: "chars, words",
        tagName: "span"
    });
    
    let splitBottom = new SplitType(".s1_bottom-tit h2", {
        types: "chars, words",
        tagName: "span"
    });
    
    // 초기 상태 설정
    gsap.set([...splitTop.chars, ...splitBottom.chars], {
        yPercent: "random([-300, 300])",
        xPercent: "random([-300, 300])",
        opacity: 0
    });
    
    // 애니메이션 실행
    gsap.to([...splitTop.chars, ...splitBottom.chars], {
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
    

// 비디오 로드 확인 후 타임라인 생성
const video = document.querySelector("#video");
let s1Tl2;

function createVideoTimeline() {
    s1Tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".s1",
            start: "10% top",
            end: "90% bottom",
            scrub: true,
        }
    });
    
    gsap.set(".video-tit", {
        y: 100,
        opacity: 0
    });
    
    s1Tl2
        .to(".s1_top-tit h2", {
            y: -200,
            opacity: 0,
        },"a")
        .to(".s1_bottom-tit h2", {
            y: 200,
            opacity: 0,
        },"a")
        .to("#video", {
            currentTime: video.duration || 0,
            ease: "none",
            opacity: 1,
            transform: "translate(-50%, -50%) rotate(0deg) scale(1)",
        },"a")
        .to(".video-tit", {
            y: 0,
            opacity: 1,
        });
}

// 비디오 로드 이벤트 리스너
if (video) {
    video.addEventListener('loadedmetadata', function() {
        createVideoTimeline();
    });
    
    // 이미 로드된 경우
    if (video.readyState >= 2) {
        createVideoTimeline();
    }
}

const s2Tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".s2",
        start: "top 70%",
        end: "80% bottom",
        toggleActions: "play none none none",
    }
});

gsap.set(".s2-tit p", {
    y: 200,
    opacity: 0
});

// s2-tit h2 초기 상태 설정
gsap.set(".s2-tit h2", { opacity: 1 });

s2Tl
    .add(() => {
        // SplitType 생성
        let splitS2 = new SplitType(".s2-tit h2", {
            types: "chars, words",
            tagName: "span"
        });
        
        // 초기 상태 설정
        gsap.set(splitS2.chars, {
            yPercent: "random([-300, 300])",
            xPercent: "random([-300, 300])",
            opacity: 0
        });
        
        // 애니메이션 실행
        gsap.to(splitS2.chars, {
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
    })
    .to(".s2-tit p", {
        y: 0,
        opacity: 1,
    })

const path = document.querySelector(".heart");
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

gsap.to(path, {
        strokeDashoffset: 0,
        scrollTrigger: {
            trigger: ".s2",
            start: "10% top",
            end: "90% bottom",
            scrub: 1,
            invalidateOnRefresh: true
        }
});

gsap.fromTo(".devlop", 
    { scale: 0 },
    {
        scale: 1,
        scrollTrigger: {
            trigger: ".s2",
            start: "10% top",
            end: "90% bottom",
            scrub: 1,
        }
    }
);

let s2Split1 = new SplitType(".s2-contents-tit-p1", { types: "chars", tagName: "span" });
let s2Split1Char = s2Split1.chars;
let s2Split2 = new SplitType(".s2-contents-tit-p2", { types: "chars", tagName: "span" });
let s2Split2Char = s2Split2.chars;

gsap.from([...s2Split1Char, ...s2Split2Char], {
    y: -10,
    opacity: 0,
    duration: 2.5, 
    stagger: 0.08, 
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".s2",
        start: "10% top",
        end: "90% bottom",
        scrub: true,
    }
});

let s2imgTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".s2",
        start: "10% top",
        end: "90% bottom",
        scrub: true,
    }
});
s2imgTl.to(".s2-contents-inner img", {opacity:1, x:0})

const s3Tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".s3",
        start: "top 60%",
        end: "20% bottom",
        toggleActions: "play none none none",
    }
});

// s3-tit 초기 상태 설정
gsap.set([".s3_top-tit", ".s3_bottom-tit"], { opacity: 1 });

s3Tl1
    .add(() => {
        // SplitType 생성
        let splitS3Top = new SplitType(".s3_top-tit", {
            types: "chars, words",
            tagName: "span"
        });
        
        let splitS3Bottom = new SplitType(".s3_bottom-tit", {
            types: "chars, words",
            tagName: "span"
        });
        
        // 초기 상태 설정
        gsap.set([...splitS3Top.chars, ...splitS3Bottom.chars], {
            yPercent: "random([-300, 300])",
            xPercent: "random([-300, 300])",
            opacity: 0
        });
        
        // 애니메이션 실행
        gsap.to([...splitS3Top.chars, ...splitS3Bottom.chars], {
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
    })


let sect3 = document.querySelector('.s3');
let moreBtn = sect3.querySelector('.btn-box a');
let moreArea = sect3.querySelector('.btn-box .area');
let mouseX, mouseY;
sect3.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    let cursor = document.querySelector('.cursor');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});
// 포폴에 mouse enter
let pofol = sect3.querySelectorAll('.project-list a');
pofol.forEach(function(el, idx){
    el.addEventListener('mouseenter', (e) => {
        sect3.querySelector('.cursor').classList.add('active'); 
    });
    el.addEventListener('mouseleave', (e) => {
        sect3.querySelector('.cursor').classList.remove('active'); 
    });
}); 
// 더보기 버튼 - 마우스 따라옴
// 기준 위치 (중앙)
const areaRect = moreArea.getBoundingClientRect();
const centerX = areaRect.width / 2;
const centerY = areaRect.height / 2;
let pos = { x: centerX, y: centerY };
let mouse = { x: centerX, y: centerY };
let isActive = false;
const speed = 0.07;
const maxDistance = 100;
// 작동 시작
moreBtn.addEventListener('mouseenter', () => {
    isActive = true;
});
// 마우스 움직일 때
moreArea.addEventListener('mousemove', (e) => {
    const rect = moreArea.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});
// 작동 멈춤
moreArea.addEventListener('pointerleave', () => {
    isActive = false;
});
chasingMouse();
// 애니메이션
function chasingMouse() {
    const px = mouse.x - pos.x;
    const py = mouse.y - pos.y;
    const dx = mouse.x - centerX;
    const dy = mouse.y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (isActive && distance < maxDistance) {
        pos.x += px * speed;
        pos.y += py * speed;
    } else {
        // 원래 중앙으로 복귀
        pos.x += (centerX - pos.x) * speed;
        pos.y += (centerY - pos.y) * speed;
    }
    moreBtn.style.transform = `translate(-50%, -50%) translate(${pos.x - centerX}px, ${pos.y - centerY}px)`;
    requestAnimationFrame(chasingMouse);
}

const s4Tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".s4",
        start: "top 70%",
        end: "30% bottom",
        toggleActions: "play none none none",
    }
});

// s4-tit 초기 상태 설정
gsap.set(".s4-tit h2", { opacity: 1 });

s4Tl
    .add(() => {
        // SplitType 생성
        let splitS4First = new SplitType(".s4-tit h2:nth-child(1)", {
            types: "chars, words",
            tagName: "span"
        });
        
        let splitS4Second = new SplitType(".s4-tit h2:nth-child(2)", {
            types: "chars, words",
            tagName: "span"
        });
        
        // 초기 상태 설정
        gsap.set([...splitS4First.chars, ...splitS4Second.chars], {
            yPercent: "random([-300, 300])",
            xPercent: "random([-300, 300])",
            opacity: 0
        });
        
        // 애니메이션 실행
        gsap.to([...splitS4First.chars, ...splitS4Second.chars], {
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
    })

let isMatterFuncTriggered = false;
const s4Tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".s4",
        start: "top 50%",
        end: "80% bottom",
        toggleActions: "play none none none",
        onEnter: () => {
            if (!isMatterFuncTriggered) {
                matterFunc();
                isMatterFuncTriggered = true;
            }
        }
    }
});

function matterFunc(){
    const wallThickness = 6;
    const matterContainer = document.querySelector("#matter");
    const matterHelper = document.querySelector("#helper");

    let Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        World = Matter.World,
        Composite = Matter.Composite;

    let engine = Engine.create();
    let render = Render.create({
        element: matterHelper,
        engine: engine,
        background: "black",
        options: {
            width: matterContainer.offsetWidth,
            height: matterContainer.offsetHeight,
        }
    });

    let domBodies = document.querySelectorAll("#matter .item");
    let matterBodies = {};
    let runner;
    let leftWall, rightWall, ground;

    init();

    function init() {
        createBounds();
        Composite.add(engine.world, [leftWall, rightWall, ground]);

        // run the renderer
        Render.run(render);

        // ✅ 마우스 컨트롤 추가 시작
        let Mouse = Matter.Mouse;
        let MouseConstraint = Matter.MouseConstraint;

        let mouse = Mouse.create(render.canvas);
        let mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,         // 드래그할 때 딱 붙는 느낌 조절
                render: {
                    visible: false        // 마우스 선 안 보이게
                }
            }
        });

        World.add(engine.world, mouseConstraint);
        render.mouse = mouse;

        // 마우스 이벤트 리스너 추가 (안전한 방법)
        if (mouseConstraint.events) {
            mouseConstraint.events.on('mousedown', function(event) {
                if (event.source.body) {
                    selectedBody = event.source.body;
                    isDragging = true;
                    dragStartPos = { x: event.mouse.position.x, y: event.mouse.position.y };
                    lastMousePos = { x: event.mouse.position.x, y: event.mouse.position.y };
                    mousePositions = [];
                    
                    // 원래 위치 저장
                    selectedBody.originalPosition = { x: event.mouse.position.x, y: event.mouse.position.y };
                    selectedBody.originalAngle = selectedBody.angle;
                    
                    // DOM 요소에 dragging 클래스 추가
                    const domBody = document.querySelector(`[id="${selectedBody.id}"]`);
                    if (domBody) {
                        domBody.classList.add('dragging');
                    }
                }
            });

            mouseConstraint.events.on('mousemove', function(event) {
                if (isDragging && selectedBody) {
                    const mouseX = event.mouse.position.x;
                    const mouseY = event.mouse.position.y;
                    
                    
                    // 바디를 마우스 위치로 이동
                    Matter.Body.setPosition(selectedBody, { x: mouseX, y: mouseY });
                    
                    // 마우스 위치 기록 (속도 계산용)
                    mousePositions.push({ x: mouseX, y: mouseY, time: Date.now() });
                    if (mousePositions.length > 10) {
                        mousePositions.shift();
                    }
                    
                    lastMousePos = { x: mouseX, y: mouseY };
                }
            });

            mouseConstraint.events.on('mouseup', function(event) {
                if (isDragging && selectedBody) {
                    // 드래그 거리 계산
                    const dragDistance = Math.sqrt(
                        Math.pow(lastMousePos.x - dragStartPos.x, 2) + 
                        Math.pow(lastMousePos.y - dragStartPos.y, 2)
                    );
                    
                    
                    // 클릭만 했을 때 (드래그 거리가 5px 미만)
                    if (dragDistance < 5) {
                        // 클릭만 했을 때는 속도를 0으로 설정
                        Matter.Body.setVelocity(selectedBody, { x: 0, y: 0 });
                        Matter.Body.setAngularVelocity(selectedBody, 0);
                    }
                    // 드래그했을 때 (5px 이상)
                    else if (dragDistance >= 5 && mousePositions.length >= 3) {
                        // 마우스 속도 계산
                        const recent = mousePositions[mousePositions.length - 1];
                        const older = mousePositions[0];
                        const timeDiff = recent.time - older.time;
                        
                        if (timeDiff > 0) {
                            dragVelocity.x = (recent.x - older.x) / timeDiff * 500;
                            dragVelocity.y = (recent.y - older.y) / timeDiff * 500;
                            
                            const maxVelocity = 25;
                            const velocityMagnitude = Math.sqrt(dragVelocity.x * dragVelocity.x + dragVelocity.y * dragVelocity.y);
                            if (velocityMagnitude > maxVelocity) {
                                dragVelocity.x = (dragVelocity.x / velocityMagnitude) * maxVelocity;
                                dragVelocity.y = (dragVelocity.y / velocityMagnitude) * maxVelocity;
                            }
                            
                            Matter.Body.setVelocity(selectedBody, dragVelocity);
                        }
                    }
                    
                    // DOM 요소에서 dragging 클래스 제거
                    const domBody = document.querySelector(`[id="${selectedBody.id}"]`);
                    if (domBody) {
                        domBody.classList.remove('dragging');
                    }
                    
                    isDragging = false;
                    selectedBody = null;
                    mousePositions = [];
                }
            });
        } else {
            // DOM 이벤트를 다시 활성화
            matterHelper.addEventListener('mousedown', handleMouseDown);
            matterHelper.addEventListener('mousemove', handleMouseMove);
            matterHelper.addEventListener('mouseup', handleMouseUp);
            
            // 터치 이벤트도 추가
            matterHelper.addEventListener('touchstart', handleTouchStart);
            matterHelper.addEventListener('touchmove', handleTouchMove);
            matterHelper.addEventListener('touchend', handleTouchEnd);
        }
        
        // ✅ 마우스 컨트롤 추가 끝

        // create runner
        runner = Runner.create();
        Runner.run(runner, engine);

        // Add visual duplicates of the html elements to the helper canvas
        creatMatterBodies();
        World.add(engine.world, Object.values(matterBodies));

        window.requestAnimationFrame(updateElementPositions);
    }

    // 마우스 인터랙션 변수들
    let isDragging = false;
    let selectedBody = null;
    let dragStartPos = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };
    let lastMousePos = { x: 0, y: 0 };
    let mousePositions = [];

    function handleMouseDown(e) {
        
        const rect = matterHelper.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        
        // 마우스 위치에 있는 바디 찾기
        const bodies = Object.values(matterBodies);
        for (let body of bodies) {
            const distance = Math.sqrt(
                Math.pow(mouseX - body.position.x, 2) + 
                Math.pow(mouseY - body.position.y, 2)
            );
            
            
            if (distance < 140) { // 클릭 반경을 늘림 (140px)
                selectedBody = body;
                isDragging = true;
                dragStartPos = { x: mouseX, y: mouseY };
                lastMousePos = { x: mouseX, y: mouseY };
                mousePositions = [];
                
                // 바디를 마우스 위치로 이동
                Matter.Body.setPosition(selectedBody, { x: mouseX, y: mouseY });
                Matter.Body.setVelocity(selectedBody, { x: 0, y: 0 });
                
                // 드래그 중인 DOM 요소에 클래스 추가
                const domBody = document.querySelector(`[id="${body.id}"]`);
                if (domBody) {
                    domBody.classList.add('dragging');
                }
                
                // 전역 이벤트 리스너 추가
                document.addEventListener('mousemove', handleGlobalMouseMove);
                document.addEventListener('mouseup', handleGlobalMouseUp);
                break;
            }
        }
    }

    function handleMouseMove(e) {
        if (!isDragging || !selectedBody) return;
        
        const rect = matterHelper.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        
        // 마우스 위치 기록 (속도 계산용)
        mousePositions.push({ x: mouseX, y: mouseY, time: Date.now() });
        if (mousePositions.length > 10) {
            mousePositions.shift();
        }
        
        // 바디를 마우스 위치로 이동
        Matter.Body.setPosition(selectedBody, { x: mouseX, y: mouseY });
        
        lastMousePos = { x: mouseX, y: mouseY };
    }

    function handleMouseUp(e) {
        if (!isDragging || !selectedBody) return;
        
        // 마우스 속도 계산
        if (mousePositions.length >= 2) {
            const recent = mousePositions[mousePositions.length - 1];
            const older = mousePositions[0];
            const timeDiff = recent.time - older.time;
            
            if (timeDiff > 0) {
                dragVelocity.x = (recent.x - older.x) / timeDiff * 500; // 속도 배수 감소 (1000 -> 500)
                dragVelocity.y = (recent.y - older.y) / timeDiff * 500;
                
                // 속도 제한을 더 낮게 설정
                const maxVelocity = 25; // 최대 속도 감소 (50 -> 25)
                const velocityMagnitude = Math.sqrt(dragVelocity.x * dragVelocity.x + dragVelocity.y * dragVelocity.y);
                if (velocityMagnitude > maxVelocity) {
                    dragVelocity.x = (dragVelocity.x / velocityMagnitude) * maxVelocity;
                    dragVelocity.y = (dragVelocity.y / velocityMagnitude) * maxVelocity;
                }
                
                // 바디에 속도 적용 (던지기 효과)
                Matter.Body.setVelocity(selectedBody, dragVelocity);
            }
        }
        
        // 드래그 중인 DOM 요소에서 클래스 제거
        const domBody = document.querySelector(`[id="${selectedBody.id}"]`);
        if (domBody) {
            domBody.classList.remove('dragging');
        }
        
        isDragging = false;
        selectedBody = null;
        mousePositions = [];
    }

    // 터치 이벤트 핸들러들
    function handleTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = matterHelper.getBoundingClientRect();
        const touchX = touch.clientX - rect.left;
        const touchY = touch.clientY - rect.top;
        
        // 터치 위치에 있는 바디 찾기
        const bodies = Object.values(matterBodies);
        for (let body of bodies) {
            const distance = Math.sqrt(
                Math.pow(touchX - body.position.x, 2) + 
                Math.pow(touchY - body.position.y, 2)
            );
            
            if (distance < 140) { // 터치 반경도 늘림
                selectedBody = body;
                isDragging = true;
                dragStartPos = { x: touchX, y: touchY };
                lastMousePos = { x: touchX, y: touchY };
                mousePositions = [];
                
                Matter.Body.setPosition(selectedBody, { x: touchX, y: touchY });
                Matter.Body.setVelocity(selectedBody, { x: 0, y: 0 });
                
                const domBody = document.querySelector(`[id="${body.id}"]`);
                if (domBody) {
                    domBody.classList.add('dragging');
                }
                break;
            }
        }
    }

    function handleTouchMove(e) {
        e.preventDefault();
        if (!isDragging || !selectedBody) return;
        
        const touch = e.touches[0];
        const rect = matterHelper.getBoundingClientRect();
        const touchX = touch.clientX - rect.left;
        const touchY = touch.clientY - rect.top;
        
        mousePositions.push({ x: touchX, y: touchY, time: Date.now() });
        if (mousePositions.length > 10) {
            mousePositions.shift();
        }
        
        Matter.Body.setPosition(selectedBody, { x: touchX, y: touchY });
        lastMousePos = { x: touchX, y: touchY };
    }

    function handleTouchEnd(e) {
        e.preventDefault();
        if (!isDragging || !selectedBody) return;
        
        if (mousePositions.length >= 2) {
            const recent = mousePositions[mousePositions.length - 1];
            const older = mousePositions[0];
            const timeDiff = recent.time - older.time;
            
            if (timeDiff > 0) {
                dragVelocity.x = (recent.x - older.x) / timeDiff * 500; // 속도 배수 감소
                dragVelocity.y = (recent.y - older.y) / timeDiff * 500;
                
                const maxVelocity = 25; // 최대 속도 감소
                const velocityMagnitude = Math.sqrt(dragVelocity.x * dragVelocity.x + dragVelocity.y * dragVelocity.y);
                if (velocityMagnitude > maxVelocity) {
                    dragVelocity.x = (dragVelocity.x / velocityMagnitude) * maxVelocity;
                    dragVelocity.y = (dragVelocity.y / velocityMagnitude) * maxVelocity;
                }
                
                Matter.Body.setVelocity(selectedBody, dragVelocity);
            }
        }
        
        const domBody = document.querySelector(`[id="${selectedBody.id}"]`);
        if (domBody) {
            domBody.classList.remove('dragging');
        }
        
        isDragging = false;
        selectedBody = null;
        mousePositions = [];
    }

    // DOM 요소 직접 클릭 처리
    function handleDomMouseDown(e) {
        e.preventDefault();
        e.stopPropagation();
        
        
        const domBody = e.currentTarget;
        const bodyId = domBody.id;
        const body = matterBodies[bodyId];
        
        
        if (body) {
            const rect = matterHelper.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            
            selectedBody = body;
            isDragging = true;
            dragStartPos = { x: mouseX, y: mouseY };
            lastMousePos = { x: mouseX, y: mouseY };
            mousePositions = []; // 배열 초기화
            
            // 원래 위치 저장 (클릭만 했을 때 되돌리기 위해)
            selectedBody.originalPosition = { x: mouseX, y: mouseY };
            selectedBody.originalAngle = selectedBody.angle;
            
            // 클릭 시점에는 아무 일도 하지 않음 (바디를 그대로 두고 아무 변화 없음)
            // Matter.Body.setStatic(selectedBody, true);
            
            domBody.classList.add('dragging');
            
            
            // 전역 마우스 이벤트 리스너 추가
            document.addEventListener('mousemove', handleGlobalMouseMove);
            document.addEventListener('mouseup', handleGlobalMouseUp);
        } else {    
        }
    }

    function handleDomTouchStart(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const domBody = e.currentTarget;
        const bodyId = domBody.id;
        const body = matterBodies[bodyId];
        
        if (body) {
            const touch = e.touches[0];
            const rect = matterHelper.getBoundingClientRect();
            const touchX = touch.clientX - rect.left;
            const touchY = touch.clientY - rect.top;
            
            selectedBody = body;
            isDragging = true;
            dragStartPos = { x: touchX, y: touchY };
            lastMousePos = { x: touchX, y: touchY };
            mousePositions = []; // 배열 초기화
            
            // 터치 시점에는 위치를 변경하지 않음
            // Matter.Body.setPosition(selectedBody, { x: touchX, y: touchY });
            // Matter.Body.setVelocity(selectedBody, { x: 0, y: 0 });
            
            // 터치 시점에는 위치 기록하지 않음 (드래그 중에만 기록)
            // mousePositions.push({ x: touchX, y: touchY, time: Date.now() });
            
            domBody.classList.add('dragging');
            
            // 전역 터치 이벤트 리스너 추가
            document.addEventListener('touchmove', handleGlobalTouchMove);
            document.addEventListener('touchend', handleGlobalTouchEnd);
        }
    }

    // 전역 마우스 이벤트 핸들러
    function handleGlobalMouseMove(e) {
        if (!isDragging || !selectedBody) {
            return;
        }
        
        const rect = matterHelper.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        
        // 바디를 마우스 위치로 이동
        Matter.Body.setPosition(selectedBody, { x: mouseX, y: mouseY });
        
        // 마우스 위치 기록 (속도 계산용)
        mousePositions.push({ x: mouseX, y: mouseY, time: Date.now() });
        if (mousePositions.length > 10) {
            mousePositions.shift();
        }
        
        lastMousePos = { x: mouseX, y: mouseY };
    }

    function handleGlobalMouseUp(e) {
        if (!isDragging || !selectedBody) return;
        
        // 드래그 거리 계산
        const dragDistance = Math.sqrt(
            Math.pow(lastMousePos.x - dragStartPos.x, 2) + 
            Math.pow(lastMousePos.y - dragStartPos.y, 2)
        );
        
        
        // 클릭만 했을 때 (드래그 거리가 5px 미만)
        if (dragDistance < 5) {
            // 클릭만 했을 때는 아무 일도 하지 않음 (바디를 그대로 두고 아무 변화 없음)
        }
        // 드래그했을 때 (5px 이상)
        else if (dragDistance >= 5 && mousePositions.length >= 3) {
            // 마우스 속도 계산
            const recent = mousePositions[mousePositions.length - 1];
            const older = mousePositions[0];
            const timeDiff = recent.time - older.time;
            
            if (timeDiff > 0) {
                dragVelocity.x = (recent.x - older.x) / timeDiff * 500;
                dragVelocity.y = (recent.y - older.y) / timeDiff * 500;
                
                const maxVelocity = 25;
                const velocityMagnitude = Math.sqrt(dragVelocity.x * dragVelocity.x + dragVelocity.y * dragVelocity.y);
                if (velocityMagnitude > maxVelocity) {
                    dragVelocity.x = (dragVelocity.x / velocityMagnitude) * maxVelocity;
                    dragVelocity.y = (dragVelocity.y / velocityMagnitude) * maxVelocity;
                }
                
                Matter.Body.setVelocity(selectedBody, dragVelocity);
            }
        } else {
        }
        
        // 드래그 중인 DOM 요소에서 클래스 제거
        const domBody = document.querySelector(`[id="${selectedBody.id}"]`);
        if (domBody) {
            domBody.classList.remove('dragging');
        }
        
        // 전역 이벤트 리스너 제거
        document.removeEventListener('mousemove', handleGlobalMouseMove);
        document.removeEventListener('mouseup', handleGlobalMouseUp);
        
        isDragging = false;
        selectedBody = null;
        mousePositions = [];
    }

    // 전역 터치 이벤트 핸들러
    function handleGlobalTouchMove(e) {
        e.preventDefault();
        if (!isDragging || !selectedBody) return;
        
        const touch = e.touches[0];
        const rect = matterHelper.getBoundingClientRect();
        const touchX = touch.clientX - rect.left;
        const touchY = touch.clientY - rect.top;
        
        // 바디를 터치 위치로 이동
        Matter.Body.setPosition(selectedBody, { x: touchX, y: touchY });
        
        // 마우스 위치 기록 (속도 계산용)
        mousePositions.push({ x: touchX, y: touchY, time: Date.now() });
        if (mousePositions.length > 10) {
            mousePositions.shift();
        }
        
        lastMousePos = { x: touchX, y: touchY };
    }

    function handleGlobalTouchEnd(e) {
        e.preventDefault();
        if (!isDragging || !selectedBody) return;
        
        // 드래그 거리 계산
        const dragDistance = Math.sqrt(
            Math.pow(lastMousePos.x - dragStartPos.x, 2) + 
            Math.pow(lastMousePos.y - dragStartPos.y, 2)
        );
        
        
        // 클릭만 했을 때 (드래그 거리가 5px 미만)
        if (dragDistance < 5) {
            // 클릭만 했을 때는 아무 일도 하지 않음 (바디를 그대로 두고 아무 변화 없음)
        }
        // 드래그했을 때 (5px 이상)
        else if (dragDistance >= 5 && mousePositions.length >= 3) {
            const recent = mousePositions[mousePositions.length - 1];
            const older = mousePositions[0];
            const timeDiff = recent.time - older.time;
            
            if (timeDiff > 0) {
                dragVelocity.x = (recent.x - older.x) / timeDiff * 500;
                dragVelocity.y = (recent.y - older.y) / timeDiff * 500;
                
                const maxVelocity = 25;
                const velocityMagnitude = Math.sqrt(dragVelocity.x * dragVelocity.x + dragVelocity.y * dragVelocity.y);
                if (velocityMagnitude > maxVelocity) {
                    dragVelocity.x = (dragVelocity.x / velocityMagnitude) * maxVelocity;
                    dragVelocity.y = (dragVelocity.y / velocityMagnitude) * maxVelocity;
                }
                
                Matter.Body.setVelocity(selectedBody, dragVelocity);
            }
        } else {
        }
        
        const domBody = document.querySelector(`[id="${selectedBody.id}"]`);
        if (domBody) {
            domBody.classList.remove('dragging');
        }
        
        // 전역 이벤트 리스너 제거
        document.removeEventListener('touchmove', handleGlobalTouchMove);
        document.removeEventListener('touchend', handleGlobalTouchEnd);
        
        isDragging = false;
        selectedBody = null;
        mousePositions = [];
    }

    function createBounds() {
        leftWall = Bodies.rectangle(
            0 - wallThickness / 2,
            matterContainer.offsetHeight / 2,
            wallThickness,
            matterContainer.offsetHeight * 5,
            { isStatic: true }
        );

        rightWall = Bodies.rectangle(
            matterContainer.offsetWidth + wallThickness / 2,
            matterContainer.offsetHeight / 2,
            wallThickness,
            matterContainer.offsetHeight * 5,
            { isStatic: true }
        );

        ground = Bodies.rectangle(
            0,
              ( window.innerWidth <= 768 ? matterContainer.offsetHeight * 1.4: matterContainer.offsetHeight * 1.15 ),
              matterContainer.offsetWidth * 2,
            wallThickness,
            { isStatic: true }
        );
    }

    function creatMatterBodies() {
        domBodies.forEach(function (domBody, index) {
            let matterBody = Bodies.rectangle(
                matterContainer.offsetWidth / 2,
                -matterContainer.offsetHeight,
                domBody.offsetWidth,
                domBody.offsetHeight,{
                    chamfer: {
                        radius: domBody.offsetHeight / 2
                    },
                    restitution: 0.5,
                    density: 0.001,
                    angle: Math.random() * 1,
                    friction: 0.4,
                    frictionAir: 0.01
                }
            );
            domBody.id = matterBody.id;
            matterBodies[matterBody.id] = matterBody;
            
                    // DOM 이벤트 리스너는 제거 (MouseConstraint 사용)
        // domBody.addEventListener('mousedown', handleDomMouseDown);
        // domBody.addEventListener('touchstart', handleDomTouchStart);
        
        // 간단한 클릭 테스트
        domBody.addEventListener('click', function(e) {
            s6Tl1.play();
        });
        });
    }

    function updateElementPositions() {
        domBodies.forEach((domBody, index) => {
            let matterBody = matterBodies[domBody.id];

            if (matterBody) {
                domBody.style.transform =
                    "translate( " +
                    (-domBody.offsetWidth + matterBody.position.x + domBody.offsetWidth / 2) +
                    "px, " +
                    (-domBody.offsetHeight +
                        matterBody.position.y +
                        domBody.offsetHeight / 2) +
                    "px )";
                domBody.style.transform += "rotate( " + matterBody.angle + "rad )";
            }
        });

        window.requestAnimationFrame(updateElementPositions);
    }

    function handleResize() {
        render.canvas.width = matterContainer.offsetWidth;
        render.canvas.height = matterContainer.offsetHeight;

        Matter.Render.setPixelRatio(render, window.devicePixelRatio);

        Matter.Body.setPosition(
            ground,
            Matter.Vector.create(
                matterContainer.offsetWidth / 2,
                matterContainer.offsetHeight + wallThickness / 2
            )
        );

        Matter.Body.setPosition(
            leftWall,
            Matter.Vector.create(
                0 - wallThickness / 2,
                matterContainer.offsetHeight / 2
            )
        );

        Matter.Body.setPosition(
            rightWall,
            Matter.Vector.create(
                matterContainer.offsetWidth + wallThickness / 2,
                matterContainer.offsetHeight / 2
            )
        );
    }
}

// Swiper 초기화
document.addEventListener('DOMContentLoaded', function() {
    // skill1 Swiper 초기화
    const skill1Swiper = new Swiper('#skill1', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 3000,
        allowTouchMove: false,
    });

    // skill2 Swiper 초기화 (반대 방향)
    const skill2Swiper = new Swiper('#skill2', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true, // 반대 방향
        },
        speed: 3000,
        allowTouchMove: false,
    });
});


// sect6
let sect6Timeline = gsap.matchMedia();
let breakPoint = 768;

sect6Timeline.add({
        isDesktop: `(min-width: ${breakPoint + 1}px)`,
        isMobile: `(max-width: ${breakPoint}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
        let { isDesktop, isMobile, reduceMotion } = context.conditions;
        let target = isDesktop ? true : false;

        let sect6Tl = gsap.timeline({
            scrollTrigger:{
            trigger: '.s6',
            start : 'top top',
            end : 'bottom bottom',
            scrub : 1,
        }
    });

    sect6Tl.fromTo('.s6 .sticker', {opacity:0, scale: 1.5, x:'-60%', y:'-40%'}, {duration:0.5, opacity:1, scale: 1, x:'-50%', y:'-50%'});
    sect6Tl.fromTo('.s6 .sticker .sticker-img .visible', {
        height: target ? '10.8vw' : '26vw'
    }, {
        duration:1, 
        height: target ? '17.8vw' : '45vw'
    })
    sect6Tl.fromTo('.s6 .sticker .sticker-front .visible', {
        top: target ? '9vw' : '24vw', 
        height: target ? '9vw' : '24vw'
    }, {
        duration:1, 
        top: target ? '2vw' : '5vw', 
        height: target ? '2vw' : '5vw', 
    }, '<')
    sect6Tl.fromTo('.s6 .sticker .sticker-front .shadow', {
        bottom: target ? '1.8vw' : '2vw'
    }, {
        duration:1, 
        bottom: target ? '15.8vw' : '40vw'
    }, '<');
    }
)
