// api/models/Item.js
module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true },
        description: { type: 'string', columnType: 'varchar(80)' },
        type: { type: 'string', columnType: 'varchar(80)' },
        picture: { type: 'string', columnType: 'varchar(128)' },
        price: { type: 'number', columnType: 'DECIMAL (6,1)' },
        itemorder: { type: 'number', columnType: 'integer', required: true },
        category: {
            model: 'category'
        },
        order: {
            collection: 'Order',
            via: 'item',
            through: 'OrderItem'
          },
    },
};