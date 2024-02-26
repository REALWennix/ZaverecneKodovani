Vue.component('news-component', {
    template: `
    <div class="news">
      <div class="news-wrapper">
        <h2>Latest News</h2>
        <div class="news-grid">
          <div class="news-item" v-for="item in newsItems" :key="item.id" :class="{ 'fade-in': fadeIn }">
            <img :src="item.image" :alt="item.alt">
            <div class="news-item-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <button @click="readMore(item)">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
    data() {
        return {
            newsItems: [
                {
                    id: 1,
                    image: "https://placehold.co/600x400/png",
                    alt: "News 1 Image",
                    title: "Exciting News 1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    url: "/news/1"
                },
                {
                    id: 2,
                    image: "https://placehold.co/600x400/png",
                    alt: "News 2 Image",
                    title: "Exciting News 2",
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/news/2"
                },
                {
                    id: 3,
                    image: "https://placehold.co/600x400/png",
                    alt: "News 3 Image",
                    title: "Exciting News 2",
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/news/4"
                },
                {
                    id: 4,
                    image: "https://placehold.co/600x400/png",
                    alt: "News 4 Image",
                    title: "Exciting News 4",
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/news/4"
                },
                {
                    id: 5,
                    image: "https://placehold.co/600x400/png",
                    alt: "News 5 Image",
                    title: "Exciting News 5",
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/news/5"
                },
                {
                    id: 6,
                    image: "https://placehold.co/600x400/png",
                    alt: "News 6 Image",
                    title: "Exciting News 6",
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/news/6"
                },
                {
                    id: 7,
                    image: "https://placehold.co/600x400/png",
                    alt: "News 7 Image",
                    title: "Exciting News 7",
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/news/7"
                },
                {
                    id: 8,
                    image: "https://placehold.co/600x400/png",
                    alt: "News 8 Image",
                    title: "Exciting News 8",
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/news/8"
                },
                {
                    id: 9,
                    image: "https://placehold.co/600x400/png",
                    alt: "News 9 Image",
                    title: "Exciting News 9",
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/news/9"
                },
            ], fadeIn: false,
        };
    },
    methods: {
        readMore() {
            console.log('Read More clicked');
        },
    }, mounted() {
        this.fadeIn = true;
    },
});
