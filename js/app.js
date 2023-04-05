class Personas {
    constructor(nombre, edad, dni, sexo, peso, altura, fechaNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.fechaNacimiento = fechaNacimiento;
    }
  
    getNombre() {
      return this.nombre;
    }
    setNombre(newNombre) {
      this.nombre = newNombre;
    }
    getEdad() {
      return this.edad;
    }
    setdad(newEdad) {
      this.edad = newEdad;
    }
    getDNI() {
      return this.dni;
    }
    setDNI(newDNI) {
      this.dni = newDNI;
    }
    getSexo() {
      return this.sexo;
    }
    setSexo(newSexo) {
      this.sexo = newSexo;
    }
    getPeso() {
      return this.peso;
    }
    setPeso(newPeso) {
      this.peso = newPeso;
    }
    getAltura() {
      return this.altura;
    }
    setAltura(newAltura) {
      this.altura = newAltura;
    }
    getNacimiento() {
      return this.fechaNacimiento;
    }
    setNacimiento(newNacimiento) {
      this.fechaNacimiento = newNacimiento;
    }
  
   
    
  
     mostrarDatos (){
      document.write(`<ul>
          <li>Nombre: ${this.nombre}</li>
          <li>Edad: ${this.edad}</li>
          <li>Año de nacimiento: ${this.fechaNacimiento}</li>
          <li>DNI: ${this.dni}</li>
          <li>Sexo: ${this.sexo}</li>
          <li>Peso: ${this.peso} kg</li>
          <li>Altura: ${this.altura} cm</li>
          </ul>`);
      }
  
      
   }

let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', persona);
let persona1;
  
function persona(e){
    e.preventDefault();
    let nombre  = document.getElementById('nombre');
   console.log(nombre.value);
   let edad = document.getElementById('edad');
   console.log(edad.value);
   let dni = document.getElementById('dni');
   console.log(dni.value);
   let  sexo= document.getElementById('sexo');
   console.log(sexo.value);
   let peso = document.getElementById('peso');
   console.log(peso.value);
   let  altura= document.getElementById('altura');
   console.log(altura.value);
   let  fechaNacimiento= document.getElementById('fechaNacimiento');
   console.log(fechaNacimiento.value);
   
    
     persona1 = new Personas(nombre.value, edad.value, dni.value, sexo.value, peso.value, altura.value, fechaNacimiento.value);
    console.log(persona1)
    return persona1;
 
}

 function esMayorDeEdad(){
    if(persona1.edad >= 18){
        alert(`${persona1.nombre} usted tiene ${persona1.edad} años. Es mayor de edad.`);
    }else{
        alert(`<h2>${persona1.nombre} usted tiene ${persona1.edad} años. Es menor de edad.</h2>`);
    }
 }
 function mostrarGeneracion() {
    let anio_nacimiento = persona1.fechaNacimiento;

   if (anio_nacimiento >= 1994 && anio_nacimiento <= 2010) {
     alert(
       "Pertece a la generacion Z su rasgo caracteristico es: Irreverancia"
     );
   } else {
     if (anio_nacimiento >= 1981 && anio_nacimiento <= 1993) {
       alert(
         "Pertece a la generacion Y su rasgo caracteristico es: Frustración"
       );
     } else {
       if (anio_nacimiento >= 1969 && anio_nacimiento <= 1980) {
         alert(
           "Pertece a la generacion X su rasgo caracteristico es: Obsesión por el éxito"
         );
       } else {
         if (anio_nacimiento >= 1949 && anio_nacimiento <= 1968) {
           alert(
             "Pertece a la generacion BabyBoom su rasgo caracteristico es: Ambición"
           );
         } else {
           if (anio_nacimiento >= 1930 && anio_nacimiento <= 1948) {
             alert(
               "Pertece a la generacion Silent Generation su rasgo caracteristico es: Austeridad"
             );
           }
         }
       }
     }
   }
 }
