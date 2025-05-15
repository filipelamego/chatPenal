import { sendWithTyping } from "../utils/sendWithTyping.js";

export const getMenuPrincipal = () => `
📋 *MENU PRINCIPAL*

1 - 👥 *Visitantes* (Consultas / Documentações)
2 - 💰 *Pecúlio* (Depósitos / Retiradas)  
3 - 📄 *SIMIC* (Saída Temporária / Auxílio Reclusão)  
4 - 📝 *CRAS* (Registros de Paternidade / Óbitos)  
5 - ⚖️ *Advogados / Oficiais de Justiça*  
6 - 📞 *Telefones Úteis / Endereço*

ℹ️ Digite "menu" para voltar aqui a qualquer momento.
`;

export const handleGreeting = async (chat, msg) => {
  await sendWithTyping(
    chat,
    msg.from,
    `🐶 *Olá! Sou o Léo, assistente virtual do CDP Sorocaba.*

⚠️ *Atenção:* Este WhatsApp opera em modo automático.  
Não acessamos as mensagens e não atendemos ligações realizadas via aplicativo.
`
  );
  await sendWithTyping(chat, msg.from, getMenuPrincipal());
};

export const isGreeting = (text) => {
  const normalized = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return /\b(dia|tarde|noite|oi|ola|preciso|informacao|ajuda)\b/i.test(
    normalized
  );
};

export const handleMainMenu = async (chat, msg, option) => {
  switch (option) {
    case "1":
      await sendWithTyping(
        chat,
        msg.from,
        `
👥 Visitantes - digite o número correspondente a opção desejada:
10 - 📅 Calendário de Visitação  
11 - 👕 Vestuário para Visitantes  
12 - 🧾 Cadastro de Visitantes  
13 - 📦 Sedex e Cartas  
14 - 📞 Conexão Familiar
15 - 🪪 Consultar Carteirinha
16 - 👤 Consultar Detento
      `
      );
      break;
    case "2":
      await sendWithTyping(
        chat,
        msg.from,
        `
💰 *PECÚLIO - Digite o número da opção desejada:*  

21 - 🧾 Depósito do Reeducando para Familiar  
22 - 🏛️ Retirada de Valores na Unidade Prisional (Pós Liberdade)  
23 - 🏦 Receber Depósito em Banco (Pós Liberdade)  
24 - 💳 Depósito via PIX
      `
      );
      break;
    case "3":
      await sendWithTyping(
        chat,
        msg.from,
        `
📑 *SIMIC - Digite o número da opção desejada:*

31 - 🏃‍♂️ Saída Temporária  
32 - 💰 Auxílio Reclusão (INSS)
      `
      );
      break;
    case "4":
      await sendWithTyping(
        chat,
        msg.from,
        `
🏢 *CRAS - Digite o número da opção desejada:*  

41 - 👶 Reconhecimento de Paternidade  
42 - 🪦 Óbitos Familiares  
43 - 🧠 Assistência Social / Psicologia
      `
      );
      break;
    case "5":
      await sendWithTyping(
        chat,
        msg.from,
        `
⚖️ *ADVOGADOS E OFICIAIS DE JUSTIÇA - Digite o número da opção desejada:*  

51 - 🏢 Atendimento Presencial  
52 - 📞 Agendamento de Teleatendimento  
53 - 📄 Boletins, Atestados e Grades
      `
      );
      break;
    case "6":
      await sendWithTyping(
        chat,
        msg.from,
        `
📞 *TELEFONES E ENDEREÇO*

📱 *Telefones para contato*  
*(Antes de ligar, consulte as informações no menu do WhatsApp)*  
Telefone Principal: (15) 3335-2303  
Ao ligar, digite a opção desejada:  
1 - Rol de Visitas  
2 - Pecúlio  
3 - Serviço Social  
4 - Alvará/Cadastro  
5 - Recursos Humanos  
6 - Saúde  
7 - Teleaudiência  
8 - Finanças  
9 - Segurança e Disciplina  

📧 *E-mails funcionais:*  
• Rol de Visitas: roldevisitas@cdpsor.sap.sp.gov.br  
• Pecúlio: peculio@cdpsor.sap.sp.gov.br  
• Assistente Social: reintegracao@p2sorocaba.sap.sp.gov.br  
• CIMIC: cimic@cdpsor.sap.sp.gov.br  

📍 *Endereço:*  
Avenida Doutor Antônio de Souza Neto, 300  
Aparecidinha - Sorocaba/SP – CEP 18.087-210  
📌 Localização: https://goo.gl/maps/qCTQ2CBJs92mCYww5  

🌐 *Site da SAP:*  
https://www.sap.sp.gov.br/`
      );
      break;
  }
};
