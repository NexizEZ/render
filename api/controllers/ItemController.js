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
    let findparams = req.allParams();
    let item = await Item.create(findparams).fetch();

    console.log("1 " + item);

    sails.log("Upload image for item...");
    // Define the parameters of the upload as an object
    // In this example only the path, wehre to upload the image, is set
    let params = {
      //dirname: require('path').resolve(sails.config.appPath, 'assets/images/meals/')
      adapter: require('skipper-s3'),
      key: sails.config.s3accesskey,
      secret: sails.config.s3secret,
      bucket: 'wetebucket',
      region: 'us-west-2'
    };


    let callback = async function (err, uploadedFiles) {
      if (err) {
        sails.log("Upload Error")
        return res.serverError(err);
      } else {
        sails.log("Uploaded!")
      }
      console.log("2 " + item);
      let fname = require('path').basename(uploadedFiles[0].fd);
      await Item.updateOne({ id: item.id }).set({ picture:fname });
    };

      // This function is called, once all files are uploaded
      // err indicates if the upload process triggered an error and has been aborted 
      // uploaded files contains an array of the files which have been uploaded, in our case only one.
      await req.file('image').upload(params, callback);

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

  overviewAction: async function (req, res) {
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
    res.view('pages/item/overview', {
      items: items,
      categories,
      req,
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

    sails.log("Upload image for item...");
        // Define the parameters of the upload as an object
        // In this example only the path, wehre to upload the image, is set
        let params = {
          //dirname: require('path').resolve(sails.config.appPath, 'assets/images/meals/')
          adapter: require('skipper-s3'),
          key: sails.config.s3accesskey,
          secret: sails.config.s3secret,
          bucket: 'wetebucket',
          region: 'us-west-2'
        };
    
    
        let callback = async function (err, uploadedFiles) {
          if (err) {
            sails.log("Upload Error")
            return res.serverError(err);
          } else {
            sails.log("Uploaded!")
          }
          let fname = require('path').basename(uploadedFiles[0].fd);
          await Item.updateOne({ id: req.params.id }).set({ picture:fname });
        };
    
          // This function is called, once all files are uploaded
          // err indicates if the upload process triggered an error and has been aborted 
          // uploaded files contains an array of the files which have been uploaded, in our case only one.
          await req.file('image').upload(params, callback);

    res.redirect('/item');
  },
  

};


