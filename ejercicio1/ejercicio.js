document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    const sexo = document.getElementById("sexo").value;

    const hoy = new Date();
    let edadActual = hoy.getFullYear() - fechaNacimiento.getFullYear();

    let edadPension = sexo === "mujer" ? 57 : 62;
    let añosFaltantes = edadPension - edadActual;
  let diff = hoy - fechaInicio;
    let semanasCotizadas = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

    // SEMANAS QUE FALTAN
    const SEMANAS_REQUERIDAS = 1300;
    let semanasFaltantes = SEMANAS_REQUERIDAS - semanasCotizadas;
    let mensaje = "";

    if (añosFaltantes > 0) {
        mensaje = `a ${nombre}, de ${edadActual} años le faltan ${añosFaltantes} años y ${semanasFaltantes} semanas cotizadas para pensionarse.`;
    } else {
        mensaje = `${nombre}, ya puedes pensionarte 🎉`;
    }

    document.getElementById("resultado").innerText = mensaje;
});


