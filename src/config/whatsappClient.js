import qrcode from 'qrcode-terminal';
import pkg from 'whatsapp-web.js';
import { executablePath } from 'puppeteer';

const { Client, LocalAuth, MessageMedia } = pkg;

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    executablePath: executablePath(),
    headless: true,
    args: ['--no-sandbox'],
  },
});

client.on('qr', qr => qrcode.generate(qr, { small: true }));
client.on('ready', () => console.log('🤖 WhatsApp conectado!'));

client.initialize();

export { client, MessageMedia };
