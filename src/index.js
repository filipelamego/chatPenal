
import { sendWithTyping } from './utils/sendWithTyping.js';
import { awaitingCPF, awaitingMatricula } from './utils/state.js';
import { isGreeting, handleGreeting, getMenuPrincipal, handleMainMenu } from './handlers/menu.js';
import opcoesSeguranca from './handlers/seguranca.js';
import opcoesPeculio from './handlers/peculio.js';
import opcoesSIMIC from './handlers/simic.js';
import opcoesCRAS from './handlers/cras.js';
import opcoesAdvOf from './handlers/advOf.js';
import { handleCPF, handleMatricula } from './handlers/consulta.js';
import { client } from './config/whatsappClient.js';

client.on('message', async msg => {
  if (!msg.from.endsWith('@c.us')) return;
  const chat = await msg.getChat();
  const text = msg.body.trim().toLowerCase();

  if (isGreeting(msg.body)) {
    await handleGreeting(chat, msg);
    return;
  }

  if (text === 'menu') {
    await sendWithTyping(chat, msg.from, getMenuPrincipal(), 2000);
    return;
  }

  if (['1','2','3','4','5','6'].includes(text)) {
    await handleMainMenu(chat, msg, text);
    return;
  }

  if (opcoesSeguranca[text]) return opcoesSeguranca[text](chat, msg);
  if (opcoesPeculio[text])  return opcoesPeculio[text](chat, msg);
  if (opcoesSIMIC[text])     return opcoesSIMIC[text](chat, msg);
  if (opcoesCRAS[text])      return opcoesCRAS[text](chat, msg);
  if (opcoesAdvOf[text])     return opcoesAdvOf[text](chat, msg);

  if (awaitingCPF.has(msg.from) && /^\d{11}$/.test(text)) {
    return handleCPF(chat, msg, text);
  }
  if (awaitingMatricula.has(msg.from) && /^\d{5,10}$/.test(text)) {
    return handleMatricula(chat, msg, text);
  }

  await sendWithTyping(
    chat, msg.from,
    `❌ Não entendi sua mensagem.  
Digite *menu* para acessar o menu principal.
Lembrando que este whatsapp *NÃO ATENDE LIGAÇÕES*, pois opera de forma automatizada!`
  );
});
