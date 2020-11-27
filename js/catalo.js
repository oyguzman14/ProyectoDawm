function cargarDatos(){

    fetch('data/tortas.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
    let html='';

    //console.log(data);
    
    
    data.forEach(function(torta){

    html += `

    

          <div class="col-lg-2 col-md-6 mb-4" >
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src=${torta.imagen} alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a class="bocado" href="#">${torta.nombre}</a>
                </h4>
                <h5>${torta.precio+ "c/100"} </h5>
                <p class="card-text">${torta.descripcion}</p>
              </div>
             
            </div>
          </div>

          


    `;
    
    
    })
    document.getElementById("row").innerHTML=html;
    
    
    
    })
    .catch(function(error){
        console.log(error);
    })
    
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        cargarDatos();
        
      })
        
    