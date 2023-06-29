/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming order (Brot ;) ) requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {

  indexAction: async function (req, res) {
    sails.log.debug("### List all Orders of User ###");

    try {
      const orders = await Order.find({
        userId: req.session.userId
      }).populate("item");

      return res.ok(orders);
    } catch (error) {
      sails.log.error(error);
      return res.serverError("An error occurred while fetching orders.");
    }
  },

  listAll: async function (req, res) {
    sails.log.debug("### List all Orders of User ###");

    try {
      const orders = await Order.find().populate("item");

      return res.ok(orders);
    } catch (error) {
      sails.log.error(error);
      return res.serverError("An error occurred while fetching orders.");
    }
  },

  commit: async function (req, res) {
    sails.log.debug("### creating order  ###");

    const orderValues = {
      totalAmount: req.session.total,
      address: req.session.address.strasse + " " + req.session.address.hausnummer + " " + req.session.address.postleitzahl,
      addressName: req.session.address.vorname + " " + req.session.address.name,
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

  deleteOrder: async function (inputs) {
    sails.log.debug("### deleting order ###");

    sails.log.debug(inputs.body.id);
    let orderId = inputs.body.id;

    let order = await Order.findOne({ id: orderId }).populate('item');
    sails.log.debug(order);


    // Remove the item from the order's item collection

    for (let item of order.item) {
      await Order.removeFromCollection(order.id, 'item').members([item.id]);
    }
    await Order.destroyOne({ id: order.id });

    sails.log.debug("### order deleting ###");
    return response;
  }

};