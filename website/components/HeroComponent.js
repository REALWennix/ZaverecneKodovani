Vue.component('hero-component', {
  template: `
    <div class="hero">
      <div class="flex-container">
        <div class="image-container">
          <img class="d-block w-100" src="/website/imgs/data/Post-1.jpg" alt="Static Image">
        </div>
        <div class="content">
          <h2>Title</h2>
          <p>Description</p>
          <button @click="readMore">Read More</button>
        </div>
      </div>
    </div>
  `,
  methods: {
    readMore() {
      console.log('Read More button clicked');
    }
  }
});
