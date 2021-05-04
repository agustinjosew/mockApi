
const jsonServidor = require('json-server');
const servidor     = jsonServidor.create();
const router       = jsonServidor.router('database.json');
const middlewares  = jsonServidor.defaults();
const puerto       = process.env.PUERTO || 3000;

servidor.use(middlewares);
servidor.use(router);
servidor.listen(puerto);

