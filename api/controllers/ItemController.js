/**
 * ItemController
 *
 * @description :: Server-side actions for handling incoming item (Brot ;) ) requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {

  new: async function (req, res) {
    let categories = await Category.find();
    res.view('pages/item/new', { categories });
  },

  create: async function (req, res) {
    sails.log.debug("### Create item ###")
    let params = req.allParams();
    await Item.create(params);
    res.redirect('/item');
  },

  indexAction: async function (req, res) {
    sails.log.debug("### List all items ###")
    let items;
    let categories

    if (req.query.q && req.query.q.length > 0) {
      items = await Item.find({
        name: {
          'contains': req.query.q
        }
      })
      categories = await Category.find();
    } else {
      items = await Item.find().populate("category");
      categories = await Category.find();
    }
    res.view('pages/item/index', {
      items: items,
      categories,
    });
  },

  findOne: async function (req, res) {
    sails.log.debug("### List single item ###")
    let item = await Item.findOne({ id: req.params.id }).populate('category');
    res.view('pages/item/show', { item: item });
  },

  destroyOne: async function (req, res) {
    sails.log.debug("### Destroy single meal ###")
    await Item.destroyOne({ id: req.params.id });
    res.redirect('/item');
  },

  editOne: async function (req, res) {
    sails.log.debug("### Edit single item ###")
    let item = await Item.findOne({ id: req.params.id }).populate('category');
    let categories
    categories = await Category.find();

    res.view('pages/item/edit', {
      item: item,
      categories,
    });
  },

  updateOne: async function (req, res) {
    sails.log.debug("### Update single item ###")
    let item = await Item.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/item');
  },

  commit: async function (req, res) {
    sails.log.debug("### creating order ###");
  
    const orderValues = {
      totalAmount: 1,
      address: req.session.address.address,
      addressName: req.session.address.name,
      userID: req.session.userId,
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
  

};


