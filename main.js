const benefits = [
  {
    title: "강남구 출산양육지원금",
    amount: "첫째·둘째 200만 원 / 셋째 300만 원",
    period: "출생 후 1년 이내 신청 (1년 이상 거주 조건)",
    description: "강남구에 1년 이상 거주한 부모님(Who)이 자녀를 출산했을 때(When) 받는 현금 지원금입니다. 넷째 이상은 최대 500만 원까지 지급됩니다.",
    link: "https://www.gov.kr/portal/onestopSvc/happyBirth"
  },
  {
    title: "첫만남이용권",
    amount: "첫째 200만 원 / 둘째 이상 300만 원",
    period: "출생일로부터 1년 이내 사용",
    description: "대한민국 모든 출생아(Who)에게 지급되는 바우처로, 산후조리원이나 육아용품 구매 시(How) 유용하게 사용할 수 있는 보편적 복지 혜택입니다.",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "부모급여",
    amount: "0세 월 100만 원 / 1세 월 50만 원",
    period: "0~23개월 아동 (매월 25일 지급)",
    description: "가정에서 아이를 직접 양육하는 부모님(Who)을 위해 매월 지급되는 수당입니다. 경제적 부담을 덜고 아이 돌봄에 집중하고 싶을 때(When) 큰 도움이 됩니다.",
    link: "https://www.gov.kr/portal/onestopSvc/happyBirth"
  },
  {
    title: "아빠 육아휴직 장려금",
    amount: "월 30만 원 (최대 1년)",
    period: "육아휴직 시작일 1개월 후 ~ 종료일 12개월 이내",
    description: "강남구 거주 남성 근로자(Who)가 육아휴직을 사용할 때(When) 신청 가능한 강남구만의 특별 지원금입니다. 맞벌이 가구의 공동 육아를 장려합니다.",
    link: "https://www.gov.kr/"
  },
  {
    title: "서울형 산후조리경비",
    amount: "최대 150만 원 상당",
    period: "출산 후 60일 이내 신청 가능",
    description: "서울시 거주 산모(Who)가 출산 후 건강을 회복할 때(When) 산후도우미나 운동 서비스 이용료로 사용할 수 있는 바우처 포인트입니다.",
    link: "https://www.seoulmomcare.com/"
  },
  {
    title: "임산부 교통비 지원",
    amount: "70만 원 (바우처)",
    period: "임신 12주 ~ 출산 후 3개월 이내",
    description: "서울시 거주 임산부(Who)가 병원 진료를 가거나 외출할 때(When) 자차 유류비나 대중교통 이용료로 사용할 수 있는 실질적인 교통비 혜택입니다.",
    link: "https://www.seoulmomcare.com/"
  },
  {
    title: "아동수당",
    amount: "월 10만 원",
    period: "0세 ~ 만 8세 미만 (최대 95개월)",
    description: "만 8세 미만 모든 아동(Who)의 성장을 돕기 위해 조건 없이 매월 지급되는 수당입니다. 아이의 간식비나 교육비(How)로 활용하기 좋습니다.",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "아이돌봄 본인부담금 지원",
    amount: "소득 무관 전액/일부 지원",
    period: "아이돌봄 서비스 이용 시 상시 적용",
    description: "강남구 거주 가구(Who)가 아이돌봄 서비스를 이용할 때(When) 발생하는 본인부담금을 강남구가 대신 지원하여 육아 비용을 획기적으로 낮춰줍니다.",
    link: "https://www.idolbom.go.kr/"
  }
];

function renderBenefits(filterText = '') {
  const container = document.getElementById('benefit-container');
  const filteredBenefits = benefits.filter(benefit => 
    benefit.title.toLowerCase().includes(filterText.toLowerCase()) ||
    benefit.description.toLowerCase().includes(filterText.toLowerCase())
  );

  if (filteredBenefits.length === 0) {
    container.innerHTML = `<div class="no-results">검색 결과가 없습니다.</div>`;
    return;
  }

  container.innerHTML = filteredBenefits.map((benefit, index) => `
    <article class="benefit-card" style="animation-delay: ${index * 0.1}s">
      <div class="card-content">
        <h3>${benefit.title}</h3>
        <div class="amount">${benefit.amount}</div>
        <div class="period"><strong>지원 기간:</strong> ${benefit.period}</div>
        <p>${benefit.description}</p>
      </div>
      <a href="${benefit.link}" target="_blank" class="apply-btn" aria-label="${benefit.title} 신청 사이트로 이동">신청하기</a>
    </article>
  `).join('');
}

// Search Logic
const searchInput = document.getElementById('benefit-search');
searchInput.addEventListener('input', (e) => {
  renderBenefits(e.target.value);
});

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
document.addEventListener('DOMContentLoaded', () => renderBenefits());
