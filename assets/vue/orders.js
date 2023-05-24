export default {
  data() {
    return {
      orders: [],
      alterVisible: false,
    }
  },
  created() {
    let url = new URL(origin + '/api/order');
    fetch(url)
      .then(res => res.json())
      .then(data => this.orders = data);
  },
  methods: {
    storno: function (id) {
      let url = new URL(origin + "/api/deleteorder");
      let data = new FormData();
      data.append("id", id);
      fetch(url, {
        method: "POST",
        body: data,
      }).then((result) => {
        let url = new URL(origin + '/api/order');
        fetch(url)
          .then(res => res.json())
          .then(data => this.orders = data)
          .then(this.alterVisible = true);
      });
    },
    hideAlert() {
      this.alterVisible = false;
    },
  },
}