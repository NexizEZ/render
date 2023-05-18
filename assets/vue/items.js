export default {
    data() {
      return {
        items: [],
        om: "",
      };
    },
    created() {
      let url = new URL(origin + "/item");
      fetch(url)
        .then((res) => res.json())
        .then((data) => (this.items = data));
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
          <hr>
              <div class="mt-2" v-for="item in items">
                  <div class="h4">{{ item.name }}</div>
                  <div class="d-flex justify-content-between">
                      <div class="h6">{{ item.description }} </div>
                      <div>
                          <span class="h6"> {{ item.price }} &euro;</span>
                          <span :id="item.id" class="ml-2 btn btn-outline-primary" @click="order">Bestellen</span>
                      </div>
                  </div>
              </div>
          </div>
          <router-link class="btn btn-primary" to="/basket">To Shopping Basked</router-link>
      </div>`,
  };
  