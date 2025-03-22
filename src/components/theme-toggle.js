class ThemeToggle extends HTMLElement {
    constructor() {
        super();
        // this.attachShadow({ mode: 'open' });
        this.isLight = true;
    }

    connectedCallback() {
        this.render();
        this.addEventListener('click', this.toggleTheme.bind(this));
    }

    toggleTheme() {
        this.isLight = !this.isLight;
        document.documentElement.setAttribute('data-theme', this.isLight ? 'light' : 'dark');
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                :host {
                    cursor: pointer;
                    display: inline-block;
                }
            </style>
            ${this.isLight
                ? '<i class="ft-sun"></i>'
                : '<i class="ft-moon"></i>'
            }
        `;
    }
}

customElements.define('theme-toggle', ThemeToggle);