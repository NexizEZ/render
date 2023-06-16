export default {
  data() {
    return {
      name: "",
      address: "",
      basket: [],
      pricetotal: "",
      vorname: "",
      strasse: "",
      hausnummer: "",
      postleitzahl: ""

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
        this.vorname = data.address.vorname,
        this.strasse = data.address.strasse,
        this.hausnummer = data.address.hausnummer,
        this.postleitzahl = data.address.postleitzahl,
        this.pricetotal = data.pricetotal
      })
  },

  template: `
  <div class="d-flex align-items-center">
  <div class="container minheight">
  <h2 class="mt-4">Bestellung</h2>

  <ul class="list-group mb-4">
    <li class="list-group-item" v-for="item in basket">
    <div>
    {{ item.name }}
    </div>
    <div style="float:right;">
    € {{ item.price }}
    </div
    </li>
  </ul>
  <div class="h4" style="float:right;">
  Gesamtpreis: € {{ pricetotal }}
</div>

  <h2 class="mt-4">Lieferdaten</h2>
  <div class="h4">
    Name: {{ vorname }} {{ name }}
  </div>
  <div class="h4">
    Anschrift: {{ strasse }} {{ hausnummer }}
  </div>
  <div class="h4">
    Postleitzahl: {{ postleitzahl }}
  </div>

  <div class="d-flex justify-content-end">
    <router-link class="btn btn-secondary me-3 button-17" to="/address">Zurück</router-link>
    <router-link class="btn btn-primary button-17" to="/confirmation">Kostenpflichtig bestellen</router-link>
  </div>
</div>
</div>
      `,
};
