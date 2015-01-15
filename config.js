var _ = require('lodash'),
    local = {},
    injectedConfigFields;

try{
    local = require('./local.js');
    injectedConfigFields = _.keys(local).join(',');
    if (injectedConfigFields){
        console.log('APPLICATION >> Injected external config fields %s', injectedConfigFields);
    }
} catch(e){
    console.log('APPLICATION >> Failed to inject external config');
    local = {};
}

module.exports = _.extend({
    mongo: 'mongodb://localhost/asoiaf',
    port: process.env.PORT || 3000
}, local);
