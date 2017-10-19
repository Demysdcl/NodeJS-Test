var app = require('./config/express-config')();

app.listen(3000, function(){
  console.log('Servidor rodando na porta 3000.');
});
