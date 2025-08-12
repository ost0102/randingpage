# EmailJS 설정 가이드

폼 제출 기능이 정상적으로 작동하려면 EmailJS 서비스를 설정해야 합니다.

## 1. EmailJS 계정 생성
1. https://www.emailjs.com/ 에 접속
2. 무료 계정으로 가입

## 2. 이메일 서비스 설정
1. EmailJS 대시보드에서 "Email Services" 메뉴 클릭
2. "Add New Service" 클릭
3. "Gmail" 또는 "Outlook" 선택
4. 이메일 계정 연결 (tmdxor0102@naver.com)

## 3. 이메일 템플릿 생성
1. "Email Templates" 메뉴 클릭
2. "Create New Template" 클릭
3. 다음 내용으로 템플릿 작성:

**템플릿 제목:** Contact Form Submission

**템플릿 내용:**
```
새로운 문의가 접수되었습니다.

기업명: {{company}}
성함: {{name}}
연락처: {{phone}}
이메일: {{email}}
문의내용: {{message}}
```

## 4. 코드 수정
`assets/js/contact.js` 파일에서 다음 부분을 실제 값으로 교체:

```javascript
// 1. Public Key 설정
emailjs.init("YOUR_PUBLIC_KEY"); // EmailJS 대시보드의 "Account" > "API Keys"에서 확인

// 2. Service ID와 Template ID 설정
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    // Service ID: Email Services에서 확인
    // Template ID: Email Templates에서 확인
```

## 5. 설정 확인
- Public Key: Account > API Keys에서 확인
- Service ID: Email Services에서 확인
- Template ID: Email Templates에서 확인

## 주의사항
- 무료 계정의 경우 월 200건의 이메일 전송 제한이 있습니다
- 실제 배포 시에는 보안을 위해 환경변수 사용을 권장합니다 