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
        brot: {
            collection: 'brot',
            via: 'category'
        },
        broetchen: {
            collection: 'brot',
            via: 'category'
        },
        suess: {
            collection: 'suess',
            via: 'category'
        },
        herzhaft: {
            collection: 'herzhaft',
            via: 'category'
        },
        glutenfrei: {
            collection: 'glutenfrei',
            via: 'category'
        },
        getraenke: {
            collection: 'getraenke',
            via: 'category'
        },
    }
  };