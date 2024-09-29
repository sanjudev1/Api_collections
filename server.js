const jsonserver = require('json-server');
const server = jsonserver.create();
const router = jsonserver.router('collections.json');
const middlewares = jsonserver.defaults();

// port assigned 

const port = process.env.PORT || 8080 

server.use(middlewares);
server.use(router);

server.listen(port,()=>{
    console.log(`Json server is running on port ${port}`)
})