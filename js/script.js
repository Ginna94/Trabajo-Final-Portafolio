

/*////////////////////////////////////// Validación /////////////////////////////////////////////////*/

var Appformulario={};

 Appformulario.validacion = function(){
   
    return {
         validarPalabras: function(){
          var nombre = document.getElementById("nombre").value;
          var email = document.getElementById("email").value;
          var mensaje=document.getElementById("mensaje").value;
          guardar = [];
  
          var signos = /^([a-zA-Z0-9_.-])+@(([a-zA-z0-9-])+.)+([a-zA-Z0-9-]{2,4})+$/ ;

             if( nombre == null || nombre.length == 0 || email == null || email.length == 0 || mensaje == null || mensaje.length == 0){
               alert("Dejo uno o varios espacios sin completar");
                 return false;
            }

            if(!signos.test(email)){
               alert("Revisa tu correo");
                 return false;
            }else{
              guardar.push(nombre,email,mensaje);
              document.getElementById("form").reset();
              alert("Mensaje enviado");
              console.log(form);
              return false;
            }
           }//validarpalabras
         }//return*/

}();

    /*////////////////////////////////////// Ajax /////////////////////////////////////////////////*/


function ajaxRequest(){

var mygetrequest =new XMLHttpRequest();
mygetrequest.onreadystatechange = function(){
  if (mygetrequest.readyState === 4 &&  mygetrequest.status == 200){
    var jsonObj = JSON.parse(mygetrequest.responseText);

    var content = "";
    for (var i = 0; i < jsonObj.Proyectos.length; i++) {    
        content +='<li class="img-proyecto"><img class="img-more" src="'+jsonObj.Proyectos[i].imgmore+'"><img class="img-proyecto-ajax" src= '+
        jsonObj.Proyectos[i].img+'><span class="description"><h2 class = text-description>'+
        jsonObj.Proyectos[i].Nombre+'</h2></li>'
    };

      document.getElementById("container-project").innerHTML = content;
  }
}
mygetrequest.open("GET", "js/proyectos.json", true);
mygetrequest.send();
};
ajaxRequest();







