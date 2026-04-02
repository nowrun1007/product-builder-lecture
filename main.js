const benefits = [
  {
    title: "강남구 출산양육지원금",
    amount: "첫째·둘째 200만 원 / 셋째 300만 원",
    description: "강남구 1년 이상 거주 시 지급되는 자체 지원금입니다. (넷째 이상 500만 원)"
  },
  {
    title: "첫만남이용권",
    amount: "첫째 200만 원 / 둘째 이상 300만 원",
    description: "국가 지원 바우처로 출생 초기 육아 비용을 지원합니다."
  },
  {
    title: "부모급여",
    amount: "0세 월 100만 원 / 1세 월 50만 원",
    description: "가정 내 양육을 지원하기 위해 매월 현금으로 지급됩니다."
  },
  {
    title: "아빠 육아휴직 장려금",
    amount: "월 30만 원 (최대 1년)",
    description: "강남구 거주 남성 육아휴직자에게 지급되는 특별 지원금입니다."
  },
  {
    title: "서울형 산후조리경비",
    amount: "최대 150만 원 상당",
    description: "산후도우미, 의약품, 운동 서비스 등에 사용 가능한 바우처입니다."
  },
  {
    title: "임산부 교통비 지원",
    amount: "70만 원 (바우처)",
    description: "교통비 부담 경감을 위해 자차 유류비 및 대중교통 이용이 가능합니다."
  },
  {
    title: "아동수당",
    amount: "월 10만 원",
    description: "만 8세 미만 모든 아동에게 매월 지급되는 수당입니다."
  },
  {
    title: "아이돌봄 본인부담금 지원",
    amount: "소득 무관 전액/일부 지원",
    description: "강남구 거주 가구의 아이돌봄 서비스 비용을 추가 지원합니다."
  }
];

function renderBenefits() {
  const container = document.getElementById('benefit-container');
  container.innerHTML = benefits.map(benefit => `
    <div class="benefit-card">
      <h3>${benefit.title}</h3>
      <div class="amount">${benefit.amount}</div>
      <p>${benefit.description}</p>
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
