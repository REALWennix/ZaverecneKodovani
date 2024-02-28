Vue.component('navbar-component', {
  props: ['isMenuOpen'],
  template: `
    <nav class="navbar" :class="{ 'open': isMenuOpen }">
      <ul>
        <li><a href="https://www.spsejecna.cz/prijimaci-rizeni">PRO UCHAZEČE</a></li>
        <li><a href="https://www.spsejecna.cz/">PRO ŽÁKY A RODIČE</a></li>
        <li><a href="https://www.spsejecna.cz/">PRO ZAMĚSTNANCE</a></li>
      </ul>
    </nav>
  `
});
