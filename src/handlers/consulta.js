import pool from '../config/db.js';
import { sendWithTyping } from '../utils/sendWithTyping.js';
import { awaitingCPF, awaitingMatricula } from '../utils/state.js';

export const handleCPF = async (chat, msg, messageBody) => {
  // Finaliza o estado de "aguardando CPF" para esse usuário
  awaitingCPF.delete(msg.from);

  try {
    const [rows] = await pool.execute(
      `SELECT Nome_Visi FROM visitantes_cad 
       WHERE Cpf_Visi = ? 
       AND AUTORIZA = 'A' 
       AND Status_Visi = 'A' 
       LIMIT 1`,
      [messageBody]
    );

    if (rows.length > 0) {
      const nome = rows[0].Nome_Visi ?? 'Visitante';
      await sendWithTyping(chat, msg.from, `✅ *Carteirinha encontrada!*  
👤 *Nome:* ${nome}  
📄 *Situação:* Emitida e autorizada para visitação.`);
    } else {
      await sendWithTyping(chat, msg.from, `⚠️ *Nenhuma carteirinha emitida para esse CPF.*  
Verifique se o cadastro foi realizado corretamente ou aguarde a liberação.`);
    }
  } catch (err) {
    console.error('Erro ao consultar carteirinha:', err);
    await sendWithTyping(chat, msg.from, '❌ Ocorreu um erro ao consultar a carteirinha. Tente novamente mais tarde.');
  }
};

export const handleMatricula = async (chat, msg, messageBody) => {
  // Finaliza o estado de "aguardando matrícula" para esse usuário
  awaitingMatricula.delete(msg.from);

  try {
    const [rows] = await pool.execute(
      `SELECT Pav_Cel, Cela_Cel FROM celas 
       WHERE LEFT(Matric_Cel, LENGTH(Matric_Cel) - 1) = ? 
       AND Dl_Cel = '+' 
       AND Fim_Cel IS NULL 
       LIMIT 1`,
      [messageBody]
    );

    if (rows.length > 0) {
      const preso = rows[0];
      await sendWithTyping(chat, msg.from, `✅ *Detento encontrado:*  
📌 *Ala:* ${preso.Pav_Cel}  
📌 *Cela:* ${preso.Cela_Cel}`);
    } else {
      await sendWithTyping(chat, msg.from, `⚠️ *Detento não encontrado na unidade.*  
Verifique se a matrícula está correta ou se o detento foi transferido.  
Lembre-se: *NÃO DIGITE O DÍGITO, PONTOS OU TRAÇOS!*`);
    }
  } catch (err) {
    console.error('Erro ao consultar detento:', err);
    await sendWithTyping(chat, msg.from, '❌ Ocorreu um erro ao consultar o detento. Tente novamente mais tarde.');
  }
};
