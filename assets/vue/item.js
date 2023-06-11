export default {
  data() {
    return {
      items: [],
      itemsbackup: [],
      om: "",
      categories: [],
      choosecategory: "",
      price_von: "",
      price_bis: "",
      searchterm: "",
    };
  },
  created() {
    let url = new URL(origin + "/api/items");
    fetch(url)
      .then((res) => res.json())
      .then((data) => (this.items = data.items,
        this.categories = data.categories));
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
      let filteredItems = this.items;
      this.itemsbackup = this.items;

      if (this.choosecategory == "" && this.price_von == "" && this.price_bis == "" && this.searchterm == "") {
        this.items = this.itemsbackup;
      } else {
        if (this.choosecategory !== "") {
          filteredItems = filteredItems.filter(item => item.category === this.choosecategory);
        }
        if (this.price_von !== "") {
          filteredItems = filteredItems.filter(item => item.price >= this.price_von);
        }
        if (this.price_bis !== "") {
          filteredItems = filteredItems.filter(item => item.price <= this.price_bis);
        }
        if (this.searchterm !== "") {
          filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(this.searchterm.toLowerCase()));
        }
      
        this.items = filteredItems;
      }
    },

  },
  template: `
  <div class="container-fluid">
  <div class="row">
    <div class="container-fluid">
      <div class="searchform col-sm-0 d-flex justify-content-end text-center">
        
          <div class="fixbar input-group">
            <input v-model="searchterm" type="input" class="fixbar form-control rounded" placeholder="Search" name="search" />
            <div class="fixbar dropdown">
              <button class="button-17 fixbar btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
                Filter
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <label for="price_von">Preis Von:</label><br>
                  <input v-model="price_von" class="fixbar dropdown-item" type="number" id="price_von" name="price_von" placeholder="0">
                </li>
                <li>
                  <label for="price_bis">Preis Bis:</label><br>
                  €
                  <input v-model="price_bis" class="dropdown-item" type="number" id="price_bis" name="price_bis" placeholder="100">
                </li>
              </ul>
            </div>
            <button type="submit" class="fixbar button-17 btn btn-secondary" @click="refreshItems">Suchen</button>
          </div>
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
