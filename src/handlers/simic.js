import { sendWithTyping } from "../utils/sendWithTyping.js";

const opcoesSIMIC = {
  31: async (chat, msg) => {
    const texto = `🚪 *31 - SAÍDA TEMPORÁRIA*  

📋 *REQUISITOS EXIGIDOS AO SENTENCIADO:*  
- Cumprimento de pena em *Regime Semiaberto*;  
- *Bom comportamento carcerário*;  
- Ter cumprido no mínimo *1/6 da pena* para primários e *1/4 para reincidentes*;  
- *Autorização do Juízo competente*;  
- *Recursos financeiros* em conta Pecúlio 15 dias antes da saída para custear passagem de ida e volta.  

📌 *Importante:* Os requisitos devem ser atingidos *15 dias antes* da data da saída temporária, exceto o comportamento, que deve ser mantido até o dia da saída.

📄 *DOCUMENTOS DE REMESSA OBRIGATÓRIA PELOS FAMILIARES:*  
- *Comprovante de endereço atualizado*, enviado por:  
  • E-mail: *cdpsor@sap.sp.gov.br* (informar dados do preso);  
  • Ou carta remetida ao preso.  

✔️ O comprovante deve ser:  
- Conta de consumo do último mês (Luz, Água ou Telefone);  
- Em nome do sentenciado ou do familiar que será visitado;  
- Em caso de imóvel alugado: apresentar *declaração padrão emitida pelo proprietário*, com *firma reconhecida em cartório*.`;

    await sendWithTyping(chat, msg.from, texto);
  },
  32: async (chat, msg) => {
    const texto = `💼 *32 - AUXÍLIO RECLUSÃO DO INSS*  

📝 *INFORMAÇÕES SOBRE SOLICITAÇÃO DE CERTIDÃO DE RECOLHIMENTO PRISIONAL:*  

A *Certidão de Recolhimento Prisional* é um documento necessário para solicitação do Auxílio Reclusão.  

⚠️ *Atenção:*  
A *Secretaria da Administração Penitenciária (SAP)* não é responsável por autorizar ou pagar o benefício. Toda análise e pagamento são de responsabilidade do *INSS*.

📬 *Solicitação deve ser feita por e-mail:*  
cadastro@cdpsor.sap.sp.gov.br  

📎 *Documentos necessários:*  
- Dados do detento;  
- Para esposa: cópia de documento pessoal da requerente e dos filhos;  
- Para mãe do detento: cópia de documento pessoal;  
- Se for via advogado: *procuração assinada pelo(a) requerente*.  

💡 Também pode ser solicitado nos postos da *CAEF* (Centro de Atendimento ao Egresso e Família), órgão ligado à Coordenadoria de Reintegração Social.`;

    await sendWithTyping(chat, msg.from, texto);
  },
};

export default opcoesSIMIC;
