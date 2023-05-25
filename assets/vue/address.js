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
    <div class="bodyheight d-flex align-items-center">
    <div class="container">
    <h1 class="mt-4">Lieferdaten</h1>
    
    <form>
      <div class="mt-4">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" maxlength="80" v-model="name">
        </div>
        <div class="mb-3">
          <label class="form-label">Adresse</label>
          <input type="text" class="form-control" maxlength="120" v-model="address">
        </div>
      </div>
    </form>
    
    <div class="d-flex justify-content-end">
      <router-link class="btn btn-secondary me-3 button-17" to="/">Weiter einkaufen</router-link>
      <button class="btn btn-primary button-17" @click="submitAddress">Bestellen</button>
    </div>
  </div>
  </div>
      `,
  };
  