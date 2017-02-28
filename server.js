var app = require("express")();

app.use("/api", function(req, res, next) {
    res.status(200).json({ "type": "api" });
});

app.use("*", function(req, res, next) {
    res.status(200).sendFile("./index.html");
});

app.listen(process.env.PORT || 4000, function() {
    console.log("running");
});
exports = module.exports = app;
