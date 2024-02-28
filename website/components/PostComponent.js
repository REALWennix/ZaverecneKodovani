Vue.component('post-component', {
    props: {
        postTitle: String,
        postImage: String,
        postDescription: String,
    },
    template: `
    <div class="post">
      <img :src="postImage" :alt="postTitle">
      <div class="post-content">
        <h2>{{ postTitle }}</h2>
        <p>{{ postDescription }}</p>
        <button @click="readMore">Číst dále</button>
      </div>
    </div>
  `,
    methods: {
        readMore() {
            window.location.href = '/your-new-page';
        }
    },
    style: `
    .post {
      position: relative;
      margin-bottom: 20px;
    }

    img {
      width: 100%;
      height: auto;
    }

    .post-content {
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h2 {
      margin-bottom: 10px;
    }

    button {
      background-color: #007BFF;
      color: #fff;
      border: none;
      padding: 8px 16px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  `,
});
