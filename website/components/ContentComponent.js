Vue.component('content-component', {
  template: `
    <section class="content">
      <hero-component></hero-component>
      <news-component></news-component>
    </section>
  `,
  style: `
    /* Add your styles here */

    .content {
      position: relative;
    }

    .hero {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1; /* Set a higher z-index */
    }

    .news {
      position: absolute;
      top: 100vh;
      left: 0;
      width: 100%;
      z-index: 2; /* Set a lower z-index */
    }

    /* Add styles for other components as needed */
  `,
});
