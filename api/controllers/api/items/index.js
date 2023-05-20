module.exports = {


    friendlyName: 'Index',
  
  
    description: 'Index Items.',
  
  
    inputs: {
  
    },
  
  
    exits: {
  
    },
  
  
    fn: async function (inputs) {
  
      return items = await Item.find().populate("category");
  
      
  
    }
  
  
  };
