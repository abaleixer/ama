const app = require('./config/server');
require('./app/routes/user')(app);


//iniciar el servidor
app.listen(app.get('port'), () => {
   console.log('server en el puerto', app.get('port'));
});