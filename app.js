const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const server = app.listen(8080, () => console.log('Server Up'))

app.use(express.json())
app.use(express.urlencoded({extended: true})) 

let productos=[]


// HANDLEBARS
 app.engine('handlebars', handlebars.engine())
app.set('views', './views/handlebars')
app.set('view engine', 'handlebars')

//PUG

/*  app.set('views', './views/pug'); 
app.set('view engine', 'pug')   */


//EJS

/* app.set('views', './views/ejs')
app.set('view engine', 'ejs') */

 

app.get('/productos', (req, res) => {
    res.render('home',{
        productos: productos
    } )
})


app.get('/', (req, res) => {
    res.render('form')
})


app.post('/', (req, res) => {
    if (req.body.nombre && req.body.precio && req.body.foto) {
        productos.push(req.body)
        res.redirect('./')
    } else {
        res.redirect('./')
    }
})
