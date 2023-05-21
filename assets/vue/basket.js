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
    <h1>Einkaufskorb</h1>
    <div class="mx-4">
      <ul class="list-group mb-4">
        <li class="list-group-item" v-for="item in basket">
          {{ item.name }}
          <br></br>
          € {{ item.price }}
        </li>
      </ul>



      <router-link class="btn btn-secondary mr-5 button-17" to="/">Weiter einkaufen</router-link>
      <router-link class="btn btn-primary button-17" to="/address">Bestellung abschliessen</router-link>
    </div>
  `,
};
