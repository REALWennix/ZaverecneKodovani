Vue.component('hero-component', {
  template: `
    <div class="hero">
      <div class="overlay"></div>
      <img src="/website/imgs/data/Post-1.jpg" alt="Hero Image">
      <div class="hero-content">
        <h2>Výhra v soutěži</h2>
        <p>Čtveřice studentů vyhrála v soutě...</p>
        <button @click="readMore">Číst dále</button>
      </div>
    </div>
  `,
  methods: {
    readMore() {
      console.log('Read More clicked');
      window.location.href = 'website/post.html';
    }
  }
});
