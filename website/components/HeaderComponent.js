// Define the header-component Vue component
Vue.component('header-component', {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
  template: `
    <header class="header">
      <img src="./imgs/SPSE-Jecna_Logotyp.png" alt="Logo" class="logo">
      <button @click="toggleMenu" class="hamburger">☰</button>
      <navbar-component :is-menu-open="isMenuOpen"></navbar-component>
    </header>
  `
});

