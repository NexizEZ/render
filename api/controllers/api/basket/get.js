module.exports = {


    friendlyName: 'Get',


    description: 'Get basket.',


    inputs: {

    },


    exits: {

    },


    fn: async function (inputs) {
        console.log("Get Basket..")
        

        let basket = this.req.session.basket
        let pricetotal = 0;
        basket.forEach(Item => {
            pricetotal = pricetotal + Item.price;
        });

        let result = {
            "pricetotal": pricetotal,
            "basket": this.req.session.basket,
            "address": this.req.session.address,
        }
        return result;
    }
};
