// routes/route.js
const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  addNewUsers,
  updateUser,
  deleteUser,
  getUserById,
} = require("../controller/userController");

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID unik pengguna.
 *         name:
 *           type: string
 *           description: Nama pengguna.
 *         email:
 *           type: string
 *           description: Alamat email pengguna.
 *       example:
 *         id: 1
 *         name: Budi Santoso
 *         email: budi@example.com
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Mendapatkan daftar semua pengguna.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Daftar pengguna berhasil diambil.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Terjadi kesalahan server.
 */
router.get("/api/users", getAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Mendapatkan pengguna berdasarkan ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID pengguna yang akan dicari.
 *     responses:
 *       200:
 *         description: Pengguna berhasil diambil.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Pengguna tidak ditemukan.
 *       500:
 *         description: Terjadi kesalahan server.
 */
router.get("/api/users/:id", getUserById);

/**
 * @swagger
 * /api/add-user:
 *   post:
 *     summary: Menambahkan pengguna baru.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Pengguna berhasil ditambahkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Data input tidak valid.
 *       500:
 *         description: Terjadi kesalahan server.
 */
router.post("/api/add-user", addNewUsers);

/**
 * @swagger
 * /api/update-user/{id}:
 *   put:
 *     summary: Memperbarui data pengguna.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID pengguna yang akan diperbarui.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Pengguna berhasil diperbarui.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Pengguna tidak ditemukan.
 *       500:
 *         description: Terjadi kesalahan server.
 */
router.put("/api/update-user/:id", updateUser);

/**
 * @swagger
 * /api/delete-user/{id}:
 *   delete:
 *     summary: Menghapus pengguna.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID pengguna yang akan dihapus.
 *     responses:
 *       200:
 *         description: Pengguna berhasil dihapus.
 *       404:
 *         description: Pengguna tidak ditemukan.
 *       500:
 *         description: Terjadi kesalahan server.
 */
router.delete("/api/delete-user/:id", deleteUser);

module.exports = router;
