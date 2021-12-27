//creacion de elementos

const crear = {
    //*************************** */
    listaImagenes: () => {
        const keys = localStorage.getItem('keys')
        JSON.parse(keys).filter(x => {
            let data = localStorage.getItem(x)
            let inf = JSON.parse(data)

            const deleteOption = document.getElementById(x)
            if (deleteOption) { deleteOption.remove() }

            var add = document.createElement('img');
            add.type = "button"
            add.style = "border: solid 3px black; width:130px; height:130px;"
            add.src = inf.dato
            add.id = x
            add.name = x
            document.getElementById("lista").appendChild(add);
        })
    },
    //************************************************ */
    //imagen principal
    imagenPrincipal: (dato) => {
        let data = localStorage.getItem(dato)
        let inf = JSON.parse(data)


        const deleteOption = document.getElementById("imagenExtender")
        if (deleteOption) { deleteOption.remove() }

        const deleteO = document.getElementById("infoImg")
        if (deleteO) { deleteO.remove() }

        window.document.getElementById('imagenPrincipal').innerHTML = "<div id='imagenExtender'> </div>" +
            "<h1 id='infoImg'></h1>"

        var add = document.createElement('img');
        add.type = "button"
        add.style = "border: solid 3px black; width:70%; height:70%;"
        add.src = inf.dato
        add.name = dato
        add.id = "imagenNew"
        document.getElementById("imagenPrincipal").appendChild(add);
        document.getElementById('infoImg').innerText = inf.descripcion
    },
    //******************************************** */
    //limpiar
    limpiar: () => {
        const deleteOption = document.getElementById("imagenExtender")
        if (deleteOption) { deleteOption.remove() }

        window.document.getElementById('imagenPrincipal').innerHTML = "<div id='imagenExtender'> </div>"
        window.document.getElementById('lista').innerHTML = ""
    },
    //******************************************************** */
    //modalActualizar
    modalActualizar: (dato) => {
        let data = localStorage.getItem(dato)
        let inf = JSON.parse(data)

        document.getElementById('actualizarModalLabel').innerText = "dato :" + inf.descripcion
        

    }


}


export { crear }