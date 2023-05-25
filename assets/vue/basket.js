export default {
  data() {
    return {
      basket: [],
      total: "",
    };
  },
  created() {
    let url = new URL(origin + '/api/basket');
    fetch(url)
      .then(res => res.json())
      .then(data => this.basket = data.basket);
  },
  methods: {

  },
  template: `
  <div class="container">
  <h1 class="mt-4">Einkaufskorb</h1>
  
  <ul class="list-group my-4" v-for="item in basket">
    <li class="list-group-item">
      <div class="d-flex justify-content-between">
        <span>{{ item.name }}</span>
        <span>€ {{ item.price }}</span>
      </div>
    </li>
    <hr>
  </ul>

  <div class="d-flex justify-content-end">
    <router-link class="btn btn-secondary me-3 button-17" to="/">Weiter einkaufen</router-link>
    <router-link class="btn btn-primary button-17" to="/address">Bestellung abschließen</router-link>
  </div>
</div>

  `,
};
