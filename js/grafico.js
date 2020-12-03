function cargarDatos(){
    let arreglo=[];

fetch("../../data/tortas.json")
    .then((resultado)=>{
        return resultado.json()
    })

    .then((data)=>{
        
        for (let nuevo of data){
            if(arreglo.length==0){
                arreglo.push({categoria:nuevo.categoria,cantidad:0})    
            }

            let value=false
            let num=0;

            for(i=0;i<arreglo.length;i++){
                if(arreglo[i].categoria==nuevo.categoria){
                    value=true;
                    num=i;
                    break
                }
            }

            if(value){
                arreglo[num].cantidad+=1;
            }else{
                arreglo.push({categoria:nuevo.categoria,cantidad:0})
            }

        }
    })



   
    .then(()=>{
        console.log(arreglo)

    })

    .then(()=>{
        new Morris.Bar({

            // ID of the element in which to draw the chart.
            element: 'myfirstchart',
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: arreglo,
        
        
            // The name of the data record attribute that contains x-values.
            xkey: 'categoria',
            // A list of names of data record attributes that contain y-values.
            ykeys: ['cantidad'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['Cantidad'],
            resize:true
        
        
          });

    })

    .catch((error)=>{
        console.log("Error"+error)
    })

}

document.addEventListener('DOMContentLoaded', function() {
    cargarDatos();
    
  })



//arreglo.push("nuevo")



