Vue.component('header-component', {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu(event) {
      const navbar = this.$refs.navbar;
      const hamburger = this.$refs.hamburger;
      if (!navbar || !navbar.$el.contains(event.target)) {
        if (!hamburger || !hamburger.contains(event.target)) {
          this.isMenuOpen = false;
        }
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.closeMenu);
  },
  destroyed() {
    document.removeEventListener('click', this.closeMenu);
  },
  template: `
    <header class="header">
      <a href="https://www.spsejecna.cz"> <!-- Add your desired URL here -->
        <img src="./imgs/SPSE-Jecna_Logotyp.png" alt="Logo" class="logo">
      </a>
      <button @click="toggleMenu" class="hamburger" ref="hamburger">☰</button>
      <navbar-component :is-menu-open="isMenuOpen" ref="navbar"></navbar-component>
    </header>
  `
});
