
const jsonServer = require('json-server') 
 require("dotenv").config();

const server = jsonServer.create()  
const router = jsonServer.router('db.json')
const PORT = process.env.PORT || 3000  
const middlewares = jsonServer.defaults()  
   
server.use(middlewares)  
server.use(router)  
server.listen(PORT, () => {  
  console.log('JSON Server is running')  
})  