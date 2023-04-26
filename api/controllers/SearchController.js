/**
 * SearchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");


module.exports = {
    // itemsearch
    searchItems: async function (req, res) {
        let searchResults = [];
        sails.log.debug("### Searching for " + req.query.search + " with added filter ###");

        let where = {};

        if (req.query.search && req.query.search.length > 0) {
            where = {
                or: [
                    { name: { 'contains': req.query.search } },
                    { description: { 'contains': req.query.search } },
                    { type: { 'contains': req.query.search } },
                ]
            };
        }

        if (req.query.price_von && req.query.price_von > 0) {
            where.price = { '>=': parseFloat(req.query.price_von) };
        }

        if (req.query.price_bis && req.query.price_bis > 0) {
            where.price = { '<=': parseFloat(req.query.price_bis) };
        }

        if (req.query.category && req.query.category.length > 0) {
            where.category = req.query.category;
        }

        searchResults = await Item.find({ where }).populate("category");
        categories = await Category.find();

        return res.view('pages/item/index', {
            items: searchResults,
            categories
        });
    },
};
