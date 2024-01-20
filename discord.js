// Importar el módulo discord.js
const discord = require('discord.js');

// Crear un webhook con el id y el token existentes
const webhook = new discord.WebhookClient('id', 'token');

// O crear un webhook con la URL completa
// const webhook = new discord.WebhookClient({ url: 'https://discord.com/api/webhooks/id/token' });

// Obtener los inputs desde el html
const nombre = document.getElementById('nombre').value;
const version = document.getElementById('version').value;
const id = document.getElementById('id').value;
const descripcion = document.getElementById('descripcion').value;
const imagen = document.getElementById('imagen').value;

// Crear un objeto Embed con los datos
const embed = new discord.MessageEmbed()
  .setTitle(nombre)
  .setDescription(descripcion)
  .addField('Versión', version)
  .addField('ID', id)
  .setThumbnail(imagen)
  .setColor('RANDOM');

// Enviar el mensaje embed al canal de discord
webhook.send(embed);
