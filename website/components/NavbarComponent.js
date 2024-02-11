Vue.component('navbar-component', {
    props: ['isMenuOpen'],
    template: `
    <nav class="navbar" :class="{ 'open': isMenuOpen }">
      <ul>
        <li><a href="#">PRO UCHAZEČE</a></li>
        <li><a href="#">PRO ŽÁKY A RODIČE</a></li>
        <li><a href="#">PRO ZAMĚSTNANCE</a></li>
      </ul>
    </nav>
  `
});
