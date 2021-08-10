/*
 function suma() {
 var numero1 = parseFloat(document.getElementById("txt numero1").value);
 var numero2 = parseFloat(document.getElementById("txt numero2").value);
 var resultado = numero1 + numero2;
 document.getElementById("txt resultado").value = resultado;
 
 */
  
var intervalo  ;
var bandera = 1;
 var posicionleft = 0;
 
function operaciones(opcion) {

    var numero1 = parseFloat(document.getElementById("txt numero1").value);
    var numero2 = parseFloat(document.getElementById("txt numero2").value);
     
    var resultado = 0 ;
    
    switch (opcion) {
        case"S":
            resultado = numero1 + numero2;
            break;

        case"R":
            resultado = numero1 - numero2;
            break;

        case"M":
            resultado = numero1 * numero2;
            break;

        case"D":
            resultado = numero1 / numero2;
            break;
            
                  
    }

 document.getElementById("txt resultado").value = resultado;

}

function encender(){
            document.getElementById("bombilla").src="imagenes/bombilla.jpg";
    }   
    
    function apagar(){
            document.getElementById("bombilla").src="imagenes/bombilla off.jpg";
    }
    


function encendersecuencia(){
intervalo = window.setInterval(function( ){
    posicionleft= posicionleft + 1;
    if ( bandera==1){
    encender();
    bandera = 0;
} else{
    apagar( );
    bandera = 1;}
   document.getElementById("bombilla").style.left = posicionleft+"px";
    
 }, 500 );       
        
        }
        
      
     function apagarsecuencia(){
         clearInterval(intervalo);
         
     }
     
   
      