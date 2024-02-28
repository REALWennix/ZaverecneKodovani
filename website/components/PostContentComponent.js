Vue.component('content-component', {
    template: `
    <section class="content">
      <hero-component></hero-component>
      <post-component
        post-title="Výhra v soutěži"
        post-image="/website/imgs/data/Post-1.jpg"
        post-description="Čtveřice studentů vyhrála v soutěži..."
      ></post-component>
      <!-- Add more post-components as needed -->
    </section>
  `,
    style: `
    .content {
      position: relative;
    }
  `,
});
