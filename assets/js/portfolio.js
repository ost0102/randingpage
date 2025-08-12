// 포트폴리오 필터링 기능
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.sort-list button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // 필터링 함수
    function filterPortfolio(category) {
        // 먼저 모든 아이템을 숨김 처리
        portfolioItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
        });

        // requestAnimationFrame을 사용하여 부드러운 애니메이션
        requestAnimationFrame(() => {
            portfolioItems.forEach((item, index) => {
                const shouldShow = category === 'all' || item.getAttribute('data-category') === category;
                
                if (shouldShow) {
                    item.style.display = 'flex';
                    // 약간의 지연을 두어 순차적으로 나타나도록 함
                    setTimeout(() => {
                        requestAnimationFrame(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        });
                    }, index * 15);
                } else {
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 400);
                }
            });
        });
    }

    // 버튼 클릭 이벤트 처리
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 기본 동작 방지 (페이지 새로고침 방지)
            e.preventDefault();
            
            // 모든 버튼에서 select 클래스 제거
            filterButtons.forEach(btn => btn.classList.remove('select'));
            
            // 클릭된 버튼에 select 클래스 추가
            this.classList.add('select');
            
            // 필터링 실행
            const filterCategory = this.getAttribute('data-filter');
            filterPortfolio(filterCategory);
        });
    });
});
