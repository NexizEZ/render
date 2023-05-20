module.exports = {


    friendlyName: 'Add item to shopping basket',


    description: 'Add item to basket.',


    inputs: {
        id: {
            description: 'The id of the item to add',
            type: 'string',
            required: true
        },
    },


    exits: {

    },


    fn: async function (inputs) {
        console.log("Add item to basket..")
        let item = await Item.findOne({ id: inputs.id })
        if (!this.req.session.basket) {
            console.log("Create new basket..")
            this.req.session.basket = [];
        }
        item.quantity = 1;
        this.req.session.basket.push(item);
        return;

    }


};
