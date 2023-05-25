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
    refreshItems: function (event) {
      let url = new URL(origin + "/api/search");
      fetch(url)
      .then((res) => res.json())
      .then((data) => (this.items = data));
    },

  },
  template: `
  <div class="container-fluid">
  <div class="row">
    <div class="container-fluid">
    <div class="alert alert-primary">
    <p> Diese Suche funktioniert gerade nur auf der Router /item mit isSuperAdmin Rechte und muss für die finale Abgabe noch in VUE Logik übertragen werden -> </p>
     </div>
      <div class="searchform col-sm-0 d-flex justify-content-end text-center">
        <form action="/search" method="get" class="searchForm searchForm">
          <div class="fixbar input-group">
            <input type="input" class="fixbar form-control rounded" placeholder="Search" name="search" />
            <div class="fixbar dropdown">
              <button class="button-17 fixbar btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
                Filter
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <label for="price_von">Preis Von:</label><br>
                  <input class="fixbar dropdown-item" type="number" id="price_von" name="price_von" value="0">
                </li>
                <li>
                  <label for="price_bis">Preis Bis:</label><br>
                  <input class="dropdown-item" type="number" id="price_bis" name="price_bis" value="100">
                </li>
                <li>
                  <label class="col-form-label-lg">Kategorie</label>
                  <select class="form-select" name="category">
                    <option disabled selected value="0">select</option>
                    <% categories.forEach(function(category){ %>
                      <option value="<%= category.id %>">
                        <%= category.name %>
                      </option>
                      <% }); %>
                  </select>
                </li>
              </ul>
            </div>
            <button type="submit" class="fixbar button-17 btn btn-secondary" @click="refreshItems">Suchen</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col-12 col-md-4" v-for="item in items">
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
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                aria-expanded="false">Weitere Optionen</a>
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
</div>
`,

};
