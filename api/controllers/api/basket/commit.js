module.exports = {


    friendlyName: 'Commit',


    description: 'Commit order.',


    inputs: {

    },


    exits: {

    },


    fn: async function (inputs) {
        console.log("### creating order ###")
        await Order.create({
            "totalAmount": 1,
            "addressName": req.session.address.name,
            "addressVorname": req.session.address.vorname,
            "addressStrasse": req.session.address.strasse,
            "addressHausnummer": req.session.address.hausnummer,
            "addressPostleitzahl": req.session.address.postleitzahl,
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
