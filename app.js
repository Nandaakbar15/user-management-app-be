const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const router = require('./routes/route');

// Tambahkan impor untuk Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Opsi untuk swagger-jsdoc
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User Management API',
            version: '1.0.0',
            description: 'Dokumentasi untuk User Management API'
        },
        servers: [
            {
                url: `http://localhost:${port}`
            }
        ]
    },
    apis: ['./routes/*.js'] // Pastikan path ini benar
};

const specs = swaggerJsdoc(options);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Tambahkan middleware Swagger UI sebelum router utama
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(router);

app.listen(port, () => {
    console.log(`Server is running at : http://localhost:${port}`);
    console.log(`Dokumentasi API tersedia di http://localhost:${port}/api-docs`);
});

app.get("/", (req, res) => {
    res.status(200).json({
        statusCode: 200,
        message: 'User Manajemen App'
    });
});