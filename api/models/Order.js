// api/models/Order.js

module.exports = {
    attributes: {
      totalAmount: {
        type: 'number',
        required: true
      },
      addressName: {
        type: 'string',
        required: true
      },      
      address: {
        type: 'string',
        required: true
      },
      userId: {
        type: 'number',
        required: true
      },
      item: {
        collection: 'Item',
        via: 'order',
        through: 'OrderItem'
      },
      user: {
            collection: 'User',
            via: 'order',
        },
    }
  };
  