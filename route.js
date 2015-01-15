var aliasController = require('./controllers/aliasController');

function Routing(app){
    app.route('/aliases', aliasController.handler);
    app.route('/aliases/:id', aliasController.wildcard);
}

module.exports = Routing;
