# Blog-ExpressApi-MongooDB
Blog CRUD - Backend API Express.js, Database MongooDB

## Install & Usage?
```
git clone https://github.com/risqikhoirul/Blog-ExpressApi-MongooDB.git
cd Blog-ExpressApi-MongooDB
npm install
npm start
```

## Run on VPS runtime 24 hours?
```
git clone https://github.com/risqikhoirul/Blog-ExpressApi-MongooDB.git
cd Blog-ExpressApi-MongooDB
npm install
npm install -g pm2
pm2 start index.js --name "blog-crud"
pm2 startup
```

## Config

### CORS
please change the allowable cors domain in [index.js](https://github.com/risqikhoirul/Blog-ExpressApi-MongooDB/blob/master/index.js) 

![](https://github.com/risqikhoirul/Blog-ExpressApi-MongooDB/blob/master/aset/aset1.png?raw=true) 

### Database 
and change the mongooDB database config in [db.config.js](https://github.com/risqikhoirul/Blog-ExpressApi-MongooDB/blob/master/config/db.config.js) 

![](https://github.com/risqikhoirul/Blog-ExpressApi-MongooDB/blob/master/aset/aset2.png?raw=true) 


## Result API
![](https://github.com/risqikhoirul/Blog-ExpressApi-MongooDB/blob/master/aset/aset3.png?raw=true)
