var schemaConverter = require('../services/schemaConverter.js');

var schema = {
    title: 'alias',
    description: 'Aliases between UUIDs and entities readable IDs',
    type : 'object',
    properties : {
        id: {
            title: 'id',
            type: 'string',
            required: true,
            index: true
        },
        key: {
            title: 'key',
            type: 'string',
            required: true,
            index: true
        }
    }
};

module.exports = schemaConverter(schema);
