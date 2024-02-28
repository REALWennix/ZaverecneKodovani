Vue.component('post-component', {
    props: {
        postTitle: String,
        postImage: String,
        postTime: String,
        postAuthor: String,
        onBack: Function,
    },
    data() {
        return {
            postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        };
    },
    template: `
    <div class="post">
      <div class="image-container">
        <img :src="postImage" :alt="postTitle">
      </div>
      <div class="post-header">
        <p class="post-info">{{ postTime }} | {{ postAuthor }}</p>
        <h2>{{ postTitle }}</h2>
      </div>
      <div class="post-content">
        <p>{{ postDescription }}</p>
      </div>
      <button @click="goBack">Back</button>
    </div>
  `,
    methods: {
        goBack() {
            if (this.onBack && typeof this.onBack === 'function') {
                this.onBack();
            }
        }, readMore() {
            window.location.href = '/page';
        }
    },
});
