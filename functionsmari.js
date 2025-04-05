function toggleMobilebarraNav() {
  document.getElementById("nav-links-container").classList.toggle("active");
}

/*const buttons = document.querySelectorAll(".tarjeta");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let perfil = this.dataset.perfil; // Obtiene el perfil (admin o customer)

    // Si el perfil es "customer", va a "customer/descripcion.html"
    // Si es "admin" (o cualquier otro valor), va a "admin/d-0003.html"
    let ruta = perfil === "customer" ? "customer/descripcioncustomer.html" : "admin/descripcionadmin.html";

    // Redirige a la ruta correspondiente
    window.location.href = `/perfiles/${ruta}`;
  });
});*/


// Iniciar sesion
const loginButton = document.getElementById('iniciarSesionButton');
if (loginButton) {
  loginButton.addEventListener("click", function() {
    window.location.href = "/Municipalidad v1.1rev/login.html";
  });
}

const loginButton2 = document.getElementById('iniciarSesionButton2');
if (loginButton2) {
  loginButton2.addEventListener("click", function() {
    window.location.href = "/Municipalidad v1.1rev/login.html";
  });
}



// Filtro de tarjetas por categoría, tipo y búsqueda

// Este script se encarga de filtrar las tarjetas de servicios según la categoría, tipo y búsqueda introducida por el usuario.
// Esperamos a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

  // Seleccionamos los elementos de los filtros: categorías, tipos y búsqueda
  const filtroCategoria = document.getElementById("filtroCategoria");
  const filtroTipo = document.getElementById("filtroTipo");
  const busqueda = document.getElementById("busqueda");

  // Seleccionamos todas las tarjetas que vamos a filtrar
  const tarjetas = document.querySelectorAll(".tarjeta");

  // Función que filtra los servicios según la categoría, tipo y búsqueda
  function filtrarServicios() {

    // Obtenemos los valores actuales de los filtros
    const categoria = filtroCategoria.value;
    const tipo = filtroTipo.value;
    const texto = busqueda.value.toLowerCase(); // Convertimos la búsqueda a minúsculas para comparación

    // Recorremos cada tarjeta para aplicar el filtro
    tarjetas.forEach((tarjeta) => {

      // Obtenemos el título y la descripción de cada tarjeta
      const titulo = tarjeta.querySelector(".tarjeta-title").textContent.toLowerCase();
      const descripcion = tarjeta.querySelector(".tarjeta-tarjetatexto").textContent.toLowerCase();

      // Verificamos si la tarjeta pertenece a alguna de las categorías
      const esGeneral = tarjeta.parentElement.classList.contains("tarjetaServicios-Top");
      const esHacendario = tarjeta.parentElement.classList.contains("tarjetaServicios");
      const esUrbano = tarjeta.parentElement.classList.contains("tarjetaUrbanos");

      // Inicializamos la variable de coincidencia de categoría
      let coincideCategoria = false;

      // Comprobamos si la categoría seleccionada coincide con la tarjeta
      if (categoria === "todos") {
        coincideCategoria = true; // Si es "todos", mostramos todas las categorías
      } else if (categoria === "generales" && esGeneral) {
        coincideCategoria = true; // Si es "generales", mostramos solo los servicios generales
      } else if (categoria === "hacendarios" && esHacendario) {
        coincideCategoria = true; // Si es "hacendarios", mostramos solo los servicios hacendarios
      } else if (categoria === "urbanos" && esUrbano) {
        coincideCategoria = true; // Si es "urbanos", mostramos solo los servicios urbanos
      }

      // Verificamos si el tipo seleccionado coincide con el título o descripción
      let coincideTipo = tipo === "todos" ||
        titulo.includes(tipo) || // Verificamos si el tipo está en el título
        descripcion.includes(tipo); // Verificamos si el tipo está en la descripción

      // Verificamos si el texto de búsqueda está en el título o en la descripción
      let coincideTexto = titulo.includes(texto) || descripcion.includes(texto);

      // Si la tarjeta coincide con todos los filtros (categoría, tipo y búsqueda), la mostramos
      if (coincideCategoria && coincideTipo && coincideTexto) {
        tarjeta.style.display = "block";
      } else {
        tarjeta.style.display = "none"; // Si no, la ocultamos
      }
    });
  }

  // Si los elementos de los filtros existen, les añadimos los event listeners
  if (filtroCategoria && filtroTipo && busqueda) {
    filtroCategoria.addEventListener("change", filtrarServicios); // Cuando se cambie la categoría, aplicamos el filtro
    filtroTipo.addEventListener("change", filtrarServicios); // Cuando se cambie el tipo, aplicamos el filtro
    busqueda.addEventListener("input", filtrarServicios); // Cuando se cambie la búsqueda, aplicamos el filtro
  }
});

