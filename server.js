var app = require("express")();
var fs = require('fs');

app.use("/api", function(req, res, next) {
    res.status(200).json({ "type": "api" });
});

app.use("*", function(req, res, next) {
    res.set("Content-Type", "text/html");
    fs.createReadStream("./index.html").pipe(res);
});

app.listen(process.env.PORT || 4000, function() {
    console.log("running");
});
exports = module.exports = app;
