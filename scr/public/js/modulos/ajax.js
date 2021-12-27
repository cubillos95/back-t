//dentro de este script se ara todas las funciones peticiones 
const llamada = {
    solicitudPos: (url, dato) => new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onload = () => { resolve(xhr.response) }
        xhr.send(dato)
    }),
    //************************************************* */
    //************************************************* */
    solicitudGet: (url) => new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            resolve(xhr.response)
        }
        xhr.send()
    }),
    //************************************************* */
}

export { llamada }