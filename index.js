import express from 'express';  // "main": "index.js", agregar esa linea en el package para usar modulos de JS
                                // importar express 
import usuarioRoutes from './routes/usuarioRoutes.js'; //importar la ruta de usuarios

const app = express() //instanciar express

app.use('/auth', usuarioRoutes) //rutas usar use
app.use(express.static('public'))

app.set('view engine', 'pug') //definir este set para usar el view engine de pug
app.set('views', './views') //definir la ruta de las vistas

const port = 3000
app.listen(port, () => {  //iniciar servidor en el puerto port
    console.log(`Servidor iniciado en el puerto ${port}`);
})

