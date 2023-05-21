module.exports = {


    friendlyName: 'Commit',


    description: 'Commit order.',


    inputs: {

    },


    exits: {

    },


    fn: async function (inputs) {
        console.log("### creating order ###")
        orderValues.addressName = address.name;
        orderValues.address = address.address;
        await Order.create({
            "totalAmount": 1,
            "address": req.session.address.address,
            "addressName": req.session.address.name,
        })


        let basket = req.session.basket
        let itemarray = [];
        basket.forEach(Item => {
            itemarray.push(Item.id)
        });
        await Order.addToCollection(order.id, 'items', itemarray)

        req.session.basket = [];
        req.session.order = null;

        res.redirect('/');
        return "success";
    }
};
