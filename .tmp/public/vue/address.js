export default {
    data() {
      return {
        name: "",
        address: "",
        errorMessage: ""
      };
    },
    methods: {
      submitAddress() {

        const addressRegex = /^[a-zA-Z0-9\s.\-/]+$/

        if (this.name.trim() === "" || this.address.trim() === "") {
          this.errorMessage = "Bitte füllen Sie alle Felder aus.";
          return; // Verhindert das Absenden des Formulars
        }
  
        if (this.name.length < 6) {
          this.errorMessage = "Der Name muss mindestens 3 Zeichen lang sein.";
          return; 
        }
  
        if (!/^[a-zA-Z\s-]+$/.test(this.name)) {
          this.errorMessage = "Der Name darf nur Buchstaben, Leerzeichen und Bindestrich enthalten.";
          return; 
        }

        if (this.address.length < 6) {
          this.errorMessage = "Geben Sie bitte die komplette Adresse ein!";
          return; 
        }

        if (!addressRegex.test(this.address)) {
          this.errorMessage = "Die Adresse kann nur Buchstaben, Leerzeichen, Bindestrich, Punkt und Slash enthalten.";
          return; 
        }

        //if (!addressRegex.test(this.address)) {
        //  this.errorMessage = "Die Adresse kann nur Buchstaben, Leerzeichen, Bindestrich, Punkt und "/" enthalten.";
        //  return; 
        //}
        
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
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div class="d-flex justify-content-end">
      <router-link class="btn btn-secondary me-3 button-17" to="/">Weiter einkaufen</router-link>
      <button class="btn btn-primary button-17" @click="submitAddress">Bestellen</button>
    </div>
  </div>
  </div>
      `,
  };
  