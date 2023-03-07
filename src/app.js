const express = require("express");
var indexRouter = require("./routes/index");
var indexMiddleware = require("./middleware/index");
var contactRouter = require("./routes/contact-route");
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./../swagger.json");

const db = require("./config/db");

const app = express();

db.connectDb();

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: true }));

// app.use(express.static("public"));

app.use(indexMiddleware.LoggerMiddleware);
app.use("/", indexRouter);
app.use("/contacts", contactRouter);


// FOR DOCUMENTATION
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, function () {
  console.log(
    "Server is running and listening in port 4000: http://localhost:3000"
  );
});
