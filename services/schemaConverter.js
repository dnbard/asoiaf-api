var _ = require('lodash'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

function converter(schema){
    var schemaOptions = {};

    _.each(schema.properties, function(prop){
        var schemaProp = {};
        schemaProp.type = prop.type;
        schemaProp.index = prop.index || false;

        schemaOptions[prop.title] = schemaProp;
    });

    var mSchema = new Schema(schemaOptions);
    return {
        mongooseSchema: mSchema,
        plainSchema: schema,
        model: mongoose.model(schema.title, mSchema)
    };
}

module.exports = converter;
