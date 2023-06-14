/**
 * ImageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");


module.exports = {

    uploadImageForm: async function (req, res) {
        sails.log.debug("Upload image form....")
        let item = await Item.findOne({ id: req.params.id })
        res.view('pages/item/imageUpload', { item: item });
      },
    
      uploadImage: async function (req, res) {
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
          return res.redirect('/item');
        };
    
          // This function is called, once all files are uploaded
          // err indicates if the upload process triggered an error and has been aborted 
          // uploaded files contains an array of the files which have been uploaded, in our case only one.
          await req.file('image').upload(params, callback);
        },

};




