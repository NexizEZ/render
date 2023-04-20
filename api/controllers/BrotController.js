/**
 * BrotController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {

  new: async function (req, res) {
    let categories = await Category.find();
    res.view('pages/brot/new', { categories });
  },

  create: async function (req, res) {
    sails.log.debug("### Create Brot ###")
    let params = req.allParams();
    await Brot.create(params);
    res.redirect ('/brot' );
  },

  find: async function (req, res) {
    sails.log.debug("### List all Brot ###")
    let brots;
    if (req.query.q && req.query.q.length > 0) {
      brots = await Brot.find({
        name: {
          'contains': req.query.q
        }
      })
    } else {
      brots = await Brot.find().populate("category");
    }
    res.view ('pages/brot/index', { brots: brots } );
  },

  findOne: async function (req, res) {
    sails.log.debug("### List single Brot ###")
    let brot = await Brot.findOne({ id: req.params.id });
    res.view ('pages/brot/show', { brot: brot } );
  },

  destroyOne: async function (req, res) {
    sails.log.debug("### Destroy single meal ###")
    await Brot.destroyOne({ id: req.params.id });
    res.redirect('/brot');
  },

  editOne: async function (req, res) {
    sails.log.debug("### Edit single Brot ###")
    let brot = await Brot.findOne({ id: req.params.id }).populate('category');
    res.view('pages/brot/edit', { meal: meal });
  },

  updateOne: async function (req, res) {
    sails.log.debug("### Update single Brot ###")
    let brot = await Brot.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/brot');
  }
};

