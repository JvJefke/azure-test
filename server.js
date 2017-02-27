var app = require("express")();

app.use("*", function(req, res, next) {
    res.status(200).json({"hello": "world"});
});

app.listen(config.server.port, function() {
    console.log("running");
});
exports = module.exports = app;
