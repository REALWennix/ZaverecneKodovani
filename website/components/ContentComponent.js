Vue.component('content-component', {
  template: `
    <section class="content">
      <hero-component></hero-component>
      <news-component></news-component>
    </section>
  `,
  style: `
    .content {
      position: relative;
    }

    .hero {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1;
    }

    .news {
      position: absolute;
      top: 100vh;
      left: 0;
      width: 100%;
      z-index: 2;
    }
  `,
});
