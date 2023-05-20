export default {
  data() {
    return {
      items: [],
      om: "",
    };
  },
  created() {
    let url = new URL(origin + "/api/items");
    fetch(url)
    .then((res) => res.json())
    .then((data) => (this.items = data))
    .catch((error) => console.error(error));
  },
  methods: {
    order: function (event) {
      let url = new URL(origin + "/api/basket");
      let data = new FormData();
      data.append("id", event.target.id);
      fetch(url, {
        method: "POST",
        body: data,
      }).then((result) => {
        this.$router.push("/basket");
      });
    },
  },
  template: `
    <div class="container">
        <span class="h1">Speisekarte</span>
        <div class="my-5" v-for="item in this.items">
        <span class="h3">{{ item.id }}</span>
    </div>`,
};