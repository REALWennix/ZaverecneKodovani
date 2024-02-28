// dashboard.js
Vue.component('dashboard', {
    template: `
    <div class="dashboard">
      <h1>School Admin Panel</h1>
      <div class="card">
        <student-count></student-count>
      </div>
      <div class="card">
        <cameras></cameras>
      </div>
    </div>
  `,
});

new Vue({
    el: '#app',
    template: '<dashboard></dashboard>',
});
