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

        console.log("Update Quantity..")
        console.log(inputs)
        
        
        let sessionBasket = this.req.session.basket;
        console.log(sessionBasket.find({ id: inputs.id }))

        let itemToUpdate = sessionBasket.find(({ id: inputs.id }));

        console.log(sessionBasket.find(({ id: inputs.id })))
        if (itemToUpdate) {
            // Update the quantity of the item
            itemToUpdate.quantity = inputs.quantity;
        }
        this.req.session.basket = sessionBasket;
        return;

    }


};