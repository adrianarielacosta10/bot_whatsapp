const { Client,LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Función para agregar un retraso en la ejecución del código
function delay(t, v) {
    return new Promise(function(resolve) {
        setTimeout(resolve.bind(null, v), t);
  })
  }

// Crear una sola instancia del cliente de WhatsApp
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: false }
});

client.on('ready', () => {
    console.log('Listo para Conectar!');
});

client.on('message_create', async (msg) => {
    if (msg.body === 'Bienvenidos') {
        let chat = await msg.getChat();
        const imagen = MessageMedia.fromFilePath('./imagenes/Refrigeracion_bajo_0.png');
        if (chat.isGroup) {
            const serializedArray = chat.participants.map(({ id: { _serialized } }) => _serialized);
            client.sendMessage(msg.to, imagen, {
                caption: '*Un viaje que da inicio aquí* 🤩🚀\n\n*Es hora de que te conviertas en un profesional en la instalación de AIRES ACONDICIONADOS*\n\nHola, mi nombre es Adrián 🙋‍♂ y les quiero dar la *Bienvenida a todos ustedes por pertenecer a este grupo* exclusivo🥳, todos ustedes están aquí porque quieren salir del *_estancamiento y emprender en un negocio_ muy rentable* como es la Instalación de AIRES ACONDICIONADOS, u otros solo quieren aprender para *instalarlos en sus hogares*; sea como sea, todos tienen un mismo *objetivo* y es aprender a instalar todo tipo de AIRES ACONDICIONADOS.🤩\n\nNuestro Taller *GRATUITO* se dará el día 📅 *LUNES 29 de ABRIL* a las 7:00pm hora Perú/Colombia ⌚. En esta clase aprenderás todo sobre Instalación de AIRES ACONDICIONADOS:\n\n📍Temas de la clase:\n\n⚜️ *Instalación paso a paso*\n⚜️ *Partes de un aire acondicionado*\n⚜️ *Diferencia entre inverter y convencional*\n⚜️ *Recupero del gas refrigeración*\n⚜️ *Carga de gas refrigerante*\n\n🚨 *Ten en cuenta lo siguiente* 👇👇\n\n✅La clase se dará en vivo por *YouTube*, por lo que cualquier persona puede participar no importando su país.\n✅Solo recibirás el acceso a la *CLASE* por este grupo.\n✅Revisa a diario los mensajes que te enviaré por aquí.\n✅Momentáneamente el grupo estará *cerrado*, lo abriremos en su momento.\n✅Cualquier duda o pregunta me la puedes hacer por privado para poder ayudarte.\n\nNuevamente bienvenidos a este grupo y espero que estén listos para _aprender y emprender en este maravilloso rubro_ 💪\n\nDeja tu ♥️ si enserio estás comprometido(a) y quieres llegar a ser un profesional en la Instalación de AIRES ACONDICIONADOS 💪',
                mentions: serializedArray
            });
        }
     }
     if (msg.body === 'Invitacion') {
        let chat = await msg.getChat();
        let text = 'Buenas tardes muchach@s!👋🏼\n\n✅Si conocen a alguien que también esté *realmente interesado en sumarse a este aprendizaje* sobre instalaciones de AIRES ACONDICIONADOS, pueden sumarlos.\n\nYa que la clase es *gratis y faltan pocos dias*, tratemos de sumar más compañeros, aqui les envio el link para que lo compartan a quien quiera participar 👇🏻👇🏻👇🏻\n\nhttps://chat.whatsapp.com/FvhF6WHmbjt1vibM25DRoi';
        if (chat.isGroup) {
            const serializedArray = chat.participants.map(({ id: { _serialized } }) => _serialized);
            client.sendMessage(msg.to, text, {
                mentions: serializedArray
            });
        }
     }
    if (msg.body === 'Horarios') {
        let chat = await msg.getChat();
        let text = '*ATENCION GRUPO*‼️\n\n*LES ENVIO LOS HORARIOS CORRECTOS PARA CADA PAIS*👇 por favor activa tu recordatorio para no perdertelo📣📣📣📣\n\n🇵🇪Perú 7 PM\n🇦🇷 Argentina: 9 PM\n🇲🇽 México: 6 PM\n🇨🇴 Colombia: 7 PM\n🇨🇱 Chile:  9 PM\n🇬🇹 Guatemala: 6 PM\n🇪🇸 España: 2 AM del día siguiente\n🇪🇨 Ecuador: 7 PM\n🇺🇸 Estados Unidos (zona este): 8 PM\n🇩🇴 República Dominicana: 8 PM\n🇨🇷 Costa Rica: 6 PM\n🇵🇦 Panamá: 7 PM\n🇵🇾 Paraguay: 8 PM\n🇧🇴 Bolivia: 8 PM\n🇻🇪 Venezuela: 8 PM\n🇸🇻 El Salvador: 6 PM\n🇨🇦 Canadá: 8 PM\n🇺🇾 Uruguay: 9 PM\n🇵🇷 Puerto Rico: 8 PM\n🇫🇷 Francia: 1 AM del día siguiente';
    if (chat.isGroup) {
        const serializedArray = chat.participants.map(({ id: { _serialized } }) => _serialized);
        client.sendMessage(msg.to, text, {
            mentions: serializedArray
            });
        }
     }

     if (msg.body === '6dias') {
        let chat = await msg.getChat();
        const imagen = MessageMedia.fromFilePath('./imagenes/FALTAN_6.png');
        if (chat.isGroup) {
            const serializedArray = chat.participants.map(({ id: { _serialized } }) => _serialized);
            client.sendMessage(msg.to, imagen, {
                caption: '🚀 *_¡Hey, Chicos!_*\n\n📢 *_¡FALTAN SOLO 6 DÍAS para que comience la clase sobre "Aires Acondicionados"!_*\nEstamos superemocionados.\n\n👉 No importa si ya tienes conocimiento o si estás comenzando desde cero. Lo importante es tener una mente abierta y estar dispuesto a aprender.\n\n 🟢 *Para los verdaderamente comprometidos, libere un Ebook Exclusivo donde te revelo cosas como:*\n\n✅ _Equipo de seguridad y herramientas._\n✅ _Como conectar y utilizar la hidrolavadora._\n✅ _Que no hacer con la hidrolavadora._ ❌\n✅ _Desarmando el equipo de aire acondicionado._\n\n🙌 Así que, sean cual sea su nivel de experiencia, *Descarga ahora mismo el Ebook Exclusivo y ¡Prepárate para abrir tu mente y aprovechar al máximo esta clase!*\n\n*CLICK AQUI PARA DESCARGAR EL EBOOK 👇 https://bit.ly/ebookexclusivo_1*\n\n*_¡Nos vemos en 6 días para dar inicio a esta increíble clase!_*',
                mentions: serializedArray
            });
        }
     }
     if (msg.body === '3dias') {
        let chat = await msg.getChat();
        const imagen = MessageMedia.fromFilePath('./imagenes/FALTAN_3.png');
        if (chat.isGroup) {
            const serializedArray = chat.participants.map(({ id: { _serialized } }) => _serialized);
            client.sendMessage(msg.to, imagen, {
                caption: '🚀 *_¡Hola, Chic@s!_*\n\n📢 *_¡FALTAN SOLO 3 DÍAS para que comience la clase sobre "Aires Acondicionados"!_*\n\nEsten con la expectativa bien alta de todo lo que aprenderán en este MÁSTER GRATUITO 🤩\n\n👉 No importa si ya tienes conocimiento o si estás comenzando desde cero. Lo importante es tener una mente abierta y estar dispuesto a aprender.\n\n🟢 *Dato:*\nAdemás de la instalación inicial, los clientes a menudo requieren servicios de mantenimiento, reparación y reemplazo de sus sistemas de aire acondicionado a lo largo del tiempo. Esto puede *generar oportunidades adicionales* de ingresos 💰 recurrentes para el negocio.🤑\n\n*_¡Nos vemos en 3 días para dar inicio a esta increíble clase!_*',
                mentions: serializedArray
            });
        }
     }
     if (msg.body === '1dia') {
        let chat = await msg.getChat();
        const imagen = MessageMedia.fromFilePath('./imagenes/FALTA_1.png');
        if (chat.isGroup) {
            const serializedArray = chat.participants.map(({ id: { _serialized } }) => _serialized);
            client.sendMessage(msg.to, imagen, {
                caption: '*ES MAÑANAA!!!!!!!!*\n😱😱😱😱😱😱\n\n*Mañana lunes 29 de abril, a partir de las 07:00 PM hora de Colombia , inicia el viaje donde aprenderás todo sobre _Aires Acondicionados_*.\n\n¡Las clases son imperdibles! Al finalizar, les mostraremos nuestro _Programa Profesional de Instalación de AA_ con una super oferta\n\n*Puntos importantes:*\n✅ La clase se dará en vivo por *YouTube*, por lo que cualquier persona puede participar no importando su país.\n✅ Los enlaces estarán disponibles aquí en el grupo de WhatsApp, ¡estén atentos!\n\n🗓 _Prográmate para estar conmigo!_\n\n*¡Nos vemos mañana (29/04) a las 7:00PM!*',
                mentions: serializedArray
            });
        }
     }
     if (msg.body === 'EsHoy') {
        let chat = await msg.getChat();
        const imagen = MessageMedia.fromFilePath('./imagenes/ES_HOY.png');
        if (chat.isGroup) {
            const serializedArray = chat.participants.map(({ id: { _serialized } }) => _serialized);
            client.sendMessage(msg.to, imagen, {
                caption: '*¡ES HOY! La Clase 01 / 7:00 PM*\n_Aprende todo sobre Refrigeración de Aires Acondicionados_\n\n¡La espera terminó!\n\nDentro de poco será clase! ¿Estás listo/a?\n\n🗓 *Prográmate para estar presente en la clase, donde por fín aprenderás el oficio que te permitirá ganar dinero, haciendo lo que amas y que por fín diseñes la vida que siempre has soñado.*\n\nTe presentaré las claves que he aplicado y me han permitido facturar más de $300 en 24 horas.\n\n*Al final de la clase de HOY sabrás:*\n🎓 _Instalar paso a paso un Aire Acondicionado como un profesional_\n🎓 _Aprenderás a ofrecer tus servicios como profesional y generar ingresos adicionales en un mercado en alza._.\n\n*Sin duda, ésta es una de las mejores capacitaciones que he dado en mi vida.* 🤯\n\n¡Será algo nunca antes visto! Sé de lo que hablo.\n\n*¡Así que no te pierdas nuestra cita hoy!*\n\n👇 *Te comparto el horario según el país donde te encuentres.*\n\n⏰7:00 PM: Colombia 🇨🇴, México 🇲🇽, Perú 🇵🇪, Ecuador 🇪🇨\n\n⏰8:00 PM: Panamá 🇵🇦, Estados Unidos 🇺🇸\n\n⏰9:00 PM: Chile 🇨🇱, Argentina 🇦🇷\n\n⏰ 6:00 PM: 🇭🇳 🇬🇹 🇨🇷 🇳🇮 🇸🇻 Centroamérica\n\n👉 *MANTENTE ATENTO AL LINK DE LA CLASE QUE ENVIAREMOS SÓLO POR ÉSTE GRUPO DE WHATSAPP, ANTES DE INICIAR LA CLASE* ⚠⚠',
                mentions: serializedArray
            });
        }
     }
});




// client initialization...


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.initialize();