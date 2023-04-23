// api/models/Category.js
module.exports = {
    attributes: {
        name: {
            type: 'string',  
            columnType: 'varchar(80)',  
            required: true,
        },
        categoryorder: {
            type: 'number',  
            columnType: 'integer',  
            required: true,
        },
        item: {
            collection: 'item',
            via: 'category'
        },
    }
  };