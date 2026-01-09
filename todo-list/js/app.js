const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tareasTbody");
const Datos = [];

function ListarDatos(){
        tabla.innerHTML = ''
        Datos.forEach((dato,index) => {
            tabla.innerHTML += `<tr>
                <td>${dato.Tarea}</td>
                <td>${dato.Materia}</td>
                <td>${dato.Fecha}</td>
                <td><input type="checkbox"></td>
            </tr>`
        }
        )
    }

formulario.addEventListener('submit',function(event){
    event.preventDefault();
    const Tarea = document.getElementById("Tarea").value.trim();
    const Materia = document.getElementById("Materia").value.trim();
    const Fecha = document.getElementById("Fecha").value.trim();

    if (Tarea !== '' && Materia !== '' && Fecha !== '' ) {
        Datos.push({Tarea,Materia,Fecha})
        console.log(Datos);
        ListarDatos();
        formulario.reset();
    }
    else{
        alert("Rellena los campos");
    }

    
});