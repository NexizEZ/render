export default {
  data() {
    return {
      basket: [],
      quantity: "",
    };
  },
  created() {
    let url = new URL(origin + '/api/basket');
    fetch(url)
      .then(res => res.json())
      .then(data => this.basket = data.basket);
  },
  methods: {
      
      updateQuantity(event) {
      let url = new URL(origin + "/api/itemquantity");
      let data = new FormData();
      data.append("id", event.target.id);
      data.append("quantity", this.quantity);
      fetch(url, {
        method: "POST",
        body: data,
      }).then((result) => {
        this.$router.push("/basket");
      });
    },


  },
  template: `
    <h1>Einkaufskorb</h1>
    <div class="mx-4">
      <ul class="list-group mb-4">
        <li class="list-group-item" v-for="item in basket">
          {{ item.name }} <br>
          {{ item.quantity }}
          <input type="number" v-model="quantity" placeholder="New amount">
          <span v-model="quantity" class="btn btn-primary button-17" @click="updateQuantity()">Bestellen</span>
        </li>
      </ul>
      <router-link class="btn btn-secondary mr-5 button-17" to="/">Weiter einkaufen</router-link>
      <router-link class="btn btn-primary button-17" to="/address">Bestellung abschliessen</router-link>
    </div>
  `,
};
