# INSTRUCTIONS TO START THE PROJECT

First create a `.env `file using `.env.example` as a template.

This project requires NodeJs (v14.17.2 used on dev environment) and MySQL.

2 terminals are required (Backend and frontend)

## Commands to run the PROJECT

First install dependencies

```
npm install
```

Backend

```
npm run dev
```

Frontend

```
npm run start
```

# Sequelize commands

Run migrations
`npx sequelize db:migrate` \
Seed DB
`npx sequelize db:seed:all` \
Undo migrations
`npx sequelize db:migrate:undo:all` \
Undo Seeders
`npx sequelize db:seed:undo:all`

# Known issues

The url on the frontend to consume api are hard coded, port 2000 is recommended.

### Files that consume api

`ManualInputForm.js`
`MovieList.js`
`FileUpload.js`
