module.exports = {


    friendlyName: 'delete',


    description: 'Delete item to basket.',


    inputs: {

    },


    exits: {

    },


    fn: async function (inputs) {

            this.req.session.basket = [];
        return;

    }


};
