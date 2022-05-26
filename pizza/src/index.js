if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const { routes } = require("./routes");
const logger = require("express-pino-logger");

const app = express();

app.use(logger());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000);
