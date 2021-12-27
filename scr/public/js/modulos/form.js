//gestion de todo lo relacionado con el menu
const formularios = {
    //**************************************************** */
    //la siguiente funcion convierte las imagenes a base 64 
    //haora las retorna en formato de objeto
    //                                      descripcion
    //                                      nameImg
    //                                      dato
    convertir: (data, descripcion) => new Promise((resolve) => {
        const nombre = data.value.split('\\');
        var reader = new FileReader();
        reader.readAsDataURL(data.files[0]);

        reader.onload = function () {
            resolve({
                'descripcion': descripcion,
                'nameImg': nombre[2],
                'dato': reader.result
            })
        }
    }),
    //**************************************************** */
    //
    convertirSoloBase64: (data,id) => new Promise((resolve) => {
        //**************************************************** */
        //la siguiente funcion convierte las imagenes a base 64 
        //haora las retorna en formato de objeto

        const nombre = data.value.split('\\');
        var reader = new FileReader();
        reader.readAsDataURL(data.files[0]);

        reader.onload = function () {
            resolve({
                'id':id,
                'nameImg': nombre[2],
                'dato': reader.result
            })
        }

    }),
    //************************************************** */
    convertirID:(data, descripcion ,id) => new Promise((resolve) => {
        const nombre = data.value.split('\\');
        var reader = new FileReader();
        reader.readAsDataURL(data.files[0]);

        reader.onload = function () {
            resolve({
                'id':id,
                'descripcion': descripcion,
                'nameImg': nombre[2],
                'dato': reader.result
            })
        }
    })

}

export { formularios }