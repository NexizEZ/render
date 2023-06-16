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
    remove: function () {
      let url = new URL(origin + '/api/basket/delete');
      fetch(url, 
        { method: 'DELETE' })
        .then((result) => {
        let url = new URL(origin + '/api/basket');
        fetch(url)
          .then(res => res.json())
          .then(data => this.basket = data.basket);
      });
    },
  },
  template: `
<div class="container d-flex flex-column minheight">
  <h1 class="mt-4">Einkaufskorb</h1>

  <ul v-if=basket class="list-group my-4">
    <li class="list-group-item" v-for="item in basket">
      <div class="d-flex justify-content-between">
        <span>{{ item.name }}</span>
        <span>€ {{ item.price }}</span>
      </div>
    </li>
  </ul>

  <div class="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
    <button v-if="basket.length" @click="remove" class="btn btn-primary button-17 mb-3 mb-md-0">Einkaufskorb leeren</button>

    <a class="btn btn-secondary button-17 mb-3 mb-md-0" href="/order">Weiter einkaufen</a>
    <router-link v-if="basket.length" class="btn btn-primary button-17" to="/address">Bestellung abschließen</router-link>
  </div>
</div>
  `,
};
