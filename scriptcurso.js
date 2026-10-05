let lista_db = JSON.parse(localStorage.getItem('lista_db')) || []
function mostrarLista(){
     for(let i = 0; i < lista.length; i++){
          let estudiante = lista[i]
          div_resultado.innerHTML += "<h1>nombre:  " + estudiante.nombre + " <h2>"
          div_resultado.innerHTML += "<h3>edad:  " + estudiante.edad + " <h4>"
          div_resultado.innerHTML += "<h5>curso:  " + estudiante.curso + " <h6>"
          div_resultado.innerHTML += "<h3>notas: " + estudiante.notas + "<h3>"
          div_resultado.innerHTML += "<h3>promedio: " +  + "<h3>"
          div_resultado.innerHTML += "<label for=nota>Nueva nota:</label>"
          div_resultado.innerHTML += "<input type = 'number' name = id='nota'"+id+">"
          div_resultado.innerHTML += "<button type=ibutton' onclick='guardarnota("+i+")'<Guardar</button>"
          div_resultado.innerHTML += "<h6>---------------------------------------------------------</h6>"
     }
}
function mostrarLista(){
     for(let i = 0; i < lista.length; i++){
       let docente = lista[i]   
        div_resultado.innerHTML += "<h1>nombre:  " + docente.nombre + " <h2>"
         div_resultado.innerHTML += "<h5>curso:  " + docente.curso + " <h6>"
           div_resultado.innerHTML += "<h3>especialidad:  " + docente.especialidad + " <h4>"
     }
}

