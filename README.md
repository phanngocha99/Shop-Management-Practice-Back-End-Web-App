PTUDW-Project-EShop

## Front-End

- Su dung Free HTML Template co san
- https://htmlcodex.com/bootstrap-ecommerce-template/

## Back-End

- NodeJS: express, express-handlebars

npm init -y
npm i -s express
nodemon
npm i -s express-handlebars

- CSDL Postgres:

npm i -s pg pg-hstore sequelize
npm i -g sequelize-cli
sequelize init
sequelize model:create --name Product --attributes name:string,imagePath:string
sequelize model:create --name Image --attributes name:string,imagePath:string
sequelize model:create --name Brand --attributes name:string,imagePath:string
sequelize model:create --name Tag --attributes name:string,imagePath:string
sequelize model:create --name ProductTag --attributes name:string

sequelize seed:generate --name Brand
sequelize db:seed:all
sequelize seed:generate --name Product
onpm

npm i express-session

## Database

- DBeaver: Database Management Tool
- sequelize:
- ORM

## Free Hosting

Web Server

- Database Server
