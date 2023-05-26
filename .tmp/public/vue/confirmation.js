export default {
  data() {
  },
  created() {
    let url = new URL(origin + '/order/new');
    fetch(url)
      .then(res => res.json());
  },
  methods: {
  
    },
  template: `
  <div class="container my-5">
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6 text-center">
      <h1 class="mb-4"> Vielen Dank! Bestellung erfolgreich!</h1>
      <hr>
      <h3 class="mb-4">
        Klicke hier, um deine Bestellungen einzusehen oder zu stornieren.
      </h3>
      <div class="d-grid">
        <a href="/account" class="btn btn-primary button-17">Mein Account</a>
      </div>
    </div>
  </div>
</div>
      `,
};
