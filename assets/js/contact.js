// EmailJS 초기화
(function() {
    emailjs.init("6AGehXGs_OgJEtiz8");
})();

// 폼 제출 이벤트 리스너
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('frm');
    const submitBtn = document.querySelector('.btn-box .btn-wrap');
    
    // 폼 필드들
    const fields = {
        company: document.getElementById('company'),
        name: document.getElementById('name'),
        phone: document.getElementById('phone'),
        email: document.getElementById('email'),
        message: document.getElementById('message')
    };
    
    // 에러 메시지 요소들
    const errorElements = {
        company: document.querySelector('.item:nth-child(1) .error'),
        name: document.querySelector('.item:nth-child(2) .error'),
        phone: document.querySelector('.item:nth-child(3) .error'),
        email: document.querySelector('.item:nth-child(4) .error'),
        message: document.querySelector('.item:nth-child(5) .error')
    };
    
    // 전화번호 자동 하이픈 함수
    function formatPhoneNumber(value) {
        // 숫자만 추출
        const numbers = value.replace(/[^0-9]/g, '');
        
        // 길이에 따라 하이픈 추가
        if (numbers.length <= 3) {
            return numbers;
        } else if (numbers.length <= 7) {
            return numbers.slice(0, 3) + '-' + numbers.slice(3);
        } else {
            return numbers.slice(0, 3) + '-' + numbers.slice(3, 7) + '-' + numbers.slice(7, 11);
        }
    }
    
    // 전화번호 입력 이벤트
    fields.phone.addEventListener('input', function(e) {
        const formatted = formatPhoneNumber(e.target.value);
        e.target.value = formatted;
        validateField('phone', formatted);
        checkFormValidity();
    });
    
    // 이메일 정규식
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // 필드별 유효성 검사 함수
    function validateField(fieldName, value) {
        const errorElement = errorElements[fieldName];
        let isValid = true;
        let errorMessage = '';
        
        switch(fieldName) {
            case 'company':
                if (!value.trim()) {
                    isValid = false;
                    errorMessage = '기업이름을 입력해주세요.';
                }
                break;
                
            case 'name':
                if (!value.trim()) {
                    isValid = false;
                    errorMessage = '성함을 입력해주세요.';
                }
                break;
                
            case 'phone':
                const phoneNumbers = value.replace(/[^0-9]/g, '');
                if (!value.trim()) {
                    isValid = false;
                    errorMessage = '연락처를 입력해주세요.';
                } else if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
                    isValid = false;
                    errorMessage = '올바른 전화번호를 입력해주세요.';
                }
                break;
                
            case 'email':
                if (!value.trim()) {
                    isValid = false;
                    errorMessage = '이메일을 입력해주세요.';
                } else if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = '올바른 이메일 형식을 입력해주세요.';
                }
                break;
                
            case 'message':
                if (!value.trim()) {
                    isValid = false;
                    errorMessage = '내용을 입력해주세요.';
                }
                break;
        }
        
        // 에러 메시지 표시/숨김
        if (isValid) {
            errorElement.style.display = 'none';
        } else {
            errorElement.style.display = 'block';
            errorElement.textContent = errorMessage;
        }
        
        return isValid;
    }
    
    // 폼 전체 유효성 검사
    function checkFormValidity() {
        const isFormValid = Object.keys(fields).every(fieldName => {
            return validateField(fieldName, fields[fieldName].value);
        });
        
        // 제출 버튼 활성화/비활성화
        if (isFormValid) {
            submitBtn.style.pointerEvents = 'auto';
            submitBtn.style.opacity = '1';
        } else {
            submitBtn.style.pointerEvents = 'none';
            submitBtn.style.opacity = '0.5';
        }
        
        return isFormValid;
    }
    
    // 각 필드에 실시간 유효성 검사 이벤트 추가
    Object.keys(fields).forEach(fieldName => {
        const field = fields[fieldName];
        
        field.addEventListener('input', function() {
            validateField(fieldName, this.value);
            checkFormValidity();
        });
        
        field.addEventListener('blur', function() {
            validateField(fieldName, this.value);
            checkFormValidity();
        });
    });
    
    // 제출 버튼 클릭 이벤트
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 최종 유효성 검사
        if (!checkFormValidity()) {
            alert('모든 필수 항목을 올바르게 입력해주세요.');
            return;
        }
        
        submitForm();
    });
    
    // 폼 제출 함수
    function submitForm() {
        // 폼 데이터 수집
        const formData = {
            company: fields.company.value,
            name: fields.name.value,
            phone: fields.phone.value,
            email: fields.email.value,
            message: fields.message.value
        };
        
        // 로딩 상태 표시
        const originalText = submitBtn.querySelector('span').textContent;
        submitBtn.querySelector('span').textContent = '전송중...';
        submitBtn.style.pointerEvents = 'none';
        
        // EmailJS를 통한 이메일 전송
        emailjs.send('service_i21gj2a', 'template_a1zi2wk', {
            to_email: 'tmdxor0102@naver.com',
            company: formData.company,
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('문의가 성공적으로 전송되었습니다.');
            
            // 페이지 새로고침
            window.location.reload();
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            alert('전송에 실패했습니다. 다시 시도해주세요.');
            
            // 버튼 상태 복원
            submitBtn.querySelector('span').textContent = originalText;
            checkFormValidity();
        });
    }
    
    // Enter 키로 제출 방지 (textarea에서만 허용)
    form.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });
    
    // 초기 상태 설정
    checkFormValidity();
});
