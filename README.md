<h1 align='center'>Welcome! #Fullstack ExpressJS + VueJS3 🚀</h1>

# Requirements
## Languages
> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> </br>

## Tools
> [<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />![version](https://img.shields.io/badge/version-21.7.1-blue)](https://nodejs.org/en/download/prebuilt-installer) </br>
> [<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />![version](https://img.shields.io/badge/version-4.31.1-blue)](https://www.docker.com/get-started/) </br>

## Library
> [<img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" />![version](https://img.shields.io/badge/version-4.19.2-blue)](https://expressjs.com/en/starter/installing.html) </br>

## Database
> [<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />![version](https://img.shields.io/badge/version-4.4.24-blue)](https://www.mongodb.com/try/download/community) </br>
> [<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />![version](https://img.shields.io/badge/version-17.2-blue)](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) </br>

# Setup
## NodeJS
- Pastikan sudah installasi `pnpm`, jika belum install bisa ikuti berikut
```bash
npm i -g pnpm
```
- Install library dari nodejs
```bash
pnpm i
```

## Docker
> .env
- Jika menggunakan docker, maka koneksi db bisa menggunakan contoh berikut:
```bash
MONGO_URI=mongodb://express_mongodb:27017/exampleDB
```

## Application
> Docker
- Jangan lupa untuk merubah `ports` pada file `docker-compose.yml` untuk disesuaikan di perangkat masing - masing supaya tidak `error`
```bash
ports:
      - "3306:3306" # *Contoh customize_port:default_service_port
```
- Pastikan value `.env` sudah sama dengan konfigurasi `docker-compose.yml`
- Mengaktifkan mesin docker, dan pastikan operasi build berhasil sampai akhir
```bash
docker-compose up -d
```