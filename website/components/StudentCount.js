// studentCount.js
Vue.component('student-count', {
    data() {
        return {
            liveStudentCount: 123,
        };
    },
    template: `
    <div>
      <h2>Live Student Count</h2>
      <p>Number of students: {{ liveStudentCount }}</p>
    </div>
  `,
});
