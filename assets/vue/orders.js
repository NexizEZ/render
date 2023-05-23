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
    
      },
}