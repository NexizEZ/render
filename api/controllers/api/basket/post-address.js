module.exports = {


    friendlyName: 'Post address',


    description: '',


    inputs: {
        name: {
            description: 'Name of the customer',
            type: 'string',
            required: true
        },
        address: {
            description: 'Shipping address',
            type: 'string',
            required: true
        },
    },


    exits: {

    },


    fn: async function (inputs) {
        console.log("Push address..");
        this.req.session.address = {
            "name": inputs.name,
            "vorname": inputs.vorname,
            "strasse": inputs.strasse,
            "hausnummer": inputs.hausnummer,
            "postleitzahl": inputs.postleitzahl
        };
        console.log("Adress: " + result);
        return;
    }


};
