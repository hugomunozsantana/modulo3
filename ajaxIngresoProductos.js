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
    txt+="<tr><td>$"+sumatotal+
          "</td><td>$"+sumaiva+
          "</td><td>$"+neto+"</td>";
  txt+="</tr>";
  document.getElementById('demo2').innerHTML=txt;
}


function mostrar(){
        let contenido="";
        for (var i = 0; i <lista.length; i++) {
            contenido+= "<tr><td>"+i+"</td><td>"+lista[i].producto+
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
function eliminar(){
  let elim=document.getElementById('elProd').value;
      lista.splice(elim,1);
      mostrar();   
}
function modificar(){
  let valMod=document.getElementById('mod').value;
  let newProd=document.getElementById('modNom').value;
  let newPre=document.getElementById('modVal').value;
  let newCant=document.getElementById('modCan').value;
  if (newProd!="") {
    lista[valMod].producto=newProd;
  }else if (newPre!="") {
    lista[valMod].valor=newPre;
  }else if (newCant!="") {
    lista[valMod].cantidad=newCant;
  }
  //lista[valMod].producto=newProd;
  //lista[valMod].valor=newPre;
  //lista[valMod].cantidad=newCant;
  mostrar();
  valMod=document.getElementById('mod').value="";
  newProd=document.getElementById('modNom').value="";
  newPre=document.getElementById('modVal').value="";
  newCant=document.getElementById('modCan').value="";
}
function descuento(){
  obj.prototype.ivva=function(){
     let valIva=this.total()*0.19;
     return valIva;
  };
  let valDesc=document.getElementById('desc').value;
  let descuento=0;
  let descProd=0;
  let descIva=0;
  let descTotal=0;
  let sumaiva=0;
  let sumatotal=0;
  let neto=0;
  for(var i=0;i<lista.length;i++){
    sumaiva+=lista[i].ivva();
    sumatotal+=lista[i].total();
  }
  neto=sumatotal+sumaiva;
  if (valDesc==3) {
    descuento=sumatotal*0.03;
    descProd=sumatotal*0.97;
    descIva=sumaiva*0.97;
    descTotal=neto*0.97;
  }else if(valDesc==5){
    descuento=sumatotal*0.05;
    descProd=sumatotal*0.95;
    descIva=sumaiva*0.95;
    descTotal=neto*0.95;
  }else if (valDesc==8) {
    descuento=sumatotal*0.08;
    descProd=sumatotal*0.92;
    descIva=sumaiva*0.92;
    descTotal=neto*0.92;
  }else{
    descuento=sumatotal*0.1;
    descProd=sumatotal*0.9;
    descIva=sumaiva*0.9;
    descTotal=neto*0.9;
  }
  let txt="";
    txt+="<tr><td>$"+descuento+
          "</td><td>$"+descProd+
          "</td><td>$"+descIva+
          "</td><td>$"+descTotal+"</td>";
    txt+="</tr>";
  document.getElementById('desc1').innerHTML=txt; 
}
