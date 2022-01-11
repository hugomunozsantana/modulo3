let lista=[];
function ingresar(){
  let prod=document.getElementById('prod').value;
  while (!/^[a-z]+$/.test(prod)) {
    alert("Ingresa solo texto en el cuadro Producto.");
    document.getElementById("prod").value.focus();
    }
  let vun=document.getElementById('vun').value;
  while (!/^[0-9]+$/.test(vun)) {
    alert("Ingresa solo numeros en el cuadro Valor unitario.");
    document.getElementById("vun").value.focus();
    }
  let can=document.getElementById('can').value;
  while (!/^[0-9]+$/.test(can)) {
    alert("Ingresa solo números en el cuadro Cantidad.");
    document.getElementById("can").value.focus();
    }
  let ele=new obj(prod, vun, can);
  lista.push(ele);
  alert("Producto ingresado exitosamente");
  limpiar();
}

class obj{
constructor(producto, valor, cantidad){
        this.producto=producto;
        this.valor=valor;
        this.cantidad=cantidad;
  this.total=function(){
    let res=parseInt(this.valor)*parseInt(this.cantidad);
    return res;
  }
    }
}
function calcular(){
  obj.prototype.ivva=function(){
     let valIva=this.total()*0.19;
     return valIva;
  };
  let sumaiva=0;
  let sumatotal=0;
  let neto=0;
  for(var i=0;i<lista.length;i++){
    sumaiva+=lista[i].ivva();
    sumatotal+=lista[i].total();
  }
  neto=sumatotal+sumaiva;
  let txt="";
  //for(var i=0;i<lista.length;i++){
    txt+="<tr><td>"+sumatotal+
          "</td><td>"+sumaiva+
          "</td><td>"+neto+"</td>";
  //}
  txt+="</tr>";
  document.getElementById('demo2').innerHTML=txt;
  //let txt="bruto: "+sumatotal+"<br>";
  //      txt+="iva: "+sumaiva+"<br>";
  //      txt+="neto: "+neto+"<br>";
  //document.getElementById('demo2').innerHTML=txt;
  
}


function mostrar(){
        let contenido="";
        for (var i = 0; i <lista.length; i++) {
            contenido+= "<tr><td>"+(i+1)+ "</td><td>"+lista[i].producto+
                        "</td><td>"+lista[i].valor+
                        "</td><td>"+lista[i].cantidad+
                        "</td>";
        }
        contenido+="</tr>";
        document.getElementById('muestra').innerHTML=contenido;
    }
function limpiar(){
   prod=document.getElementById('prod').value="";
   vun=document.getElementById('vun').value="";
   can=document.getElementById('can').value="";
   prod=document.getElementById('prod').focus();
}