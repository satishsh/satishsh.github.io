class DLevel extends HTMLElement {
    connectedCallback() {
        const level = parseInt(this.getAttribute('level')) || 0;
        const max = 5;
        const filled = Math.min(level, max);
        const empty = max - filled;

        this.innerHTML = `
          ${'<span class="dot bg-blue-400"></span>'.repeat(filled)}
          ${'<span class="dot bg-gray-600"></span>'.repeat(empty)}
        `;
    }
}

customElements.define('d-level', DLevel);
