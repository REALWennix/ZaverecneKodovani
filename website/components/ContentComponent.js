// components/ContentComponent.js
Vue.component('content-component', {
    data() {
        return {
            message: 'PLACEHOLDER'
        };
    },
    template: `
    <div>
      <p>{{ message }}</p>
    </div>
  `
});
