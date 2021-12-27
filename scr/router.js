const express = require('express');
const router = express.Router()

//*********************************************************** */
//******************************************************************* */
//modulo
const firedb = require('./modules/firedb.js')
//******************************************************************** */
//*********************************************************** */

//pagina Inicio
router.get("/",(req,res)=>{
    res.render('crud')
})


//************************************************************ */
//Subir informacion a la DB
router.post('/subirIMG',(req,res)=>{
    firedb.firedb.subirDatos(req.body).then(x => res.send(x))
    
})

//************************************************************ */
//consultar datos
router.get('/Consultar',(req,res)=>{
    firedb.firedb.consultar().then(x => res.send(x))
})

//************************************************************ */
//Eliminar dato
router.post('/EliminarIMG',(req,res)=>{
    firedb.firedb.remover(req.body.id).then(x => res.send(x))
    
})
//************************************************************ */
//Actualizar dato
router.post('/Actualizar',(req,res)=>{
    const {id} = req.body
    delete req.body['id'];
    firedb.firedb.Actualizar(id,req.body).then(x => res.send(x))
    
})


module.exports = router