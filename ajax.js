function llamado1(){
      async function getfile(){
            let promesa= new Promise (function (resolve) {
                let request = new XMLHttpRequest
                request.open('GET', 'Ingreso de productos.html')
                request.onload=function () {
                    if (request.status==200) {
                        resolve(request.response)
                    }else{
                        resolve("error, archivo no encontrado")
                    }
                }
                request.send();
            })
            document.getElementById("demo").innerHTML=await promesa;
        }
        getfile();
}
function llamado2(){
      async function getfile(){
            let promesa= new Promise (function (resolve) {
                let request = new XMLHttpRequest
                request.open('GET', 'Mostrar Lista.html')
                request.onload=function () {
                    if (request.status==200) {
                        resolve(request.response)
                    }else{
                        resolve("error, archivo no encontrado")
                    }
                }
                request.send();
            })
            document.getElementById("demo").innerHTML=await promesa;
        }
        getfile();
}
function llamado3(){
      async function getfile(){
            let promesa= new Promise (function (resolve) {
                let request = new XMLHttpRequest
                request.open('GET', 'Generar Compra.html')
                request.onload=function () {
                    if (request.status==200) {
                        resolve(request.response)
                    }else{
                        resolve("error, archivo no encontrado")
                    }
                }
                request.send();
            })
            document.getElementById("demo").innerHTML=await promesa;
        }
        getfile();
}

