export default {
    data() {
        return {
            orders: [],
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
              
            });
          },
      },
}