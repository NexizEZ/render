export default {
  data() {
    return {
      name: "",
      address: "",
      basket: [],
      pricetotal: ""
    };
  },
  methods: {

  },
  created() {
    let url = new URL(origin + '/api/basket');
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.basket = data.basket,
          this.name = data.address.name,
          this.address = data.address.address,
          this.pricetotal = data.pricetotal
      })
  },

  template: `
  <div class="bodyheight d-flex align-items-center">
  <div class="container">
  <h2 class="mt-4">Bestellung</h2>

  <ul class="list-group mb-4">
    <li class="list-group-item" v-for="item in basket">{{ item.name }}</li>
  </ul>

  <h2 class="mt-4">Lieferdaten</h2>
  <div class="h4">
    Name: {{ name }}
  </div>
  <div class="h4">
    Adresse: {{ address }}
  </div>
  <div class="h4">
    Gesamtpreis: € {{ pricetotal }}
  </div>

  <div class="d-flex justify-content-end mt-4">
    <router-link class="btn btn-secondary me-3 button-17" to="/address">Zurück</router-link>
    <router-link class="btn btn-primary button-17" to="/confirmation">Kostenpflichtig bestellen</router-link>
  </div>
</div>
</div>
      `,
};
