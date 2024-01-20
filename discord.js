    // Esta función envía un mensaje embed a un webhook de discord
    // Los parámetros son: nombre, versión, descripción e imagen
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
    }

    // Esta función se ejecuta cuando el usuario hace clic en el botón de enviar
    function enviarAlerta() {
      // Obtenemos los valores de los inputs
      var nombre = document.getElementById("nombre").value;
      var version = document.getElementById("version").value;
      var descripcion = document.getElementById("descripcion").value;
      var imagen = document.getElementById("imagen").value;
      // Llamamos a la función enviarMensajeEmbed con esos valores
      enviarMensajeEmbed(nombre, version, descripcion, imagen);
    }
