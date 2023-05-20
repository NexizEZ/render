module.exports = {


    friendlyName: 'Post Item quantity',


    description: '',


    inputs: {
        quantity: {
            description: 'Quantity of the item',
            type: 'string',
            required: true
        },
    },


    exits: {

    },


    fn: async function (inputs) {

        let item = inputs.item;
        item.quantity = inputs.quantity;
        this.req.session.basket.push(item);
        return;

    }


};
