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

    deleteOrder: async function (inputs) {
        sails.log.debug("### deleting entry ###");
      
        const orderId = inputs.orderId; // Assuming the order ID is passed as a parameter
      
        const order = await Order.findOne({ id: orderId }).populate('item');
      
        if (!order) {
          return res.notFound(`Order with ID ${orderId} not found.`);
        }
      
        // Remove the item from the order's item collection
        await Order.removeFromCollection(orderId, 'item').members([itemId]);
      
        res.ok(`Item with ID ${itemId} has been logically deleted from the order.`);
      }
      
};