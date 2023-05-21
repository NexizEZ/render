/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming order (Brot ;) ) requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {

    commit: async function (req, res) {
        sails.log.debug("### creating order  ###");

        const orderValues = {
            totalAmount: 1,
            address: req.session.address.address,
            addressName: req.session.address.name,
            userId: req.session.userId,
        };

        const order = await Order.create(orderValues).fetch();

        const basket = req.session.basket;

        for (const item of basket) {
            await Order.addToCollection(order.id, 'item').members([item.id]);
        }

        req.session.basket = [];
        req.session.order = null;

        res.redirect('/');
    },

    indexAction: async function (req, res) {

        sails.log.debug("### List all Orders ###")
        let orders;

        if (req.query.q && req.query.q.length > 0) {
            items = await Item.find({
                name: {
                    'contains': req.query.q
                }
            })

            categories = await Category.find();
        } else {
            orders = await Order.find().populate("category");
            categories = await Category.find();
        }
        res.view('pages/account/storno', {
            items: items,
            categories,
        });
    },
};