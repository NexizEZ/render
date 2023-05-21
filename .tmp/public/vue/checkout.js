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
    <div class="container">
      <div class="h2">Bestellung</div>

      <ul class="list-group mb-4">                
        <li class="list-group-item" v-for="item in basket">{{ item.name }}</li>
      </ul>

      <div class="h2">Lieferdaten</div>
        <div class="h4">
            Name: {{ name }}
        </div>
        <div class="h4">
            Adresse: {{ address }}
        </div>
        <div class="h4">
        Gesammtpreis: {{ pricetotal }}
    </div>
        <div class="mt-4">
          <router-link class="btn btn-secondary mr-5" to="/address">Zurück</router-link>
          <router-link class="btn btn-primary" to="/confirmation">Kostenpflichtig bestellen</router-link>
        </div>
      </div>
      `,
  };
  