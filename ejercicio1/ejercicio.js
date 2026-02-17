document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    const sexo = document.getElementById("sexo").value;

    const hoy = new Date();
    let edadActual = hoy.getFullYear() - fechaNacimiento.getFullYear();

    // Ajuste si aún no ha cumplido años este año
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edadActual--;
    }

    let edadPension = sexo === "mujer" ? 57 : 62;
    let añosFaltantes = edadPension - edadActual;

    let mensaje = "";

    if (añosFaltantes > 0) {
        mensaje = `a ${nombre}, de ${edadActual} años le faltan ${añosFaltantes} años para pensionarse.`;
    } else {
        mensaje = `${nombre}, ya puedes pensionarte 🎉`;
    }

    document.getElementById("resultado").innerText = mensaje;
});
