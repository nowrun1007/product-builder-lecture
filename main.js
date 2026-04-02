const benefits = [
  {
    title: "강남구 출산양육지원금",
    amount: "첫째·둘째 200만 원 / 셋째 300만 원",
    period: "출생 후 1년 이내 신청 (1년 이상 거주 조건)",
    description: "강남구 자체 지원금으로 넷째 이상은 500만 원을 지급합니다.",
    link: "https://www.gov.kr/portal/onestopSvc/happyBirth"
  },
  {
    title: "첫만남이용권",
    amount: "첫째 200만 원 / 둘째 이상 300만 원",
    period: "출생일로부터 1년 이내 사용",
    description: "국가 지원 바우처로 모든 출생아에게 지급되는 보편적 복지입니다.",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "부모급여",
    amount: "0세 월 100만 원 / 1세 월 50만 원",
    period: "0~23개월 아동 (매월 25일 지급)",
    description: "가정 양육 시 부모의 경제적 부담을 덜어드리기 위한 수당입니다.",
    link: "https://www.gov.kr/portal/onestopSvc/happyBirth"
  },
  {
    title: "아빠 육아휴직 장려금",
    amount: "월 30만 원 (최대 1년)",
    period: "육아휴직 시작일 1개월 후 ~ 종료일 12개월 이내",
    description: "남성 근로자의 육아휴직을 장려하기 위한 강남구만의 혜택입니다.",
    link: "https://www.gov.kr/"
  },
  {
    title: "서울형 산후조리경비",
    amount: "최대 150만 원 상당",
    period: "출산 후 60일 이내 신청 가능",
    description: "산후도우미, 의약품, 한약, 운동 서비스 등에 사용 가능한 포인트입니다.",
    link: "https://www.seoulmomcare.com/"
  },
  {
    title: "임산부 교통비 지원",
    amount: "70만 원 (바우처)",
    period: "임신 12주 ~ 출산 후 3개월 이내",
    description: "자차 유류비 및 대중교통 이용이 가능한 교통 포인트를 지원합니다.",
    link: "https://www.seoulmomcare.com/"
  },
  {
    title: "아동수당",
    amount: "월 10만 원",
    period: "0세 ~ 만 8세 미만 (최대 95개월)",
    description: "아동의 건강한 성장을 위해 모든 아동에게 매월 지급됩니다.",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "아이돌봄 본인부담금 지원",
    amount: "소득 무관 전액/일부 지원",
    period: "아이돌봄 서비스 이용 시 상시 적용",
    description: "강남구 거주 가구의 아이돌봄 서비스 비용 중 본인부담금을 지원합니다.",
    link: "https://www.idolbom.go.kr/"
  }
];

function renderBenefits() {
  const container = document.getElementById('benefit-container');
  container.innerHTML = benefits.map(benefit => `
    <div class="benefit-card">
      <div class="card-content">
        <h3>${benefit.title}</h3>
        <div class="amount">${benefit.amount}</div>
        <div class="period"><strong>지원 기간:</strong> ${benefit.period}</div>
        <p>${benefit.description}</p>
      </div>
      <a href="${benefit.link}" target="_blank" class="apply-btn">신청하기</a>
    </div>
  `).join('');
}

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  themeToggle.textContent = 'Light Mode';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Initial Render
document.addEventListener('DOMContentLoaded', renderBenefits);
