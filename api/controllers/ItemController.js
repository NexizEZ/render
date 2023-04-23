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
    res.redirect ('/item' );
  },

  find: async function (req, res) {
    sails.log.debug("### List all items ###")
    let items;
    if (req.query.q && req.query.q.length > 0) {
      items = await Item.find({
        name: {
          'contains': req.query.q
        }
      })
    } else {
      item = await Item.find().populate("category");
    }
    res.view ('pages/item/index', { items: items } );
  },

  findOne: async function (req, res) {
    sails.log.debug("### List single item ###")
    let item = await Item.findOne({ id: req.params.id });
    res.view ('pages/item/show', { item: item } );
  },

  destroyOne: async function (req, res) {
    sails.log.debug("### Destroy single meal ###")
    await Item.destroyOne({ id: req.params.id });
    res.redirect('/item');
  },

  editOne: async function (req, res) {
    sails.log.debug("### Edit single item ###")
    let item = await Item.findOne({ id: req.params.id }).populate('category');
    res.view('pages/item/edit', { item: item });
  },

  updateOne: async function (req, res) {
    sails.log.debug("### Update single item ###")
    let item = await Item.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/item');
  }
};

