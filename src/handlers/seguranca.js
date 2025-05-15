import pkg from "whatsapp-web.js";
const { MessageMedia } = pkg;
import { sendWithTyping } from "../utils/sendWithTyping.js";
import { awaitingCPF, awaitingMatricula } from "../utils/state.js";

const opcoesSeguranca = {
  10: async (chat, msg) => {
    const media = MessageMedia.fromFilePath("./docs/calendario_visita.pdf");
    await sendWithTyping(chat, msg.from, "📄 CALENDÁRIO DE VISITAÇÃO:");
    await chat.sendMessage(media);
  },
  11: async (chat, msg) => {
    const texto = `📌 *Conforme Resolução SAP vigente, as regras sobre vestimentas são:*

📖 *Artigo 115* – Para ingresso em estabelecimento penal, todos os visitantes, inclusive crianças e adolescentes, deverão observar os seguintes critérios quanto ao vestuário:

I - Uso de camisetas com manga (curta ou longa), *exceto* nas cores: azul marinho, branca, caqui/marrom e preta.  
II – Uso de calça de moletom ou legging, *sem botões metálicos, sem zíper e sem estampas*, exceto nas cores acima.  
III – Visitantes do sexo feminino também podem usar *saias tipo “midi”* (abaixo dos joelhos).  
IV – Uso de *chinelo de dedo*, com solado fino e alças de borracha simples.  
V – Em dias frios, é permitido o uso de *meias e blusa de moletom*, desde que *sem capuz, forro, bolsos, botões metálicos ou zíper*, e respeitando as cores permitidas.

🚫 *Artigo 115-A* – É *proibido* à pessoa privada de liberdade *trocar ou emprestar roupas e/ou pertences com visitantes*.`;
    await sendWithTyping(chat, msg.from, texto);
  },
  12: async (chat, msg) => {
    const mensagens = [
      "📄 *DOCUMENTAÇÃO PARA INCLUSÃO DE VISITANTES*",
      `I - CÓPIA AUTENTICADA DO RG (VALIDADE DE 10 ANOS DA DATA DE EXPEDIÇÃO) E DO CPF OU CNH

II - CÓPIA DO DOCUMENTO DO PRESO COMPROVANDO GRAU DE PARENTESCO, AVÓS DEVEM ENVIAR CERTIDÃO DE NASCIMENTO (OBRIGATÓRIO)

III - AMÁSIA: DECLARAÇÃO DE AMÁSIA OU DE UNIÃO ESTÁVEL DIGITADA, COM ASSINATURA DA DECLARANTE E DUAS TESTEMUNHAS RECONHECIDAS AS ASSINATURAS EM CARTÓRIO, COM DATA DO INÍCIO DA UNIÃO (MÊS E ANO).`,
      `IV - CERTIDÃO DE ANTECEDENTES CRIMINAIS DO ESTADO DE ORIGEM DO RG.  
V - COMPROVANTE DE ENDEREÇO EM NOME DA VISITA OU DECLARAÇÃO COM CONTA.  
VI - GESTANTE: CÓPIA DA CARTEIRA DE GESTANTE.  
VII - 2 FOTOS 3X4.`,

      `📌 *Observações*:  
- *Filhos e Netos (menores de 18 anos)*: Sem antecedentes criminais.  
- *Amásia*: Declaração assinada e reconhecida em cartório.

📬 *Endereço de envio*:  
Rol de Visita  
Av. Drº Antonio de Souza Neto, Nº 300  
Aparecidinha – Sorocaba – SP  
CEP: 18087-210`,

      `🤰 *Gestantes*: cópia onde conste o nome e a data provável do parto.  
📅 Aguardar no mínimo *10 dias* após envio.  
📞 Ligue: *(15) 3335-2303* para saber sobre a carteirinha.`,
    ];

    for (const texto of mensagens) {
      await sendWithTyping(chat, msg.from, texto, 1000);
    }
  },
  13: async (chat, msg) => {
    const media = MessageMedia.fromFilePath("./docs/anexo_II.pdf");

    await sendWithTyping(
      chat,
      msg.from,
      `📄 *Relação de produtos e alimentos permitidos:*  
Segue o arquivo PDF contendo todas as orientações sobre os itens referentes à alimentação e jumbo.

📬 *Atenção:* Telegramas e/ou cartas registradas *somente poderão ser enviados por pessoas devidamente cadastradas no ROL DE VISITAS do sentenciado.*`
    );

    await chat.sendMessage(media);
  },
  14: async (chat, msg) => {
    await sendWithTyping(
      chat,
      msg.from,
      `
📬 *14 - CONEXÃO FAMILIAR*

🆕 *NOVIDADES DO PROGRAMA CONEXÃO FAMILIAR*

📌 *Nova regra sobre CORRESPONDÊNCIAS VIRTUAIS:*

✉️ *Troca de Mensagens Eletrônicas:*  
Será permitido envio de *01 (uma)* mensagem (e-mail) por mês.  
 O/A visitante receberá por e-mail a confirmação do recebimento pelo reeducando. *NÃO HAVERÁ OUTRA RESPOSTA*, apenas a confirmação do recebimento da mensagem.

🔗 Para mais informações sobre o programa Conexão Familiar, acesse:  
https://www1.sap.sp.gov.br/conexao-familiar.html#top
	`
    );
  },
  15: async (chat, msg) => {
    await sendWithTyping(
      chat,
      msg.from,
      "🪪 Digite o CPF do(a) visitante, somente números:"
    );
    awaitingCPF.add(msg.from);
  },
  16: async (chat, msg) => {
    await sendWithTyping(
      chat,
      msg.from,
      "👤 Digite a matrícula do detento, somente números e sem o dígito:"
    );
    awaitingMatricula.add(msg.from);
  },
};

export default opcoesSeguranca;
