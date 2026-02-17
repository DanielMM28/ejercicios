document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    const fechaInicio = new Date(document.getElementById("fechaInicio").value); 
    const sexo = document.getElementById("sexo").value;

    const hoy = new Date();

   
    let edadActual = hoy.getFullYear() - fechaNacimiento.getFullYear();
   
    let edadPension = sexo === "mujer" ? 57 : 62;
    let añosFaltantes = edadPension - edadActual;

    let diff = hoy - fechaInicio;
    let semanasCotizadas = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

    const SEMANAS_REQUERIDAS = 1300;
    
    let semanasFaltantes = SEMANAS_REQUERIDAS - semanasCotizadas;

    let mensaje = "";

    if (edadActual >= edadPension && semanasCotizadas >= SEMANAS_REQUERIDAS) {
        mensaje = `${nombre}, ya puedes pensionarte 🎉`;
    } else {
        mensaje = `${nombre}, de ${edadActual} años, `;
        
        if (añosFaltantes > 0) {
            mensaje += `te faltan ${añosFaltantes} años  y `;
        } else {
            mensaje += `ya cumples la edad, `;
        }

        if (semanasFaltantes > 0) {
            mensaje += `te faltan ${semanasFaltantes} semanas cotizadas para pensionarte.`;
        } else {
            mensaje += `y ya cumples las semanas requeridas.`;
        }
    }

    document.getElementById("resultado").innerText = mensaje;
});

