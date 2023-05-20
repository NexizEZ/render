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
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col-3" v-for="item in items">
      <div class="card">
        <img src="images/croissants.jpg" class="card-img-top" alt="Product Image">
        <div class="card-body">
          <h5 class="card-title">
            {{ item.name }}
          </h5>
          <p class="card-text">
            {{ item.description }}
          </p>
          <h5 class="card-item-price">
            € {{ item.price }}
          </h5>
          <div class="nav-card-container">
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Weitere Optionen</a>
              <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li>
                  <a class="dropdown-item" :href="'/item/' + item.id">Produkt anzeigen</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span :id="item.id" class="ml-2 btn btn-outline-primary button-17" @click="order">Bestellen</span>
      </div>
    </div>
  </div>
  <router-link class="btn btn-primary" to="/basket">To Shopping Basket</router-link>
</div>

`,

};
