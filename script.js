const input_nombre= document.getElementById("nombre");
const input_edad= document.getElementById("edad");
const input_curso= document.getElementById("curso");

const div_resultado= document.getElementById("resultado");

let lista_db = JSON.parse(localStorage.getItem('lista_db')) || []
mostrar_lista('lista_db')

function guardar(){
     const estudiante = {
     'nombre' : "",
     'edad' :"",
     'curso' : "",
     'notas' : [],
     'materias' : [],
}

function guardar(){
     const docente = {
          'nombre' :"",
          'especialidad' :,
          'cursos' : [],
     }
}

{
     function guardar(){
          const estudiante = {
          'nombre' : input_nombre,value,
          'edad' : input_edad.value,
          'curso' : input_curso.value,
          'notas' : []
     }

lista_estudiante.push(estudiante)


localStorage.setItem('lista_db', JSON.stringify(lista_db))
mostrar_lista(lista_db)
}

function calcular_promedio(lista_notas){
     suma = 0
     for 
     prom = suma / cantidad
     return prom
}

function guardar(){
     if(nota >=1 && nota <=10){
          lista_db[id].notas.push(nota)
          mostrar_lista(lista_db)
}else{
      alert("NOTA NO VALIDA")
}
     
     const nombre = input_nombre.value
     const edad = input_edad.value
     const curso = input_curso.value

     div_resultado.innerHTML = <h1>"DATO INGRESADO:" +" nombre + "</h1>
     div_resultado.innerHTML += <h1>"DATO INGRESADO:" " + edad " </h1>

     lista.push(estudiante)
}

function borrar(){
     div_resultado.innerHTML = ""
     localStorage.removeItem('lista_db')


}
localStorage.setItem('clave', "valor")
localStorage.getItem('clave')




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





