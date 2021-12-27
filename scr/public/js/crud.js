import { formularios } from "./modulos/form.js"
import { llamada } from "./modulos/ajax.js"
import { crear } from "./modulos/contruir.js"

//********************************************************************** */
//Subir inf
//conprovacion de campos llenos
//tamaño de la imagen no superior a 16MB
//convertir la imagen a base64
//envio por medio de post,para subir a una db
window.document.getElementById('subirImg').addEventListener('click', x => {
    var fileInput = document.getElementById('fileData');
    var autoInput = document.getElementById('floatingInput')
    if (autoInput.value) {
        try {
            if (fileInput.files[0].size / 1024 / 1024 < 16) {
                formularios.convertir(fileInput, autoInput.value).then(x => {
                    llamada.solicitudPos("/subirIMG", JSON.stringify(x)).then(x => {
                        alert(x)
                        listaImagenesget()
                    })
                })
            }
        }
        catch (e) {
            alert('Seleccione la imagen')
        }
    }
    else { alert('llenar el campo descripcion') }
})

//********************************************************************** */
//********************************************************************** */
//Imagenes Inicio

const listaImagenesget = () => {
    llamada.solicitudGet("/Consultar").then(x => {
        let data = JSON.parse(x)
        Object.keys(data).filter(keys => {
            localStorage.setItem(keys, JSON.stringify(data[keys]))
        })
        if (localStorage.getItem('keys')) { localStorage.removeItem('keys') }
        localStorage.setItem("keys", JSON.stringify(Object.keys(data)))

        //**************************************************************** */
        //visualizar imagenes
        crear.listaImagenes()
    })
}
listaImagenesget()


//****************************************************************** */
//Visualizacion imagen
window.document.getElementById('lista').addEventListener('click', x => {

    if (x.target.id != "lista") {
        crear.imagenPrincipal(x.target.id)
    }
})

//******************************************************************* */
//Eliminar
window.document.getElementById('eliminar').addEventListener('click', x => {
    const img = window.document.getElementById('imagenNew').name
    if (img) {
        llamada.solicitudPos("/EliminarIMG", JSON.stringify({ id: img })).then(x => {
            alert(x)
            crear.limpiar()
            localStorage.removeItem(img)
            listaImagenesget()
            


        })
    }
})

//******************************************************************* */
//Actualizar
window.document.getElementById('actualizar').addEventListener('click', x => {
    const img = window.document.getElementById('imagenNew').name
    if (img) {
        crear.modalActualizar(img)
    }

})

window.document.getElementById('actualizaImagen').addEventListener('click', x => {
    const id = window.document.getElementById('imagenNew').name
    var fileInput = document.getElementById('imagenActualizar');
    var autoInput = document.getElementById('DescripcionActualizar')
    //************************************************************************** */
    if (autoInput.value == "" && fileInput.value == "") {

    }
    //************************************************************************** */
    if (autoInput.value == "" && fileInput.value) {
        if (fileInput.files[0].size / 1024 / 1024 < 16) {
            formularios.convertirSoloBase64(fileInput, id).then(x => {
                llamada.solicitudPos("/Actualizar", JSON.stringify(x)).then(x => {
                    alert(x)
                    crear.limpiar()
                    listaImagenesget()
                })
            })
        }
        else { alert('Imagen superior a 16Mb') }
    }
    //************************************************************************** */
    if (autoInput.value && fileInput.value == "") {
        const inf = {
            'id': id,
            'descripcion': autoInput.value
        }
        llamada.solicitudPos("/Actualizar", JSON.stringify(inf)).then(x => {
            alert(x)
            crear.limpiar()
            listaImagenesget()
        })
    }
    //************************************************************************** */
    if (autoInput.value && fileInput.value) {
        formularios.convertirID(fileInput, autoInput.value, id).then(x => {
            llamada.solicitudPos("/Actualizar", JSON.stringify(x)).then(x => {
                alert(x)
                crear.limpiar()
                listaImagenesget()                
            })
        })
    }

})
