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
    <div class="container h2 my-10">
      Bestellung erfolgreich.
    </div>
      `,
};
