  function enviarMensajeEmbed(nombre, version, descripcion, imagen) {
  // Creamos un objeto XMLHttpRequest para hacer la petición
  var xhr = new XMLHttpRequest();
  // Abrimos la conexión con el método POST y la URL del webhook
  xhr.open("POST", "https://discord.com/api/webhooks/1113955060863484024/9vRng3-D6lNdzmtaa6budrfbqSf2zq1X3AHEcatx_LEx_Dak8KAXLQVS5OhVnazfTvoK");
  // Establecemos el tipo de contenido a JSON
  xhr.setRequestHeader("Content-Type", "application/json");
  // Creamos el objeto embed con los datos que queremos enviar
  var embed = {
    title: nombre,
    description: descripcion,
    image: {
      url: imagen
    },
    footer: {
      text: "Versión " + version
    }
  };
  // Convertimos el objeto embed a una cadena JSON
  var data = JSON.stringify({
    embeds: [embed]
  });
  // Enviamos la petición con los datos del embed
  xhr.send(data);
  // Capturamos el evento de error
  xhr.onerror = function() {
    // Obtenemos el elemento de error
    var errorElement = document.getElementById("error");
    // Si el status es 400, mostramos el mensaje personalizado
    if (xhr.status == 400) {
      errorElement.innerHTML = "Tomnto, la url de la imagen no es válida";
    } else {
      // Si no, mostramos el mensaje por defecto
      errorElement.innerHTML = xhr.statusText;
    }
    // Cambiamos el estilo del elemento de error para que sea visible
    errorElement.style.display = "block";
  };
}
