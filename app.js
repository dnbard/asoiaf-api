var Percolator = require('percolator').Percolator,
    config = require('./config'),
    mongoose = require('mongoose');

mongoose.connect(config.mongo, function(){
    console.log('DATABASE >> Connected to database');
    var app = new Percolator({ port : config.port }),
        routing = require('./route');

    routing(app);
    app.listen(function(){
      //console.log(app.server.router.routes);
      console.log('APPLICATION >> Started at %s', config.port);
    });
});
