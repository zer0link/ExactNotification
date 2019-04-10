const MiscController = require('../api/controllers/misc');

const misc = (app) => {
    app.get('/api/misc/createdemo', (req, res) => {
        let controller = new MiscController();
        controller.Post()
            .then(user =>
                res.send(user)
            )
    });

}

module.exports = misc; 