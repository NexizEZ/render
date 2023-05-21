// api/models/OrderItem.js

module.exports = {
  attributes: {
    quantity: {
      type: 'number',
    },
    item: {
      model: 'item',
      required: true
    },
    order: {
      model: 'Order',
      required: true
    }
  }
};
