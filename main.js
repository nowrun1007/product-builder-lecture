
class LottoNumbers extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render(this.generateLottoNumbers());
  }

  generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers);
  }

  render(numbers) {
    this.shadowRoot.innerHTML = `
      <style>
        .lotto-number-container {
            display: flex;
            gap: 1rem;
        }
        .lotto-number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
        }
      </style>
      <div class="lotto-number-container">
        ${numbers.map((number, index) => `<div class="lotto-number" style="background-color: ${this.getColor(index)}">${number}</div>`).join('')}
      </div>
    `;
  }

  getColor(index) {
      const colors = ['#f39c12', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#1abc9c'];
      return colors[index % colors.length];
  }
}

customElements.define('lotto-numbers', LottoNumbers);

document.getElementById('generate-btn').addEventListener('click', () => {
  const lottoNumbersElement = document.querySelector('lotto-numbers');
  lottoNumbersElement.render(lottoNumbersElement.generateLottoNumbers());
});
