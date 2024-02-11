// components/ContentComponent.js
Vue.component('content-component', {
    data() {
        return {
            message: 'Hello from Vue.js!'
        };
    },
    template: `
    <div>
      <p>{{ message }}</p>
    </div>
  `
});
// components/FooterComponent.js
Vue.component('footer-component', {
    template: `
    <footer>
      <p>&copy; 2024 Vue.js Example</p>
    </footer>
  `
});
// components/HeaderComponent.js
Vue.component('header-component', {
  template: `
    <header>
      <h1>Welcome to my Vue.js Website!</h1>
    </header>
  `
});
