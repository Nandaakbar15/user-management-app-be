# API mengelola manajemen user berbasis website

API untuk Aplikasi manajemen user berbasis web

#### Cara menjalankan project ini

- Pertama clone repository ini dengan memasukan perintah di bawah ini :
```
git clone git remote add origin https://github.com/Nandaakbar15/user-management-app-be.git
```

- Lalu selanjutnya masukan perintah ini :
```
npm install
```

- Setelah memasukan perintah sebelumnya, jalankan project atau aplikasinya dengan memasukan perintah ini :
```
node app 
```
<br>

#### Fitur-fitur dalam API ini (Dari sisi backend) :
- Menampilkan semua data user
- Tambah user
- Edit user
- Delete User
- Melihat user berdasarkan ID

#### Stack yang digunakan 
- Node.js
- Express.js
- Prisma (Untuk ORM)
- MySQL

Link url : https://usermanagement-api.vercel.app/

Link dokumentasi swagger : https://usermanagement-api.vercel.app/api-docs


#### Endpoint dari API :
- GET 
https://usermanagement-api.vercel.app/api/users

- GET BY ID
https://usermanagement-api.vercel.app/api/users/:id

- POST 
https://usermanagement-api.vercel.app/api/add-users

- PUT
https://usermanagement-api.vercel.app/api/update-users/:id

- DELETE
https://usermanagement-api.vercel.app/delete-user/:id
