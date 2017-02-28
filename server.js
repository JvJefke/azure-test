var app = require("express")();
var fs = require('fs');

app.use("/api", function(req, res, next) {
    res.status(200).json({ "type": "api" });
});

app.use("*", function(req, res, next) {
    fs.readFile('./index.html', function(err, result) {
        if (!err) {
            return res.status(200).send(result);
        }

        return res.status(400).json(err);
    });
});

app.listen(process.env.PORT || 4000, function() {
    console.log("running");
});
exports = module.exports = app;
