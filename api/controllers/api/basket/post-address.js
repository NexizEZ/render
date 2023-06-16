module.exports = {


    friendlyName: 'Post address',


    description: '',


    inputs: {
        name: {
            description: 'Name of the customer',
            type: 'string',
            required: true
        },
        vorname: {
            description: 'Shipping address vorname',
            type: 'string',
            required: true
        },
        strasse: {
            description: 'Shipping address strasse',
            type: 'string',
            required: true
        },
        hausnummer: {
            description: 'Shipping address hausnummer',
            type: 'string',
            required: true
        },
        postleitzahl: {
            description: 'Shipping address postleitzahl',
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
        return;
    }


};
