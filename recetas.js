function filtrarRecetas(){
    let fl=document.getElementById("myInput");
    let filtro=fl.value.toUpperCase();
    let contenedor=document.getElementsByClassName("container")[1]
    let recetas=contenedor.getElementsByClassName("portfolio-caption-heading")

    for (let elemento of recetas){

        let comparar=elemento.textContent.toUpperCase()

        if(comparar.indexOf(filtro)>-1){
            elemento.parentNode.parentNode.parentNode.style.display="";
        }else{
            elemento.parentNode.parentNode.parentNode.style.display="none";
        }

    }
}

