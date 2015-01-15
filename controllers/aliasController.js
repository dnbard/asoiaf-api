var CRUDCollection = require('percolator').CRUDCollection,
    aliases = require('../models/aliases'),
    model = aliases.model;

var aliasController = new CRUDCollection({
    schema : aliases.plainSchema,
    create : function(req, res, obj, cb){
        console.log('alias created');
        cb();
    },
    update : function(req, res, id, obj, cb){
        console.log('alias created');
        cb();
    },
    destroy : function(req, res, id, cb){
        console.log('alias destroyed');
        cb();
    },
    list : function(req, res, cb){
        console.log('alias list');
        cb(null, []);
    },
    fetch : function(req, res, cb){
        console.log('alias fetch');
        cb(null, []);
    }
});

module.exports = aliasController;
