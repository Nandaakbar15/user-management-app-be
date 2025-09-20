const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Management API",
      version: "1.0.0",
      description: "Dokumentasi untuk User Management API"
    },
    servers: [
      {
        url: "https://usermanagement-api.vercel.app" // ganti sesuai domain vercel
      }
    ]
  },
  apis: ["./routes/*.js"], // ambil dari komentar JSDoc di route
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(swaggerSpec);
};
