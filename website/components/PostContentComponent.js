Vue.component('content-component', {
    template: `
    <section class="content">
      <hero-component></hero-component>
      <post-component
        post-title="Výhra v soutěži"
        post-image="/website/imgs/data/Post-1.jpg"
        post-description="Čtveřice studentů vyhrála v soutěži..."
        post-time="March 1, 2024"
        post-author="Hana Budská"
        :on-back="goBackCallback"
      ></post-component>
    </section>
  `,
    style: `
    .content {
      position: relative;
    }
  `,
    methods: {
        goBackCallback() {
            console.log('Going back...'); //nemám čas to implementovat
        },
    },
});
