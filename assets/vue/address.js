export default {
    data() {
      return {
        name: "",
        address: ""
      };
    },
    methods: {
      submitAddress() {
        let url = new URL(origin + "/api/address");
        let data = new FormData();
        data.append("name", this.name);
        data.append("address", this.address);
        fetch(url, {
          method: "POST",
          body: data,
        }).then((result) => {
          this.$router.push("/checkout");
        });
      }
    },  
    template: `
    <div class="container">
      <h1>Lieferdaten</h1>
      <form>
        <div>
            <div class="form-group">
                <label class="col-form-label-lg">Name</label>
                <input type="text" class="form-control" maxlength="80" v-model="name">
            </div>
            <div class="form-group">
                <label class="col-form-label-lg">Adresse</label>
                <input type="text" class="form-control" maxlength="120" v-model="address">
            </div>
        </div>
      </form>
      <router-link class="btn btn-secondary mr-5 " to="/">Weiter einkaufen</router-link>
      <span class="btn btn-primary" @click="submitAddress">Bestellen</span>
      </div>
      `,
  };
  