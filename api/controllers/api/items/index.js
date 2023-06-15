module.exports = {


    friendlyName: 'Index',
  
  
    description: 'Index Items.',
  
  
    inputs: {
  
    },
  
  
    exits: {
  
    },
  
  
    fn: async function (inputs) {
  
      let items = await Item.find().populate("category");
      let categories = await Category.find();
  
      let result = {
        items,
        categories
    }

    console.log("### Getting Shop Items ####")
    return result;
      
  
    }
  
  
  };
