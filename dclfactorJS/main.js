var cluster = require('cluster');
var os = require('os');

var cpus = os.cpus();
//console.log(cpus);

cluster.on('listening', worker => {
    console.log('cluster conectado ' + worker.process.pid);
});

cluster.on('exit', worker => {
   console.log('cluster %d desconectado', worker.process.pid); 
   cluster.fork();
});

if (cluster.isMaster) {
    cpus.forEach(function () {
        cluster.fork();
    });
    console.log('thread master');
} else {
    require('./index.js');
}



