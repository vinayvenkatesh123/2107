// server.js
const port = 1520; //set port
if(port == 0){
	console.log('set port in server.js')
	process.exit(1);
}

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
})
