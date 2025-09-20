const express = require("express");
const cors = require("cors");
const router = require("./routes/route");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Management API",
      version: "1.0.0",
      description: "Dokumentasi untuk User Management API",
    },
    servers: [
      {
        url: "/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(router);

app.get("/", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "User Manajemen App",
  });
});


module.exports = app;
