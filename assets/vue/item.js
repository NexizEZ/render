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
    order: function (id) {
      let url = new URL(origin + "/api/basket");
      let data = new FormData();
      data.append("id", id);
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
  <div class="col-12 col-md-4" style="padding: 18px" v-for="item in items">
    <div class="card card2">
      <span :id=item.id class="card-link" @click="order(item.id)">
      <img src="/images/croissants.jpg" alt="Image 2" class="card-img">

        <a class="card-caption card-caption-bottom-left" :href="'/item/' + item.id">
        {{ item.name }}
      </a>

      <span class="card-caption card-caption-bottom-right">
        € {{ item.price }}
      </span>
    </div>
  </div>
</div>


`,

};
