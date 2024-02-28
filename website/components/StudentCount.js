// studentCount.js
Vue.component('student-count', {
    data() {
        return {
            liveStudentCount: 123, // Replace with real data
        };
    },
    template: `
    <div>
      <h2>Live Student Count</h2>
      <p>Number of students: {{ liveStudentCount }}</p>
    </div>
  `,
});
