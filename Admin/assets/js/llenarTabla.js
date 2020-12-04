let llenarTabla = () => {

	fetch("/data/tortas.json")
	.then((res)=>{
		return res.json();
	})
	.then((data)=>{
		//console.log(data);
		let table=document.getElementById("table");
		let tbody=document.createElement("tbody");
		table.appendChild(tbody);

		data.forEach((archivo)=>{
			let tr=document.createElement("tr");
			tr.innerHTML=`
				<tr>
	             	<td>
	                  ${archivo.nombre}
	                </td>
	            	<td>
	                  ${archivo.categoria}
	            	</td>
	            	<td style="width:1000px">
	                  ${archivo.descripcion}
	            	</td>
	             	<td >
	                  ${archivo.precio}
	             	</td>
	             </tr>
			`;
			tbody.appendChild(tr);

		});
	})

}

document.addEventListener('DOMContentLoaded', ()=>{
	llenarTabla();
})