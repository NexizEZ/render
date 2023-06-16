export default {
    data() {
      return {
        name: "",
        errorMessage: "",
        vorname: "",
        strasse: "",
        hausnummer: "",
        postleitzahl: ""
      };
    },
    methods: {
      submitAddress() {

        if (this.name.trim() === "" || this.vorname.trim() === "" || this.strasse.trim() === "" || this.hausnummer.trim() === "" || this.postleitzahl.trim() === "") {
          this.errorMessage = "Bitte füllen Sie alle Felder aus.";
          return;
        }
  
        // name
        if (this.name.length < 3) {
          this.errorMessage = "Der Name muss mindestens 3 Zeichen lang sein.";
          return; 
        }
  
        if (!/^[a-zA-Z]+$/.test(this.name)) {
          this.errorMessage = "Der Name darf nur Buchstaben enthalten.";
          return; 
        }

        //vorname
        if (this.vorname.length < 3) {
          this.errorMessage = "Der Vorame muss mindestens 3 Zeichen lang sein.";
          return; 
        }

        if (!/^[a-zA-Z]+$/.test(this.vorname)) {
          this.errorMessage = "Der Vorname darf nur Buchstaben enthalten.";
          return; 
        }
        
        //strasse
        if (this.strasse.length < 3) {
          this.errorMessage = "Geben Sie bitte die komplette Adresse ein!";
          return; 
        }

        if (!/^[a-zA-Z]+$/.test(this.strasse)) {
          this.errorMessage = "Die Straße darf nur Buchstaben enthalten.";
          return; 
        }

        //hausnummer
        if (!/^[0-9-]+$/.test(this.hausnummer)) {
          this.errorMessage = "Die Hausnummer darf nur Zahlen enthalten.";
          return; 
        }

        if (this.hausnummer.length > 3) {
          this.errorMessage = "Die Hausnummer kann nur bis zu 3 Zahlen enthalten";
          return; 
        }

        //postleitzahl /^[0-9]{5}$/
        if (!/^[0-9]{5}$/.test(this.postleitzahl)) {
          this.errorMessage = "Die Postleitzahl darf nur aus 5 Zahlen bestehen.";
          return; 
        }
        
        let url = new URL(origin + "/api/address");
        let data = new FormData();
        data.append("name", this.name);
        data.append("vorname", this.vorname);
        data.append("strasse", this.strasse);
        data.append("hausnummer", this.hausnummer);
        data.append("postleitzahl", this.postleitzahl);
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
          <label class="form-label">Vorname</label>
          <input type="text" class="form-control" maxlength="80" v-model="vorname">
        </div>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" maxlength="80" v-model="name">
        </div>
        <div class="mb-3">
          <label class="form-label">Straße</label>
          <input type="text" class="form-control" maxlength="120" v-model="strasse">
        </div>
        <div class="mb-3">
          <label class="form-label">Hausnummer</label>
          <input type="text" class="form-control" maxlength="120" v-model="hausnummer">
        </div>
        <div class="mb-3">
          <label class="form-label">Postleitzahl</label>
          <input type="text" class="form-control" maxlength="120" v-model="postleitzahl">
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
  