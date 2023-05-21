// api/models/Order.js

module.exports = {
    attributes: {
      totalAmount: {
        type: 'number',
        required: true
      },
      addressName: {
        type: 'text',
        required: true
      },      
      address: {
        type: 'text',
        required: true
      },
      item: {
        collection: 'Item',
        via: 'order',
        through: 'OrderItem'
      }
    }
  };
  