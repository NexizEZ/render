// api/models/Order.js

module.exports = {
    attributes: {
      totalAmount: {
        type: 'number',
        required: true
      },
      addressName: {
        type: 'number',
        required: true
      },      
      address: {
        type: 'number',
        required: true
      },
      item: {
        collection: 'Item',
        via: 'order',
        through: 'OrderItem'
      }
    }
  };
  