
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




/*////////////////////////////////////// Validación /////////////////////////////////////////////////*/




function validacion(val){
      var elemento = document.getElementById(val);
      if(elemento.checkValidity())
          elemento.style.borderColor="Aqua";
      else
          elemento.style.borderColor = "red";
    }
    function buttonAction()
    {
      var nombreVal=document.getElementById('nombre').checkValidity();
      var emailVal=document.getElementById('email').checkValidity();

      if(nombreVal && emailVal){
        alert("Su informacion fue enviada exitosamente");
      } else{
        alert("Por Favor revise sus campos.");
      }   
    }
