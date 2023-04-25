// api/models/Item.js
module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true },
        description: { type: 'string', columnType: 'varchar(80)' },
        type: { type: 'string', columnType: 'varchar(80)' },
        picture: { type: 'string', columnType: 'varchar(80)' },
        price: { type: 'number', columnType: 'DECIMAL (6,2)' },
        itemorder: { type: 'number', columnType: 'integer', required: true },
        category: {
            model: 'Category'
        },
    },
};